import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import Select from 'react-select';

import { createNotification } from '../NotificationExamples';

const AppointmentCard = ({ fullName, match, zero, one, two, three, four }) => {
  const [showModal, setModal] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const formatDate = new Date(zero * 1000);

  const timeDate = formatDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const types = () => {
    if (two == 1) {
      return <p>VIDEO</p>;
    } else if (two == 2) {
      return <p>FTF</p>;
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (
      result === ''
    ) {
      //setError('Please fill all the fields.');
      createNotification(
        'error',
        'filled',
        'Error',
        'Please select the result of the test'
      );
    } else {
      setError('');
      setModal(false)
      // history.push('/user/login');
      createNotification(
        'primary',
        'filled',
        'Congratulations',
        'PDF will be sent now!'
      );
    }
  };

  return (
    <div className="docListComp privremeno">
      <div className="left">
        <p>{timeDate}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        {types()}
        <p>£{three}</p>
      </div>
      <div className="right">
        <button className="positive" onClick={() => setModal(!showModal)}>Send Certificate</button>
      </div>
      <Modal
        size="lg"
        isOpen={showModal}
        toggle={() => setModal(!showModal)}
      >
        <ModalHeader>
          Certificate Sending Options
        </ModalHeader>
        <ModalBody>
          <Select
            theme={customTheme}
            placeholder="Choose test result"
            styles="LSelect"
            options={need}
            autoFocus
            isSearchable
            value={need.filter((n) => n.value === result)}
            onChange={(e) => setResult(e.value)}
          />
        </ModalBody>
        <ModalFooter>
          <button className="positive" onClick={(e) => handleClick(e)}>
            Send Certificate
          </button>
        </ModalFooter>
      </Modal>
      {/* <div className="right">
        <Link to={`/app/doctors/request`}>
          <button className="positive">{four}</button>
        </Link>
      </div> */}
    </div>
  );
};

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'rgba(0, 0, 0, 0.1)',
      primary25: 'rgba(0, 0, 0, 0.1)',
      neutral50: '#000',
      neutral80: '#000',
      neutral90: '#000',
    },
  };
}

const need = [
  { value: '1', label: 'Positive' },
  { value: '2', label: 'Negative' },
  { value: '3', label: 'Unclear' },
];

export default React.memo(AppointmentCard);
