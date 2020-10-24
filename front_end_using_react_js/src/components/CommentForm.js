import React, {Component} from "react";
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import {Control, Errors, LocalForm} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        this.toggleModal();
        alert("Values: " + JSON.stringify(values)+ values.rating);
    }


    render() {
        return (

            <div className={"CommentForm"}>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className={"form-group"}>
                                <Label htmlFor={"rating"} xs={12}>
                                    Rating
                                </Label>
                                <Col xs={12} >
                                    <Control.select model=".rating" id="rating" name={"rating"}
                                    className={"form-control"}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className={"form-group"}>
                                <Label htmlFor={"name"} xs={12}>
                                    Your Name
                                </Label>
                                <Col xs={12}>
                                    <Control.text model={".author"} id={"name"} className={"form-control"} name={"author"}
                                                  placeholder={"Your Name"}
                                                  validators={{required, minLength: minLength(3), maxLength:maxLength(15)}}/>
                                    <Errors model={".author"} className={"text-danger"}
                                            show={"touched"} messages={{
                                        required: 'Required ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>
                                </Col>

                            </Row>
                            <Row className={"form-group"}>
                                <Label htmlFor={"comment"} xs={12}>
                                    Comment
                                </Label>
                                <Col xs={12}>
                                    <Control.textarea id={"comment"} className={"form-control"} name={"comment"}
                                    rows={6} model={".comment"}/>
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"/> Submit Comment</Button>
            </div>
        );
    }

}

export default CommentForm;
