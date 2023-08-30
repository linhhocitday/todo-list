import React from "react";
import PropTypes from "prop-types";
import FakeCheckbox from "./FakeCheckbox";

/**
 * @typedef TodoItemsProps
 *
 * @property {Array} todoItems include todo items with their properties
 */

/**
 *
 * @param {TodoItemsProps} props
 */

const TodoItems = ({ todoItems, onChange, onClick }) => {
  const item = todoItems.map((todoItem) => (
    <div key={todoItem.id} className="flex todo-item">
      <div className="flex todo-update">
        <FakeCheckbox id={todoItem.id} completed={todoItem.completed} />
        <label>
          <input
            id={todoItem.id}
            type="checkbox"
            checked={todoItem.completed}
            onChange={(e) => onChange(e, todoItem.id)}
          />
          <span>{todoItem.name}</span>
        </label>
      </div>

      <button
        type="button"
        className="trash-btn"
        onClick={() => onClick(todoItem)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  ));

  return <form className="todo-items">{item}</form>;
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object),
};

export default TodoItems;
