import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { number } from 'prop-types';

const Register = ({ history }) => {
  const [email] = useState('');
  const [password] = useState('');
  const [name] = useState('');
  const [phone] = useState('');
  const [dateOfBirth] = useState('');
  const [address] = useState('');

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push('/');
    }
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto rounded">
        <Card className="auth-card  ">
          <div className="position-relative image-side ">
            <p className="text-white h2">WELCOME TO PEACHY HEALTHCARE</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="linkic">
                login
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input type="name" defaultValue={name} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Date of birth" />
                </Label>
                <Input type="date" defaultValue={dateOfBirth} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Address" />
                </Label>
                <Input type="textarea" defaultValue={address} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.email" />
                </Label>
                <Input type="email" defaultValue={email} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Phone number" />
                </Label>
                <Input type="number" defaultValue={phone} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.password" defaultValue={password} />
                </Label>
                <Input type="password" />
              </FormGroup>

              {/* <div className="d-flex justify-content-end align-items-center">
                <button className="positive" onClick={() => onUserRegister()}>
                  <IntlMessages id="user.register-button" />
                </button>
              </div> */}

              <button className="positive">
                <a
                  style={{ color: '#fff' }}
                  href="https://peachy-helthcare-patient.web.app"
                >
                  REGISER
                </a>
              </button>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
