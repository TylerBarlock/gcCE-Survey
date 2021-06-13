import React, { useState } from "react";

const PollCreateAnswerOption = (props) => {
  const [enteredAnswerOption, setEnteredAnswerOption] = useState();

  const answerOptionChangeHandler = (event) => {
    setEnteredAnswerOption(event.target.value);
    props.onAnswerOptionChange(event.target.value);
  };

  return (
    <input
      type="text"
      className="mb-3"
      placeholder="Add an answer..."
      onChange={answerOptionChangeHandler}
    ></input>
  );
};

export default PollCreateAnswerOption;
