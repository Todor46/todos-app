import React from 'react';

const CheckBox = ({ task, onCheck }) => {
  let classes = 'h5 mb-0 pointer far mr-3 ';
  classes += task.isDone ? 'fa-check-square' : 'fa-square';
  return <i onClick={() => onCheck(task)} className={classes}></i>;
};

export default CheckBox;
