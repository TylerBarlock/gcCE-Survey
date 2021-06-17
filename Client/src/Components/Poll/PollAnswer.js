//Main component for answering a poll

import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = (props) => {
  let isMultiple = props.pollData.options.multiple;

  //create state hook to track the currently selected answer(s)
  const [checkedAnswers, setCheckedAnswers] = useState([]);

  const submitAnswersHandler = (event) => {
    //stop the form from reloading (default behavior)
    event.preventDefault();

    console.log(checkedAnswers);

    //checkedAnswers is the value the user selected and is received upon the user submitting. this will be added to the tally. Will need to look into a way to check the user's username and maybe IP in the future
  };

  const answerChangeHandler = (selectedAnswer) => {
    selectedAnswer = Number(selectedAnswer);
    let pastAnswers = checkedAnswers;
    //check if multiple selections is turned on
    if (isMultiple === true) {
      //check if the selected checkbox has already been selected before then remove it if so, and add it if not
      if (pastAnswers.includes(selectedAnswer) === true) {
        const index = pastAnswers.indexOf(selectedAnswer);
        setCheckedAnswers((state) => [
          //spread the items before the selected index
          ...state.slice(0, index),
          //spread the items after the selected index
          ...state.slice(index + 1),
        ]);
      } else {
        pastAnswers = [...pastAnswers, selectedAnswer];
        setCheckedAnswers(pastAnswers);
      }
    //if multiple is off, just set the value instead of adding to an array
    } else {
      setCheckedAnswers([selectedAnswer]);
    }
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
              isMultiple={isMultiple}
              onAnswerChanged={answerChangeHandler}
              //if the option id matches a value in the array of selected answers, return true. else, return false
              isChecked={checkedAnswers.includes(option.id) ? true : false}
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
