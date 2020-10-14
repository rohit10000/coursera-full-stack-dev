import * as ActionTypes from './ActionTypes';
// import fetch from "cross-fetch";

import {baseUrl} from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) =>{
    return {
        type: ActionTypes.ADD_COMMENT,
        payload:{
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
}

export const dishesLoading = () =>{
    return {
        type: ActionTypes.DISHES_LOADING
    }
}

export const dishesFailed = (errmess) => {
    return{
        type: ActionTypes.DISHES_FAILED,
        payload:errmess
    }
}

export const addDishes = (dishes) => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    }
}

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());
    console.log("Debug in fetchDishes1: ")

    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchComments = () => {
    return function (dispatch) {
        return fetch(baseUrl+'comments')
            .then(res => res.json())
            .then(comments => dispatch(addComments((comments))));
    }
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchPromos = () => {
    return function (dispatch){
        dispatch(promosLoading())

        return fetch(baseUrl + 'comments')
            .then(res => res.json())
            .then(promos => dispatch(addPromos(promos)));
    }
}

