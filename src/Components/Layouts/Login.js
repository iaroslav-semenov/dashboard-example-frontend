import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBlock, CardTitle } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import style from '../../Styles/login.scss';

class Login extends React.Component {
    render() {
        return (
            <Container className="align-slef-center">
                <Row className="justify-content-center">
                    <Col sm="6" className="align-self-center">
                        <Card>
                            <CardBlock>
                                <CardTitle>Login</CardTitle>
                                <p className="hint-text">some text in red</p>
                                <Form>
                                    <FormGroup>
                                        <Input name="login" placeholder="Login" type="text"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input name="password" placeholder="Password" type="password"/>
                                    </FormGroup>
                                    <Button type="submit">Let me in</Button>
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