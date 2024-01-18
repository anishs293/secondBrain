import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  };

  function toggleCheck(taskName) {
    setToDoList((prevtoDoList) =>
      prevtoDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <div className="App">
      <>
        <div className="container">
          <h1>Second Brain🧠</h1>

          <TaskInput addTask={addTask} />

          <div className="toDoList">
            <span>To-do</span>
            <ul className="list-items">
              {toDoList.map((item, key) => (
                <TaskItem
                  task={item}
                  key={key}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              ))}
            </ul>

            {toDoList.length === 0 ? (
              <p className="notify">You are done! ✔️</p>
            ) : null}
          </div>
        </div>
        <Stats toDoList={toDoList} />
      </>
    </div>
  );
}

export default App;
