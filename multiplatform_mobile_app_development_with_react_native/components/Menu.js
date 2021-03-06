import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Loading} from "./Loading";

import { Tile } from 'react-native-elements';


import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

class Menu extends Component{
    constructor(props) {
        super(props);
    }

    render() {

        const {navigate} = this.props.navigation;

        if (this.props.dishes.isLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.dishes.errMess) {
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            );
        }
        else {
            const renderMenuItem = ({item, index}) => {
                return (
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('DishDetail', { dishId: item.id })}
                        imageSrc={{ uri: baseUrl + item.image}}
                    />
                );
            };

            return (
                <FlatList
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}


export default connect(mapStateToProps)(Menu);
