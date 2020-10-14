import React, { Component } from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

import { connect } from 'react-redux';
import {addComment, fetchDishes} from "../redux/ActionCreators";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        console.log(this.props)
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            isLoading={this.props.dishes.isLoading}
                            dishesErrMess={this.props.dishes.errMess}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            addComment={this.props.addComment}
                />
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>} />
                    <Route exact path='/contactus' component={() =>
                        <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>
                        }
                    />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path={'/aboutus'}>
                        <About props={this.props}/>
                    </Route>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addComment: (dishId, rating, author, comment) => {
            dispatch(addComment(dishId, rating, author, comment))
        },
        fetchDishes: () =>{
            dispatch(fetchDishes())
        },
        resetFeedbackForm: ()=>{
            dispatch(actions.reset('feedback'))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
