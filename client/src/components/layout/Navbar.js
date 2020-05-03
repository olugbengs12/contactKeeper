import React from "react";
import propTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <i className={icon} /> {title}
    </div>
  );
  Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string,
  };
  Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt",
  };
};
export default Navbar;
