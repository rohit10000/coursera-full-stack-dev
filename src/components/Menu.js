import React, { Component } from 'react';
import {CardText, Card, CardImg, CardImgOverlay, CardTitle, CardBody} from 'reactstrap';
import DishDetail from "./DishDetail";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish});
        console.log(this.state.selectedDish);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width={"100%"} src={require("../../public/"+dish.image)} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <DishDetail selectedDish = {this.state.selectedDish}/>

            </div>
        );
    }
}

export default Menu;
