const PollAnswer = () => {
    return (
      <div>
        <h2 className="mb-4 text-center">This is a test</h2>
        <p className="mb-4 text-center">
          Hello, this is some text to fill up this space. Blah blah blah blah.
          Something cool, something neat, something rad.
        </p>
        <form>
          <div className="mb-4">
            <div className="flex items-center">
              <input type="radio" name="Poll" value="" className="mx-4"></input>
              <p>This one?</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="Poll" value="" className="mx-4"></input>
              <p>Maybe this one.</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="Poll" value="" className="mx-4"></input>
              <p>Or... Maybe this one?</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="Poll" value="" className="mx-4"></input>
              <p>Hmmm... How about this?</p>
            </div>
          </div>
          <button type="submit" className="btn-primary mx-2">
            Vote
          </button>
          <button className="btn-alt-onwhite mx-2">
            Results
          </button>
        </form>
      </div>
    );
  };
  
  export default PollAnswer;
  