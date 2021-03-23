import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import AppoCardCompDetail from './AppoCardCompDetail';

import { database } from '../../helpers/Firebase';

const AppointmentCard = ({
  fullName,
  match,
  zero,
  one,
  two,
  three,
  four,
  four2,
  dn,
  dp,
  dt,
  pp,
  pa,
  da,
  selfID,
  pl,
  pn,
  location,
}) => {
  const [modalLarge, setModalLarge] = useState(false);

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

  // const Accept = () => {
  //   database.ref(`bookings/${selfID}`).update({ status: 'accepted' });
  // };

  // const Deny = () => {
  //   database.ref(`bookings/${selfID}`).update({ status: 'denied' });
  // };

  return (
    <div className="docListComp">
      <div className="left">
        <p>{timeDate}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        {types()}
        {/* <p>{two}</p> */}
        <p>${three}</p>
      </div>
      <div className="right">
        <button className="positive" onClick={() => setModalLarge(true)}>
          DETAILS
        </button>
      </div>
      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>{timeDate}</ModalHeader>
        <ModalBody>
          <AppoCardCompDetail
            pn={one}
            pp={pp}
            pa={pa}
            pl={pl}
            location={location}
            typePrice={three}
            time={zero}
            dn={dn}
            dp={dp}
            da={da}
            dt={dt}
            type={types()}
          />
        </ModalBody>
        <ModalFooter>
          <button
            className="positive"
            onClick={() =>
              database
                .ref(`bookings/${selfID}`)
                .update({ status: 'accepted' }) && setModalLarge(!modalLarge)
            }
          >
            ACCEPT
          </button>

          <button
            className="positive"
            onClick={() =>
              database.ref(`bookings/${selfID}`).update({ status: 'denied' })
            }
          >
            DENY
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default React.memo(AppointmentCard);
