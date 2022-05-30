import React, { useState } from 'react';
import './style.css';

export default function ToDo() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function getValue(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function getTasks(e) {
    e.preventDefault();
    let temp = tasks;
    temp.unshift(value);
    setTasks([...temp]);
  }

  function deleteTask(e) {
    e.preventDefault();
    let temp = tasks;
    temp.splice(e.target.id, 1);
    setTasks([...temp]);
  }

  let tasksList = tasks.map((item, idx) => {
    return (
      <div key={idx}>
        {item}
        <button id={idx} onClick={deleteTask}>
          X
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="appcomponents">
        <div>
          <h2> TODO APP</h2>
        </div>
        <div>
          <input className="input" onChange={getValue}></input>
          <button className="add" onClick={getTasks}>
            Add
          </button>
        </div>
        <div className="dislaytasks">{tasksList}</div>
      </div>
    </div>
  );
}
