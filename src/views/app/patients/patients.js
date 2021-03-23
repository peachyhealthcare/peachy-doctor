import React, { useState, useRef, useEffect } from 'react';
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardComp from '../../../components/cards/UserCardCompP';
import NotesSignature from '../../../components/modals/notesSignatures';
import { database } from '../../../helpers/Firebase';

function Second({ match }) {
  const [modalBasic, setModalBasic] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    database.ref('/users').on('value', (snapshot) => {
      setUsers(snapshot.val());
      console.log(users);
    });
  }, []);

  return (
    <>
      {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Row>
            <Col lg="6">
              <h3>Patients</h3>
            </Col>
            <Col lg="6">
              <button className="positive" onClick={() => setModalBasic(true)}>
                PRESCRIPTION
              </button>
            </Col>
          </Row>

          <Separator className="mb-5" />
          <div className="docContainer">
            {/* <div className="contHead">
            <p>Join Requests </p> <p>|</p> <p> Approved Doctors</p>
          </div> */}
            {users &&
              Object.values(users)
                .filter((user) => user.role === 'patient')
                .map(
                  (
                    {
                      date,
                      doctor,
                      location,
                      service,
                      type,
                      selfID,
                      fullName,
                      email,
                      phone,
                      address,
                    },
                    index
                  ) => (
                    <UserCardComp
                      selfID={selfID}
                      zero={fullName}
                      one={email}
                      two={phone}
                      three={address}
                      // four="VIEW REQUEST"
                      a1When="August 27, 2020 10:20 PM"
                      a1Doctor="Dr. Lina Matthew"
                      a1Type="Video"
                    />
                  )
                )}
          </div>
        </Colxx>
      </Row>
      <Modal
        size="lg"
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
    </>
  );
}
export default Second;
