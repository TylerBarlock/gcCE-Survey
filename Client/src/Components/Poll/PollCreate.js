//Main component for poll creation

import React, { useState, useRef } from "react";
import PollCreateAnswerOption from "./PollCreateAnswerOption";

const PollCreate = (props) => {

  //setting up state hooks for all of the inputs on the form
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredDescription, setEnteredDescription] = useState("");
  const [values, setValues] = useState(["", "", ""]);

  const [selectedPrivate, setSelectedPrivate] = useState(false);
  const [selectedMultiple, setSelectedMultiple] = useState(false);
  const [selectedLogin, setSelectedLogin] = useState(false);
  const [selectedIpcheck, setSelectedIpcheck] = useState(false);

  //setting up ref hooks for Title and Description
  const enteredTitleRef = useRef();
  const enteredDescriptionRef = useRef();

  const titleChangeHandler = (event) => {
    //leaving this here for now in-case we decide we need on-keystroke validation for the title later. Currently we are using a ref instead of state.
    //setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    //leaving this here for now in-case we decide we need on-keystroke validation for the description later. Currently we are using a ref instead of state.
    //setEnteredDescription(event.target.value);
  };

  const answerOptionChangeHandler = (value, index) => {
    //add the new value at the appropriate index to an array and update the state with that array
    setValues((state) => [
      //spread values from index 0 to current index-1
      ...state.slice(0, index),
      //insert current new value
      value,
      //spread values from current index+1
      ...state.slice(index + 1),
    ]);
  };

  //triggers when the private checkbox is toggled
  const privateSelectedHandler = (event) => {
    //update the state of selectedPrivate with the current boolean value of the checkbox
    setSelectedPrivate(event.target.checked);
  };

  //triggers when the multi select checkbox is toggled
  const multipleSelectedHandler = (event) => {
    //update the state of selectedMultiple with the current boolean value of the checkbox
    setSelectedMultiple(event.target.checked);
  };

  //triggers when the login required checkbox is toggled
  const loginSelectedHandler = (event) => {
    //update the state of selectedLogin with the current boolean value of the checkbox
    setSelectedLogin(event.target.checked);
  };

  //triggers when the ip verification checkbox is toggled
  const ipcheckSelectedHandler = (event) => {
    //update the state of selectedIpcheck with the current boolean value of the checkbox
    setSelectedIpcheck(event.target.checked);
  };

  const addAnswerOptionHandler = () => {
    //create an array of all existing values and add a blank string at the end
    //spread the existing items and add a blank string
    setValues((state) => [...state, ""]);
  };

  const deleteAnswerOptionHandler = (index) => {
    //create an array of all values before and after the index selected for deletion (basically just leaving out the one value that we wanted to remove) then update the state with that array
    setValues((state) => [
      //spread the items before the selected index
      ...state.slice(0, index),
      //spread the items after the selected index
      ...state.slice(index + 1),
    ]);
  };

  //triggers when the submit button is clicked
  const onSubmitHandler = (event) => {
    //cancel default form submit behavior (reloads page)
    event.preventDefault();

    //set enteredTitle and enteredDescription to the values of their referenced DOM pointers
    const enteredTitle = enteredTitleRef.current.value;
    const enteredDescription = enteredDescriptionRef.current.value;

    //object to hold all data about the new poll being created
    const newPollData = {
      //in the future i want to check the db for the last created poll id and add 1 or something like that, but for now Math.random is fine
      id: Math.round(Math.random() * 1000),
      title: enteredTitle,
      description: enteredDescription,
      answerOptions: [],
      options: {
        private: selectedPrivate,
        multiple: selectedMultiple,
        login: selectedLogin,
        ipcheck: selectedIpcheck,
      },
    };

    //Extract answers from values and put them into the main data object. Convert the array index to id and value to text.
    for (let i = 0; i < values.length; i++) {
      let newId = i;
      let newText = values[i];
      newPollData.answerOptions.push({ id: newId, text: newText });
    }

    //passing the new poll data into a function from the parent Poll component to "lift" the values up to the parent component.
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
            <textarea
              type="text"
              rows="3"
              placeholder="Describe the poll..."
              onChange={descriptionChangeHandler}
              ref={enteredDescriptionRef}
            ></textarea>
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
                onChange={(event) =>
                  answerOptionChangeHandler(event.target.value, i)
                }
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
