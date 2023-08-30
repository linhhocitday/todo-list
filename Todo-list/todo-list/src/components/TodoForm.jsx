import React, { useState } from "react";
import Button from "./Button";

const TodoForm = ({ onChange, onClick, value }) => {
  return (
    <form className="grid todo-form">
      <input
        type="text"
        placeholder="What do you want to do?"
        value={value}
        onChange={onChange}
      />
      <Button variant="primary" onClick={onClick}>
        Create
      </Button>
    </form>
  );
};

export default TodoForm;
