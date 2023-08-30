import React from "react";

const FakeCheckbox = ({ id, completed }) => {
  return (
    <label
      htmlFor={id}
      className={
        completed ? "fake-checkbox completed-checkbox" : "fake-checkbox"
      }
    >
      {completed && <i className="fa-solid fa-check"></i>}
    </label>
  );
};

export default FakeCheckbox;
