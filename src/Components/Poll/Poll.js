import PollAnswer from "./PollAnswer";
import PollCreate from "./PollCreate";

const Poll = () => {
  return (
    <div className="card-white col-span-2 w-1/2 text-center">
      {/* <PollAnswer /> */}
      <PollCreate />
    </div>
  );
};

export default Poll;
