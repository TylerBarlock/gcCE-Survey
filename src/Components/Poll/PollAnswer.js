//Main component for answering a poll

import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = (props) => {

  const [checkedAnswer, setCheckedAnswer] = useState("");

  const submitAnswersHandler = (event) => {
    //stop the form from reloading (default behavior)
    event.preventDefault();

    console.log(checkedAnswer);
    //checkedAnswer is the value the user selected and is received upon the user submitting. this will be added to the tally. Will need to look into a way to check the user's username and maybe IP in the future
  };

  const answerChangeHandler = (selectedAnswer) => {
    console.log(selectedAnswer);
    setCheckedAnswer(selectedAnswer);
  };

  return (
    <React.Fragment>
      <h2 className="mb-4 text-center">{props.pollData.title}</h2>
      <p className="mb-4 text-center">{props.pollData.description}</p>
      <form onSubmit={submitAnswersHandler}>
        <div className="mb-4">
          {/*Display a PollAnswerOption component for each answerOption*/}
          {props.pollData.answerOptions.map((option) => (
            <PollAnswerOption
              key={option.id}
              id={option.id}
              text={option.text}
              isMultiple={props.pollData.options.multiple}
              isChecked={Number(checkedAnswer) === option.id}
              onAnswerChanged={answerChangeHandler}
            />
          ))}
        </div>
        <button type="submit" className="btn-primary mx-2">
          Vote
        </button>
        <button className="btn-alt-onwhite mx-2" type="button">
          Results
        </button>
      </form>
    </React.Fragment>
  );
};

export default PollAnswer;
