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

  let tasksList = tasks.map((item, idx) => {
    return <div key={idx}>{item}</div>;
  });

  return (
    <div className="container">
      <h2> TODO APP</h2>
      <input className="input" onChange={getValue}></input>
      <button className="add" onClick={getTasks}>
        Add
      </button>
      <div className="dislaytasks">{tasksList}</div>
    </div>
  );
}
