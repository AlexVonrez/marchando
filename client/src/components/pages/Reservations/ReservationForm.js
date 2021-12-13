import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import UserService from "../../../services/user.service";

export default class NewReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      length: "",
      inversions: "",
      imageUrl: "",
    };

    this.service = new UserService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.service
      .createCoaster(this.state)
      .then((response) => {
        this.props.closeModal();
        this.props.refreshCoasters();
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.title}
            name="title"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.description}
            name="description"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="length">
          <Form.Label>Longitud</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.length}
            name="length"
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inversions">
          <Form.Label>Inversiones</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.inversions}
            name="inversions"
            type="text"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear oferta
        </Button>
      </Form>
    );
  }
}
