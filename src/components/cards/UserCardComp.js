import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ fullName, match, zero, one, two, three, four, pic }) => {
  return (
    <div className="docListComp user">
      <div className="left">
        <div className="dlcImage">
          <img src={pic} alt="Doctor" />
        </div>
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
    </div>
  );
};

export default React.memo(UserCard);
