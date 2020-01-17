import React from 'react';

const AddNewTask = ({ onAdd, onChange, currentValue }) => {
  return (
    <form onSubmit={onAdd} className="form-unstyled">
      <input
        onChange={e => onChange(e.currentTarget.value)}
        type="text"
        placeholder="Add new task"
        className="form-control"
        value={currentValue}
      />
    </form>
  );
};

export default AddNewTask;
