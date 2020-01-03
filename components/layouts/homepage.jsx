/* React */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Homepage = props => {
  return (
    <Fragment>
      <div className="row mb-5">{props.children[0]}</div>
      <>{props.children[1]}</>
      <footer className="row">{props.children[2]}</footer>
    </Fragment>
  );
};

Homepage.propTypes = {
  children: PropTypes.node
};

Homepage.sections = ["head", "body", "footer"];

export default Homepage;
