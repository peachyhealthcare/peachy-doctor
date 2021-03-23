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
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input type="name" defaultValue={name} />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Date of birth" />
                    </Label>
                    <Input type="date" defaultValue={dateOfBirth} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Address" />
                    </Label>
                    <Input type="text" defaultValue={address} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Input type="email" defaultValue={email} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Phone number" />
                    </Label>
                    <Input type="number" defaultValue={phone} />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Base practice?" />
                </Label>
                <Input type="textarea" defaultValue={basePractice} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Language spoken" />
                </Label>
                <Input type="text" defaultValue={language} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Specialty" />
                </Label>
                <Input type="textarea" defaultValue={specialty} />
              </FormGroup>

              <CardTitle className="mb-4">
                <IntlMessages id="Registered Body" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Name" />
                </Label>
                <Input type="text" defaultValue={specialty} />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Number" />
                    </Label>
                    <Input type="text" defaultValue={specialty} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Renewal date" />
                    </Label>
                    <Input type="date" defaultValue={specialty} />
                  </FormGroup>
                </Col>
              </Row>

              <CardTitle className="mb-4">
                <IntlMessages id="Courses undertaken. (if yes)" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Name of course" />
                </Label>
                <Input type="text" defaultValue={specialty} />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Institution" />
                    </Label>
                    <Input type="text" defaultValue={specialty} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Date completed" />
                    </Label>
                    <Input type="date" defaultValue={specialty} />
                  </FormGroup>
                </Col>
              </Row>

              <CardTitle className="mb-4">
                <IntlMessages id="Right to work in the UK" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Upload your drivers licence" />
                </Label>
                <DropzoneExample ref={dropzone} />
              </FormGroup>

              <CardTitle className="mb-4">
                <IntlMessages id="Indemnity Insurance" />
              </CardTitle>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Company" />
                </Label>
                <Input type="text" defaultValue={specialty} />
              </FormGroup>

              <Row form>
                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Policy number" />
                    </Label>
                    <Input type="text" defaultValue={specialty} />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup className="form-group has-float-label  mb-4">
                    <Label>
                      <IntlMessages id="Renewal date" />
                    </Label>
                    <Input type="date" defaultValue={specialty} />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Charge per hour (average)" />
                </Label>
                <Input type="text" defaultValue={specialty} />
                <FormText color="muted">*This will be used as a guide</FormText>
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
                  href="https://peachy-healthcare.web.app/user/login"
                  style={{ color: '#fff' }}
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
