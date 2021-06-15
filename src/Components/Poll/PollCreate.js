//Main component for poll creation

import React, {useState, useRef } from "react";
import PollCreateAnswerOption from "./PollCreateAnswerOption";

const PollCreate = (props) => {
  let newPollData = {
    id: "",
    title: "",
    description: "",
    answerOptions: [
      {
        id: 0,
        text: "",
      },
      {
        id: 1,
        text: "",
      },
      {
        id: 2,
        text: "",
      },
    ],
    options: {
      private: false,
      multiple: false,
      login: false,
      ipcheck: false,
    },
  };

  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredDescription, setEnteredDescription] = useState("");
  const [values, setValues] = useState(["", "", ""]);

  const [selectedPrivate, setSelectedPrivate] = useState(false);
  const [selectedMultiple, setSelectedMultiple] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState(false);
  const [selectedIpcheck, setSelectedIpcheck] = useState(false);

  const enteredTitleRef = useRef();
  const enteredDescriptionRef = useRef();

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    //setEnteredDescription(event.target.value);
  };

  const answerOptionChangeHandler = (value, index) => {
    setValues((state) => [
      ...state.slice(0, index),
      value,
      ...state.slice(index + 1),
    ]);
  };

  const privateSelectedHandler = (event) => {
    setSelectedPrivate(event.target.checked);
  };

  const multipleSelectedHandler = (event) => {
    setSelectedMultiple(event.target.checked);
  };

  const loginSelectedHandler = (event) => {
    setSelectedLogin(event.target.checked);
  };

  const ipcheckSelectedHandler = (event) => {
    setSelectedIpcheck(event.target.checked);
  };

  const addAnswerOptionHandler = () => {
    setValues((state) => [...state, ""]);
    console.log("add clicked");
  };

  const deleteAnswerOptionHandler = (index) => {
    console.log("delete clicked");
    console.log(values);
    setValues((state) => [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ]);
    console.log(index);
    console.log(values);
  };

  const onSubmitHandler = (event) => {
    //cancel default form submit behavior (reloads page)
    event.preventDefault();

    const enteredTitle = enteredTitleRef.current.value;
    const enteredDescription = enteredDescriptionRef.current.value;

    //object to hold all data about the new poll being created
    newPollData = {
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      answerOptions: [
        {
          id: Number,
          text: String,
        },
      ],
      options: {
        private: selectedPrivate,
        multiple: selectedMultiple,
        login: selectedLogin,
        ipcheck: selectedIpcheck,
      },
    };
    console.log(newPollData.title);
    console.log(newPollData.description);
    console.log(values);

    //Extract answers from values and put them into the main data object

    console.log(newPollData.options);
    console.log(newPollData.answerOptions)

    //send the new poll data up to the Poll component
    props.onSaveNewPoll(newPollData);
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
              ref={enteredTitleRef}
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
              ref={enteredDescriptionRef}
            ></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-2 formtext">
            <h4 className="mb-2">Answer Options</h4>
            {values.map((value, i) => (
              <PollCreateAnswerOption
                key={i}
                id={i}
                value={value}
                onChange={(event) => answerOptionChangeHandler(event.target.value, i)}
                onDelete={deleteAnswerOptionHandler}
              />
            ))}
          </div>
        </div>
        <button
          className="btn-primary mb-2"
          type="button"
          onClick={addAnswerOptionHandler}
        >
          Add Answer
        </button>
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
        <button type="button" className="btn-alt-onwhite mx-2">
          Advanced Settings
        </button>
      </form>
    </React.Fragment>
  );
};

export default PollCreate;
