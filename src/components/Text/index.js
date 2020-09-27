import React, { Fragment } from "react";

const Text = ({text, size}) => {
  return (
    <Fragment>
        <label style={{fontSize: size}}>{text}</label>
    </Fragment>
  );
};

export default Text;
