const PollCreateAnswerOption = (props) => {
  //triggers when the delete button is clicked
  const deleteClickedHandler = () => {
    //trigger the onDelete function passed down from the parent component with the index of the answer item as a parameter. //onDelete then triggers deleteAnswerOptionHandler in the parent component and passes the index through it as well.
    props.onDelete(props.id);
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="mb-3 formtext w-full mr-2"
        placeholder="Add an answer..."
        onChange={props.onChange}
        value={props.value}
      ></input>
      <button
        className="btn-alt-onwhite p-1 h-9"
        type="button"
        onClick={deleteClickedHandler}
      >
        X
      </button>
    </div>
  );
};

export default PollCreateAnswerOption;
