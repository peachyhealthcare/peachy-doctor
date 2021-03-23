import React, { useState, useRef } from 'react';
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { number } from 'prop-types';

import DropzoneExample from '../../containers/forms/DropzoneExample';
import ReactSelectExample from '../../containers/forms/ReactSelectExample';

const Register = ({ history }) => {
  const [email] = useState('');
  const [password] = useState('');
  const [address] = useState('');
  const [name] = useState('');
  const [phone] = useState('');
  const [dateOfBirth] = useState('');
  const [basePractice] = useState('');
  const [language] = useState('');
  const [specialty] = useState('');

  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push('/');
    }
  };
  const dropzone = useRef();
  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto rounded">
        <Card className="p-5 mt-5 mb-5  ">
          {/* <div className="position-relative image-side ">
            <p className="text-white h2">WELCOME TO PEACHY HEALTHCARE</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{' '}
              <NavLink to="/user/login" className="white">
                login
              </NavLink>
              .
            </p>
          </div> */}
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
                  <IntlMessages id="Pharmacy Name" />
                </Label>
                <Input type="name" defaultValue={name} />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Address" />
                    </Label>
                    <Input type="text" defaultValue={dateOfBirth} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Phone number" />
                    </Label>
                    <Input type="text" defaultValue={address} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Email Address" />
                    </Label>
                    <Input type="email" defaultValue={email} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="NHS Email address" />
                    </Label>
                    <Input type="email" defaultValue={phone} />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="GPHC number" />
                </Label>
                <Input type="input" defaultValue={basePractice} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Superintendent Name" />
                </Label>
                <Input type="text" defaultValue={language} />
              </FormGroup>

              <CardTitle className="mb-4">
                <IntlMessages id="Consultation Rooms *" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Number, Size of each, Facilities (e.g. sink, chair, bed, plug sockets)" />
                </Label>
                <Input type="textarea" defaultValue={specialty} />
              </FormGroup>

              <CardTitle className="mb-4">
                <IntlMessages id="Rental charge for room *" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Average rental charge per day" />
                </Label>
                <Input type="text" defaultValue={specialty} />
              </FormGroup>

              <CardTitle className="mb-4">
                <IntlMessages id="Opening hours *" />
              </CardTitle>

              <ReactSelectExample />

              <div className="d-flex justify-content-end align-items-center">
                <button className="positive" onClick={() => onUserRegister()}>
                  <IntlMessages id="user.register-button" />
                </button>
              </div>
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
