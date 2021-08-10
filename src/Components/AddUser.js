import React from 'react'
import { Link } from 'react-router-dom';
import {
       Form,
       FormGroup,
       Label,
       Input,
       Button

} from 'reactstrap';

export const AddUser = () => {
    return (
      <Form>
          <FormGroup>
              <label>Country</label>
              <Input type="text" placeholder="Enter Country"></Input>
          </FormGroup>
          <Button type="submit">SUBMIT</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}
