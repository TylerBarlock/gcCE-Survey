import React, { useState } from "react";
import PollAnswer from "./PollAnswer";
import PollCreate from "./PollCreate";
import PollResults from "./PollResults";

const Poll = () => {
  //Dummy data for testing
  let tempPollData = {
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

  //Dummy data for testing poll results
  let pollResponses = [
    {
      id: 1,
      vote: [1],
      ip: "56.170.138.93"
    },
    {
      id: 2,
      vote: [2],
      ip: "66.48.231.142"
    },
    {
      id: 3,
      vote: [2],
      ip: "100.193.215.142"
    },
    {
      id: 4,
      vote: [3],
      ip: "235.184.145.207"
    },
    {
      id: 5,
      vote: [2],
      ip: "235.184.145.207"
    },
    {
      id: 6,
      vote: [3],
      ip: "235.184.145.207"
    },
  ]

  const [pollData, setPollData] = useState(tempPollData);

  const saveNewPollHandler = (newPollData) => {
    setPollData(newPollData);
    console.log(newPollData);
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
          <PollAnswer pollData={pollData} />
        </div>
      )}
      <div className="card-white col-span-2 w-1/2 text-center">
          <PollResults pollResponses={pollResponses} />
        </div>
    </div>
  );
};

export default Poll;
