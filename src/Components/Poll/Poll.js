import React, { useState } from "react";
import PollAnswer from "./PollAnswer";
import PollCreate from "./PollCreate";

const Poll = () => {

  //Dummy data for testing
  let pollData = {
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

  const saveNewPollHandler = (newPollData) => {
    pollData = newPollData;
    console.log(pollData);
  };

  const [createStatus, setCreateStatus] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(false);

  const createClickHandler = () => {
    setCreateStatus(true);
    setAnswerStatus(false);

  };

  const answerClickHandler = () => {
    setCreateStatus(false);
    setAnswerStatus(true);

  };

  return (
    <div className="bg-primary-50 h-full grid grid-cols-1 md:grid-cols-2 gap-4 m-4 w-auto justify-items-center">
      <div className="card-white grid-cols-1 text-center">
        <h1 className="mb-4">Create a Poll</h1>
        <p className="mb-4">
          Click the button below to create your own poll! Click the button below to create your own poll! Click the button below to create your own poll! Click the button below to create your own poll!
        </p>
        <button className="btn-primary" onClick={createClickHandler}>
          Create a Poll
        </button>
      </div>
      <div className="card-alt grid-cols-1 text-center">
        <h2 className="mb-4">Answer a Poll</h2>
        <p className="mb-4">
        Click the button below to respond to a poll! Click the button below to respond to a poll! Click the button below to respond to a poll! Click the button below to respond to a poll!
        </p>
        <button className="btn-alt" onClick={answerClickHandler}>
          Answer a Poll
        </button>
      </div>
      {createStatus && (
        <div className="card-white col-span-2 w-1/2 text-center">
          <PollCreate onSaveNewPoll={saveNewPollHandler} />
        </div>
      )}
      {answerStatus && (
        <div className="card-white col-span-2 w-1/2 text-center">
          <PollAnswer pollData={pollData}/>
        </div>
      )}
    </div>
  );
};

export default Poll;
