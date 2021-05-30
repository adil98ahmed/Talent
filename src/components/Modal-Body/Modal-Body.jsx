import React from "react";
import Form from 'react-bootstrap/Form'

function ModalBody() {
  return (
    <div>
      <Form>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5 className="mb-0 overflow-hidden">Full Name</h5></Form.Label>
          <Form.Control type="email" placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5 className="mb-0 overflow-hidden">Username</h5></Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5 className="mb-0 overflow-hidden">Email address</h5></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5 className="mb-0 overflow-hidden">User Group</h5></Form.Label>
          <Form.Control type="email" placeholder="Choose user group" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5 className="mb-0 overflow-hidden">Assign Profile</h5></Form.Label>
          <Form.Control type="email" placeholder="Choose profile" />
        </Form.Group>
        
      </Form>
    </div>
  );
}

export default ModalBody;
