import React, { Component} from 'react';
import {DISHES} from '../shared/dishes';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class Book extends Component {


	render ()
	{
		return(
			<Container >
        <h2>Book you Car</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="ph">Mobile number</Label>
              <Input
                type="number"
                name="ph"
                id="ph"
                placeholder="+919898989898"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="issue">Issue date</Label>
              <Input
                type="date"
                name="issue"
                id="issue"
               
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="return">Return date</Label>
              <Input
                type="date"
                name="return"
                id="return"
               
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>



			);
	}
}
export default Book;