import React from 'react';
import { Link } from 'react-router-dom';

const UserCardDetail = ({
  fullName,
  match,
  dn,
  dt,
  dp,
  da,
  pn,
  pa,
  pp,
  pl,
  location,
  time,
  type,
}) => {
  // const types = () => {
  //   if (two == 1) {
  //     return <p>VIDEO</p>;
  //   } else if (two == 2) {
  //     return <p>FTF</p>;
  //   }
  // };

  return (
    <>
      <h3 className="mt-4">Patient</h3>
      <div className="docListComp lol">
        <div className="left">
          <p>{pn}</p>
        </div>
        <div className="middle">
          <p>{pa}</p>
          <p>{pp}</p>
          <p>{pl}</p>
        </div>
      </div>
      <h3 className="mt-4">Details</h3>
      <div className="docListComp lol">
        <div className="left">
          {/* <p>{time}</p> */}
          <p>{location}</p>
        </div>
        <div className="middle">
          <p>type: {type}</p>
          <p>Price: £60</p>

          <p>Booking fee: £8.5</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(UserCardDetail);
