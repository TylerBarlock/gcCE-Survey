//Component for individual answer option items (radio buttons/checkboxes)

import React, {useRef} from "react";

const PollAnswerOption = (props) => {

  const isSelectedRef = useRef();

  const radioSelectedHandler = (event) => {
    props.onAnswerChanged(event.target.value);
  };

  let inputType;

  //Setting to checkboxes works, but it doesn't set the right selected value yet
  if (props.isMultiple === true) {
    inputType = "checkbox";
  } else {
    inputType = "radio";
  }

  return (
    <div className="flex items-center">
      <input
        type={inputType}
        name="poll"
        value={props.id}
        className="mx-4"
        checked={props.isChecked}
        onChange={radioSelectedHandler}
        ref={isSelectedRef}
      ></input>
      <label>{props.text}</label>
    </div>
  );
};

export default PollAnswerOption;
