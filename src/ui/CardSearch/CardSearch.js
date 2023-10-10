import React from "react";

import { Form, FormGroup } from "react-bootstrap";
import  "../CardSearch/CardSearch.css"
const FindForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
      <Form.Select aria-label="Default select example" className="form__group">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

    <Form.Select aria-label="Default select example" className="form__group mt-3">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Plan</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindForm;
