import React, { useState } from "react";
import { useRef } from "react";
import "./AddTask.css";

const AddTask = ({ tasks, setTasks }) => {
  // const [taskvalue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  // const handleChange = (event) => {
  //  setTaskValue(event.target.value);
  // };

  const handleReset = () => {
    //setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <div>
      <section className="addtask">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Task name"
            autoComplete="off"
            ref={taskRef}
          />
          <select
            onChange={(event) => setProgress(event.target.value)}
            value={progress}
          >
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
          <button type="submit">Add Task</button>
          <span onClick={handleReset} className="reset">
            Reset
          </span>
          <p>{taskRef.current.value}</p>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
