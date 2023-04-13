import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleInputChange, handleSubmit, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input onChange={handleInputChange} type="text" value={newTask}></input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
