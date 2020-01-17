import React from 'react';

const DeleteButton = ({ task, onDelete }) => {
  return (
    <i onClick={() => onDelete(task)} className="far pointer fa-trash-alt"></i>
  );
};

export default DeleteButton;
