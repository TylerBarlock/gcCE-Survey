const PollCreateAnswerOption = (props) => {

  const deleteClickedHandler = () => {
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
