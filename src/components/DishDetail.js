import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentForm";
import { Loading } from './Loading';

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

function RenderComments({comments, addComment, dishId}){
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
            <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
    );
}

function DishDetail(props){
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <RenderComments comments={props.comments}
                                    addComment={props.addComment}
                                    dishId={props.dish.id}
                    />
                </div>
            </div>
        )
    }
}

export default DishDetail;
