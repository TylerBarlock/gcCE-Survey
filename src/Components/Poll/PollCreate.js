const PollCreate = () => {
  return (
    <div>
      <form>
        <h2 className="mb-4 text-center">Create a Poll</h2>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4">
            <h4 className="mb-2">Title</h4>
            <input type="text" placeholder="Ask your question..."></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4">
            <h4 className="mb-2">Description (optional)</h4>
            <input type="text" placeholder="Describe the poll..."></input>
          </div>
        </div>
        <div className="text-left">
          <div className="grid grid-cols-1 mb-4 formtext">
            <h4 className="mb-2">Answer Options</h4>
            <input
              type="text"
              className="mb-3 formtext"
              placeholder="Add an answer..."
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
              <input type="checkbox" value="" className="mx-3"></input>
              <p>Private (only via direct link)</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" value="" className="mx-3"></input>
              <p>Allow multiple choices</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" value="" className="mx-3"></input>
              <p>Voters must enter their name</p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary mx-2">
          Create Poll
        </button>
        <button className="btn-alt-onwhite mx-2">Advanced Settings</button>
      </form>
    </div>
  );
};

export default PollCreate;
