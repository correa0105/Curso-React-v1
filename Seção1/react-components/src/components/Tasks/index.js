import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div className="menuItem">
            <FaEdit onClick={(event) => handleEdit(event, index)} />
            <FaWindowClose onClick={(event) => handleDelete(event, index)} />
          </div>
        </li>
      ))}
    </ul>
  );
}
