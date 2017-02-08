import React, { PropTypes } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const LoginForm = ({ onSubmit }) => (
    <Form onSubmit={ (event) => onSubmit(event) }>
        <FormGroup>
            <Input name="login" placeholder="Login" type="text"/>
        </FormGroup>
        <FormGroup>
            <Input name="password" placeholder="Password" type="password"/>
        </FormGroup>
        <FormGroup>
            <Button
                color="link"
                href="/amnezia"
                className="float-sm-left pl-0">
                I forgot who I am
            </Button>
            <Button
                type="submit"
                outline color="primary"
                className="float-sm-right">
                Let me in
            </Button>
        </FormGroup>
    </Form>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;