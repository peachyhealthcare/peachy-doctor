import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PharmacyPrescription from '../../components/cards/pharmacyPrescription';

import {
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Card,
  CardBody,
  Badge,
  Button,
  CardTitle,
  ModalFooter,
} from 'reactstrap';

import NotesSignature from '../../components/modals/notesSignatures';

const UserCard = ({
  fullName,
  match,
  zero,
  one,
  two,
  three,
  four,
  a1When,
  a1Doctor,
  a1Type,
}) => {
  const [modalLarge, setModalLarge] = useState(false);
  const [modalBasic, setModalBasic] = useState(false);

  return (
    <div className="docListComp user" onClick={() => setModalLarge(true)}>
      <div className="left">
        <p>{zero}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
      </div>
      {/* <div className="right">
        <Link to={`/app/doctors/request`}>
          <button className="positive">{four}</button>
        </Link>
      </div> */}
      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>{zero}</ModalHeader>
        <ModalBody>
          <div className="flexColl">
            <Card className="mb-4 mr-4">
              {/* <div className="position-absolute card-top-buttons">
                <Button outline color="white" className="icon-button">
                  <i className="simple-icon-pencil" />
                </Button>
              </div> */}
              {/* <SingleLightbox
                thumb={pic}
                large={pic}
                className="card-img-top"
              /> */}

              <CardBody>
                <div className="flexColl">
                  <div>
                    <p className="text-muted text-small mb-2">Full name</p>
                    <p className="mb-3">{zero}</p>

                    <p className="text-muted text-small mb-2">Email</p>
                    <p className="mb-3">{one}</p>
                    <p className="text-muted text-small mb-2">Phone</p>
                    <p className="mb-3">{two}</p>
                  </div>
                </div>
                <p className="text-muted text-small mb-2">Address</p>
                <p className="mb-3">{three}</p>
                <p className="text-muted text-small mb-2">Date of birth</p>
                <p className="mb-3">01.01.1981</p>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardBody>
                <CardTitle>Appointments</CardTitle>
                <div className="activityComp">
                  <div>
                    <p>{a1When}</p>
                    <p>{a1Doctor}</p>
                    <p>{a1Type}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="mb-4">
              <CardBody>
                <CardTitle>Prescriptions</CardTitle>
                <PharmacyPrescription />
                <PharmacyPrescription />
                <button
                  className="positive"
                  onClick={() => setModalBasic(true)}
                >
                  ADD PRESCRIPTION
                </button>
              </CardBody>
            </Card>
          </div>
        </ModalBody>
      </Modal>
      <Modal
        // size="lg"
        isOpen={modalBasic}
        toggle={() => setModalBasic(!modalBasic)}
      >
        <ModalHeader>Write your signature below</ModalHeader>
        <ModalBody>
          <NotesSignature />
        </ModalBody>
        <ModalFooter>
          <button className="negative" onClick={() => setModalBasic(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(UserCard);
