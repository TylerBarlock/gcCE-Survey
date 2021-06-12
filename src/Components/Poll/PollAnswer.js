import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = () => {
  const answerOptions = [
    {
      text: "This one?",
    },
    {
      text: "Maybe this one.",
    },
    {
      text: "Or... Maybe this one?",
    },
    {
      text: "Hmmm... How about this?",
    },
  ];

  const [checkedAnswer, setCheckedAnswer] = useState("Maybe this one.");

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
      <h2 className="mb-4 text-center">This is a test</h2>
      <p className="mb-4 text-center">
        Hello, this is some text to fill up this space. Blah blah blah blah.
        Something cool, something neat, something rad.
      </p>
      <form onSubmit={submitAnswersHandler}>
        <div className="mb-4">
          <PollAnswerOption
            text={answerOptions[0].text}
            isChecked={checkedAnswer === answerOptions[0].text}
            onAnswerChanged={answerChangeHandler}
          />
          <PollAnswerOption
            text={answerOptions[1].text}
            isChecked={checkedAnswer === answerOptions[1].text}
            onAnswerChanged={answerChangeHandler}
          />
          <PollAnswerOption
            text={answerOptions[2].text}
            isChecked={checkedAnswer === answerOptions[2].text}
            onAnswerChanged={answerChangeHandler}
          />
          <PollAnswerOption
            text={answerOptions[3].text}
            isChecked={checkedAnswer === answerOptions[3].text}
            onAnswerChanged={answerChangeHandler}
          />
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
