import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish){
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
    renderComments(comments){
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
                                        -- {comment.author}, {comment.date}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }

    render() {
        return(
            <div className={"row"}>
                <div className={"col-12 col-md-5 m-1"}>
                    {this.renderDish(this.props.selectedDish)}
                </div>
                {
                    this.props.selectedDish ? (
                        this.renderComments(this.props.selectedDish.comments)

                    ):(
                        <div></div>
                    )
                }
            </div>
        )
    }

}

export default DishDetail;
