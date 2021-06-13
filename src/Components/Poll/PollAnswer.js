//Main component for answering a poll

import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = () => {
  //Dummy data for answer options
  const pollData = {
    title: "This is a poll.",
    description:
      "this is some very interesting information about this super cool and unique poll that we'd like you to fill out.",
    answerOptions: [
      {
        id: 0,
        text: "This one?",
      },
      {
        id: 1,
        text: "Maybe this one.",
      },
      {
        id: 2,
        text: "Or... Maybe this one?",
      },
      {
        id: 3,
        text: "Hmmm... How about this?",
      },
    ],
    options: {
      private: false,
      multiple: false,
      login: false,
      ipcheck: false,
    },
  };

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
    <div>
      <h2 className="mb-4 text-center">{pollData.title}</h2>
      <p className="mb-4 text-center">{pollData.description}</p>
      <form onSubmit={submitAnswersHandler}>
        <div className="mb-4">
          {/*Display a PollAnswerOption component for each answerOption*/}
          {pollData.answerOptions.map((option) => (
            <PollAnswerOption
              key={option.id}
              id={option.id}
              text={option.text}
              isMultiple={pollData.options.multiple}
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
    </div>
  );
};

export default PollAnswer;
