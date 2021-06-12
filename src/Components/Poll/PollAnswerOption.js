import React, { useState } from "react";

const PollAnswerOption = (props) => {
  const radioSelectedHandler = (event) => {
    props.onAnswerChanged(event.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        name="poll"
        value={props.text}
        className="mx-4"
        checked={props.isChecked}
        onChange={radioSelectedHandler}
      ></input>
      <label>{props.text}</label>
    </div>
  );
};

export default PollAnswerOption;
