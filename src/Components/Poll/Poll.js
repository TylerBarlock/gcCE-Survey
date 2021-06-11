const Poll = () => {
  return (
    <div className="card-white col-span-2 w-1/2">
      <h2 className="mb-4">This is a test</h2>
      <p className="mb-4">
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
        <button type="submit" className="btn-primary">
          Vote
        </button>
      </form>
    </div>
  );
};

export default Poll;
