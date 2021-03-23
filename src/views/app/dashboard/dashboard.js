import React, { useState, useRef, useEffect } from 'react';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCard from '../../../components/cards/IconCard';
import GlideComponent from '../../../components/carousel/GlideComponent';
import {
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import SignaturePad from 'react-signature-canvas';

import AppointmentCard from '../../../components/cards/AppDashCard';

import { database } from '../../../helpers/Firebase';

function Dashboard() {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    database.ref('/bookings').on('value', (snapshot) => {
      setBookings(snapshot.val());
      console.log(bookings);
    });
  }, []);

  // bookings.filter((booking) => booking.status === 'pending');

  return (
    <>
      {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.start" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h3>
            {/* <IntlMessages id="menu.dashboard" /> */}
            Dashboard
          </h3>
          <Separator className="mb-5" />
          <div className="dashMain">
            <div className="dashMainLeft">
              <div className="dashLeft">
                <IconCard
                  value="46"
                  title="Patients"
                  icon="iconsminds-address-book-2"
                />
                <IconCard
                  value="76"
                  title="Appointments"
                  icon="iconsminds-calendar-4"
                />
                {/* <IconCard
                  value="37"
                  title="Video Consultations"
                  icon="iconsminds-webcam"
                /> */}
              </div>
              <div className="dashContainer mb-4">
                <h3 className="mb-2">New Appointments</h3>
                {/* {Signature()} */}
                {/* <img src={Signature.state.imageURL} alt="sign" /> */}
                {/* <AppointmentCard
                  zero="December 19, 2020 10:20 PM"
                  one="Warren D Hunt"
                  two="VIDEO"
                  three="30"
                  four="ACCEPT"
                  four2="DENY"
                />
                <AppointmentCard
                  zero="Nov 7, 2020 10:20 PM"
                  one="Cody L Perez"
                  two="VIDEO"
                  three="40 "
                  four="ACCEPT"
                  four2="DENY"
                />
                <AppointmentCard
                  zero="Nov 3, 2020 10:20 PM"
                  one="Rob M Burke

                        "
                  two="FTF"
                  three="60"
                  four="ACCEPT"
                  four2="DENY"
                />{' '}
                <AppointmentCard
                  zero="Dec 15, 2020 10:20 PM"
                  one="Jeremy D Foster

                        "
                  two="FTF"
                  three="55"
                  four="ACCEPT"
                  four2="DENY"
                /> */}
                {bookings &&
                  Object.values(bookings)
                    .filter((booking) => booking.status === 'pending')
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
                          address,
                          phone,
                          email,
                        },
                        index
                      ) => (
                        <AppointmentCard
                          zero={date}
                          one={fullName}
                          two={type}
                          selfID={selfID}
                          three="60"
                          four="DETAILS"
                          four2="DENY"
                          dn="Dr. Lina Matthew"
                          dt="Dermatologists"
                          dp="(873)-777-6781"
                          da="2401 W 6th St"
                          pl={address}
                          pp={phone}
                          pa={email}
                          pn={fullName}
                          location={location}
                        />
                      )
                    )}
              </div>
            </div>
            <div className="dashRight mb-4">
              <div className="appointmentComp">
                <h3>Today's Appointments</h3>

                <div className="drComp">
                  <div className="drCompIn">
                    <div className="userOver">
                      <p>Becky Williams</p>
                    </div>

                    <div>
                      <p>10:20 PM</p>
                      <p>FTF</p>
                    </div>
                  </div>
                </div>

                <div className="drComp">
                  <div className="drCompIn">
                    <div className="userOver">
                      <p>Justin Castro</p>
                    </div>

                    <div>
                      <p>12:20 PM</p>
                      <p>VIDEO</p>
                    </div>
                  </div>
                </div>

                <div className="drComp">
                  <div className="drCompIn">
                    <div className="userOver">
                      <p>Michael Garrett</p>
                    </div>

                    <div>
                      <p>14:20 PM</p>
                      <p>FTF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Colxx>
      </Row>
    </>
  );
}
export default Dashboard;

function Signature() {
  const [modalBasic, setModalBasic] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

  return (
    <div className="signatureModal">
      <button className="positive" outline onClick={() => setModalBasic(true)}>
        Signature
      </button>

      <Modal
        size="lg"
        isOpen={modalBasic}
        toggle={() => setModalBasic(!modalBasic)}
      >
        <ModalHeader>Write your signature below</ModalHeader>
        <ModalBody>
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: 'signature',
            }}
          />
        </ModalBody>
        <ModalFooter>
          <button className="negative" onClick={clear}>
            Clear
          </button>
          <button className="positive" onClick={save}>
            Save
          </button>
          <button className="negative" onClick={() => setModalBasic(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
