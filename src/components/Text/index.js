import React, { Fragment } from "react";

const Text = ({text, size, color}) => {
  return (
    <Fragment>
        <label style={{fontSize: size, color:color}}>{text}</label>
    </Fragment>
  );
};

export default Text;
