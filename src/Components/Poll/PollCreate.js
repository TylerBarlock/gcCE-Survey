//Main component for poll creation

import React, { Fragment, useState } from "react";
import PollCreateAnswerOption from "./PollCreateAnswerOption";

const PollCreate = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredAnswer, setEnteredAnswer] = useState("");

  const [selectedPrivate, setSelectedPrivate] = useState("");
  const [selectedMultiple, setSelectedMultiple] = useState("");
  const [selectedLogin, setSelectedLogin] = useState("");
  const [selectedIpcheck, setSelectedIpcheck] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const answerOptionChangeHandler = (answer) => {
    setEnteredAnswer(answer);
  };

  const privateSelectedHandler = (event) => {
    setSelectedPrivate(event.target.value);
  };

  const multipleSelectedHandler = (event) => {
    setSelectedMultiple(event.target.value);
  };

  const loginSelectedHandler = (event) => {
    setSelectedLogin(event.target.value);
  };

  const ipcheckSelectedHandler = (event) => {
    setSelectedIpcheck(event.target.value);
  };

  const onSubmitHandler = (event) => {
    //cancel default form submit behavior (reloads page)
    event.preventDefault();

    //object to hold all data about the new poll being created
    const newPollData = {
      title: enteredTitle,
      description: enteredDescription,
      answerOptions: [
        {
          id: enteredAnswer.id,
          text: enteredAnswer.text,
        },
      ],
      options: {
        private: selectedPrivate,
        multiple: selectedMultiple,
        login: selectedLogin,
        ipcheck: selectedIpcheck,
      },
    };
    //send the new poll data up to the Poll component
    props.onSaveNewPoll(newPollData);
  };

  const renderPollAnswerOption = () => {



    return (
      <Fragment>
        <PollCreateAnswerOption
          onAnswerOptionChange={answerOptionChangeHandler}
        />
      </Fragment>
    );
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <h2 className="mb-4 text-center">Create a Poll</h2>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4">
            <h4 className="mb-2">Title</h4>
            <input
              type="text"
              placeholder="Ask your question..."
              onChange={titleChangeHandler}
            ></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4">
            <h4 className="mb-2">Description (optional)</h4>
            <input
              type="text"
              placeholder="Describe the poll..."
              onChange={descriptionChangeHandler}
            ></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4 formtext">
            <h4 className="mb-2">Answer Options</h4>
            <PollCreateAnswerOption
              onAnswerOptionChange={answerOptionChangeHandler}
            />
            <input
              type="text"
              className="mb-3 formtext"
              placeholder="Add an answer..."
              onChange={answerOptionChangeHandler}
            ></input>
            <input
              type="text"
              className="mb-3"
              placeholder="Add an answer..."
            ></input>
            <input
              type="text"
              className="mb-3"
              placeholder="Add an answer..."
            ></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-6">
            <h4 className="mb-2">Options</h4>
            <div className="flex items-center">
              <input
                type="checkbox"
                value=""
                className="mx-3"
                onChange={privateSelectedHandler}
              ></input>
              <p>Private (only via direct link)</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value=""
                className="mx-3"
                onChange={multipleSelectedHandler}
              ></input>
              <p>Allow multiple choices</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value=""
                className="mx-3"
                onChange={loginSelectedHandler}
              ></input>
              <p>Voters must log in to vote</p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value=""
                className="mx-3"
                onChange={ipcheckSelectedHandler}
              ></input>
              <p>Check for duplicate IP</p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary mx-2">
          Create Poll
        </button>
        <button className="btn-alt-onwhite mx-2">Advanced Settings</button>
      </form>
    </React.Fragment>
  );
};

export default PollCreate;
