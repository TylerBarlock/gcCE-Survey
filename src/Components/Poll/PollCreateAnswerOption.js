import React, { useState, useRef } from "react";

const PollCreateAnswerOption = React.forwardRef((props, ref) => {
  const [enteredAnswerOption, setEnteredAnswerOption] = useState();

  const answerOptionChangeHandler = (event) => {
    setEnteredAnswerOption(event.target.value);
    props.onAnswerOptionChange(event.target.value);
  };

  const deleteAnswerOptionHandler = (event) => {
    props.onAnswerOptionDelete(event);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="mb-3 formtext w-full"
        placeholder="Add an answer..."
        onChange={answerOptionChangeHandler}
        ref={ref}
      ></input>
      <button
        className="btn-alt-onwhite p-1 h-9"
        type="button"
        onClick={deleteAnswerOptionHandler}
      >
        X
      </button>
    </div>
  );
});

export default PollCreateAnswerOption;
