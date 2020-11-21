import React, {Component, useState} from 'react';
import {Card, Icon, Input} from 'react-native-elements';
import {Text, View, ScrollView, FlatList, Modal, Button, StyleSheet} from 'react-native';

import {connect} from "react-redux";
import {baseUrl} from "../shared/baseUrl";
import {postComment, postFavorite} from "../redux/ActionCreators";
import {Rating} from "react-native-elements";

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {

        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{
                    Array(item.rating).fill(<Icon name={'star'} type={"font-awesome"} size={15} color={"yellow"}/>).map((star) =>{
                        return star
                    })
                }</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


function RenderDish(props){

    const dish = props.dish;

    if(dish != null){
        return(
            <Card
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Icon
                        raised
                        reverse
                        name={ props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? alert('Already favorite') : props.onPress()}
                    />
                    <Icon
                        raised
                        name={ 'pencil'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.toggleModal()}

                    />
                </View>
            </Card>
        );
    }
    else{
        return(
            <View></View>
        )
    }
}
class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state={
            dishId: this.props.route.params.dishId,
            showModal: false,
            rating: 3,
            comment: '',
            author: ''
        }
    }

    markFavorite = (dishId) => {
        this.props.postFavorite(dishId);
    }

    toggleModal = () =>{
        this.setState({showModal: !this.state.showModal});
    }

    ratingCompleted = (rating) => {
        this.setState({rating: rating})
    }

    submitComment = () => {
        this.props.postComment(this.state.dishId, this.state.rating, this.state.author, this.state.comment);
        this.toggleModal();
    }


    render() {
        const {dishId} = this.props.route.params;
        return(
            <ScrollView>
                <Modal animationType = {"slide"} transparent = {false}
                       visible = {this.state.showModal}
                       onDismiss = {() => this.toggleModal() }
                       onRequestClose = {() => this.toggleModal() }>
                    <View style={styles.body}>
                        <Rating
                            showRating
                            onFinishRating={this.ratingCompleted}
                            style={styles.item}
                        />

                        <Input
                            placeholder='Author'
                            leftIcon={
                                <Icon
                                    name='user-o'
                                    type={'font-awesome'}
                                    size={24}
                                    color='black'
                                    iconStyle={{marginRight: 10}}
                                />
                            }
                            onChangeText={(value) => this.setState({author: value})}
                            containerStyle={styles.item}
                        />
                        <Input
                            placeholder="Comment"
                            leftIcon={
                                <Icon
                                    name='comment-o'
                                    type={'font-awesome'}
                                    size={24}
                                    color='black'
                                    iconStyle={{marginRight: 10}}
                                />
                            }
                            onChangeText={(value) => this.setState({comment: value})}
                            containerStyle={styles.item}
                        />
                        <View style={styles.button}>
                            <Button
                                onPress = {() => this.submitComment()}
                                color="#512DA8"
                                title="SUBMIT"
                            />
                        </View>

                        <View style={styles.button}>
                            <Button
                                color="lightgrey"
                                title="CANCEL"
                                onPress={() => this.toggleModal()}
                            />
                        </View>


                    </View>
                </Modal>
                <RenderDish dish={this.props.dishes.dishes[+dishId]}
                            favorite={this.props.favorites.some(el => el === dishId)}
                            toggleModal={this.toggleModal}
                            onPress={() => this.markFavorite(dishId)}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    body: {
        justifyContent: "center",
    },
    item: {
        paddingBottom: 10
    },
    button:{
        paddingTop: 20
    }
})

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
