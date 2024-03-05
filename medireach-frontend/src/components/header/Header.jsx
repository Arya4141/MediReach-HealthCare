import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="left-header">
          <div className="left-header-wrapper">
            <h1 className="header-heading">
              We are partners in worry
            </h1>
            <p className="header-para">
              MedReach Cares provides excellant service by prioritizing the safety
              and security of patients.
            </p>
          </div>
        </div>
        <div className="right-header">
        </div>
      </div>
    </div>
  );
};

export default Header;
