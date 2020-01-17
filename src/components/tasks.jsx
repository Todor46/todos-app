import React from 'react';
import CheckBox from './checkBox';
import DeleteButton from './deleteButton';

const Tasks = ({ tasks, onCheck, onDelete }) => {
  return (
    <ul className="list-group col-md-5">
      {tasks.map(task => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <CheckBox task={task} onCheck={onCheck} />
            <span>{task.name}</span>
          </div>
          <DeleteButton task={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
