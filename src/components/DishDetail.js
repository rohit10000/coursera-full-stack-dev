import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function RenderDish({dish}){
    if(dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({comments}){
    return (
        <div className={"col-12 col-md-5 m-1"}>
            <div>
                <h4>Comments</h4>
            </div>
            <ul className="list-unstyled">
                {
                    comments.map((comment, i) =>{
                        return(
                            <li key={comment.id}>
                                <p>
                                    {comment.comment}
                                </p>
                                <p>
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                    { year: 'numeric', month: 'short', day: '2-digit'})
                                    .format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

function DishDetail(props){
        return(
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12 col-md-5 m-1"}>
                        <RenderDish dish={props.dish}/>
                    </div>
                    {
                        props.dish ? (
                            <RenderComments comments={props.dish.comments}/>

                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        )
}

export default DishDetail;
