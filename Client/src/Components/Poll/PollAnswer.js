//Main component for answering a poll

import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = (props) => {
  let isMultiple = props.pollData.options.multiple;

  //create state hook to track the currently selected answer(s)
  const [checkedAnswers, setcheckedAnswers] = useState([]);

  let pollVotes = [];

  const submitAnswersHandler = (event) => {
    //stop the form from reloading (default behavior)
    event.preventDefault();

    console.log(checkedAnswers);

    //checkedAnswers is the value the user selected and is received upon the user submitting. this will be added to the tally. Will need to look into a way to check the user's username and maybe IP in the future
  };

  const answerChangeHandler = (selectedAnswer) => {
    selectedAnswer = Number(selectedAnswer);
    let pastAnswers = checkedAnswers;
    if (isMultiple === true) {
      if (pastAnswers.includes(selectedAnswer) === true) {
        console.log(pastAnswers + " contains " + selectedAnswer);
        console.log("Removing " + selectedAnswer);
        const index = pastAnswers.indexOf(selectedAnswer);
        pastAnswers.splice(index, 1);
        setcheckedAnswers(pastAnswers);
      } else {
        console.log(pastAnswers + " does NOT contain " + selectedAnswer);
        console.log("Adding " + selectedAnswer);
        pastAnswers = [...pastAnswers, Number(selectedAnswer)];
        setcheckedAnswers(pastAnswers);
      }
    } else {
      setcheckedAnswers([selectedAnswer]);
    }
  };

  const isCheckedHandler = (optionId, checkedValues) => {
    //console.log("oid " + optionId);
    //console.log("val " + checkedValues);

    let isChecked;

    if (isMultiple === true) {
      console.log(optionId);
      console.log(checkedValues);
      for (let i = 0; i < checkedValues.length; i++) {
        console.log(checkedValues[i] + " " + optionId);
        if (Number(checkedValues[i]) === optionId) {
          console.log(
            checkedValues[i] +
              " === " +
              optionId +
              ". Setting isChecked to true."
          );
          isChecked = true;
        } else {
          console.log(
            checkedValues[i] +
              " =/= " +
              optionId +
              ". Setting isChecked to false."
          );
          isChecked = false;
        }
      }
    } else {
      isChecked = Number(checkedValues) === optionId;
    }
    return isChecked;
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
              isChecked={checkedAnswers.includes(option.id) ? true : false/*isCheckedHandler(option.id, checkedAnswers)*/}
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
