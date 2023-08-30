import React, { useState } from "react";
import "./index.css";
import TodoForm from "./components/TodoForm";
import FilterOptions from "./components/FilterOptions";
import TodoItems from "./components/TodoItems";
import Button from "./components/Button";

let id = 1;

const options = [
  { id: 1, name: "All", checked: true },
  { id: 2, name: "Active", checked: false },
  { id: 3, name: "Completed", checked: false },
];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filterOptions, setFilterOptions] = useState(options);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const createTask = (e) => {
    e.preventDefault();

    setTasks([{ id: id++, name: inputValue, completed: false }, ...tasks]);
    setInputValue("");
  };

  const pendingTasks = tasks.filter((task) => task.completed === false);

  //TODO: make filter options works
  const changeFilterOption = (e, id) => {
    let checkedOption = filterOptions.find(
      (filterOption) => filterOption.checked === true
    );

    setFilterOptions((filterOptions) => {
      return filterOptions.map((filterOption) => {
        if (filterOption.id === id) {
          if (checkedOption.id !== id) {
            checkedOption.checked = false;
          }

          return { ...filterOption, checked: e.target.checked };
        }

        return filterOption;
      });
    });
  };

  const updateTask = (e, id) => {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: e.target.checked };
        }

        return task;
      });
    });
  };

  const deleteTask = (data) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id != data.id));
    } else {
      return tasks;
    }
  };

  const clearAll = () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    } else {
      return tasks;
    }
  };

  let checkedOption = filterOptions.find(
    (filterOption) => filterOption.checked === true
  );

  //* check again
  let filtered = tasks.filter((task) =>
    checkedOption.name === "All"
      ? true
      : checkedOption.name === "Completed"
      ? task.completed
      : !task.completed
  );

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="wrapper">
        <TodoForm
          onChange={handleChange}
          onClick={createTask}
          value={inputValue}
        />
        <FilterOptions options={filterOptions} onChange={changeFilterOption} />
        <TodoItems
          todoItems={filtered}
          onChange={updateTask}
          onClick={deleteTask}
        />
        <div className="grid clear-all-container">
          <span className="task-number">
            You have <span>{pendingTasks.length}</span> pending task
          </span>
          <Button variant="danger" onClick={clearAll}>
            Clear all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
