import React from "react";
import { useHistory } from "react-router-dom";

const Hello = () => {
  const history = useHistory();
  const handleClick = () => history.push("/thankyou");

  return (
    <button type="button" onClick={handleClick}>
      Thank you
    </button>
  );
};

export default Hello;
