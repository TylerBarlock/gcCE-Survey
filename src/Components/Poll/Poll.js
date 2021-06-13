import PollAnswer from "./PollAnswer";
import PollCreate from "./PollCreate";

const Poll = () => {

const saveNewPollHandler = () => {
  
}

    return (
    <div className="card-white col-span-2 w-1/2 text-center">
      {/* <PollAnswer /> */}
      <PollCreate onSaveNewPoll={saveNewPollHandler}/>
    </div>
  );
};

export default Poll;
