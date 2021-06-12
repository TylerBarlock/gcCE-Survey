import React, { useState } from "react";
import PollAnswerOption from "./PollAnswerOption";

const PollAnswer = () => {
  //Dummy data for answer options
  const answerOptions = [
    {
      id: 1,
      text: "This one?",
    },
    {
      id: 2,
      text: "Maybe this one.",
    },
    {
      id: 3,
      text: "Or... Maybe this one?",
    },
    {
      id: 4,
      text: "Hmmm... How about this?",
    },
  ];

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
      <h2 className="mb-4 text-center">This is a test</h2>
      <p className="mb-4 text-center">
        Hello, this is some text to fill up this space. Blah blah blah blah.
        Something cool, something neat, something rad.
      </p>
      <form onSubmit={submitAnswersHandler}>
        <div className="mb-4">
          {/*Display a PollAnswerOption component for each answerOption*/}
          {answerOptions.map((option) => (
            <PollAnswerOption
              key={option.id}
              id={option.id}
              text={option.text}
              isChecked={checkedAnswer === option.id.toString()}
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
