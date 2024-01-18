import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
    //After successfully adding a task with addTask(task), it's a good practice to clear the input field. This enhances the user experience by providing immediate feedback and making it easier for the user to add the next task without manually clearing the input field.
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add Item"
        value={task || ""} //When you provide a value attribute to the <input> tag, you are telling React that the input's value should be controlled by the specified state variable. This makes it a "controlled input."
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};

export default TaskInput;
