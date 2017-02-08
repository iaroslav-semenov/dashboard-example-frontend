import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBlock, CardHeader } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import style from '../../Styles/login.scss';

class Login extends React.Component {
    render() {
        return (
            <Container className="h-100">
                <Row className="justify-content-center h100p">
                    <Col sm="6" className="align-self-center">
                        <Card>
                            <CardHeader>Login</CardHeader>
                            <CardBlock>
                                <Form>
                                    <FormGroup>
                                        <Input name="login" placeholder="Login" type="text"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input name="password" placeholder="Password" type="password"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            type="submit"
                                            outline color="primary"
                                            className="float-sm-right">
                                            Let me in
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;