import { useParams } from "react-router-dom";

const SessionDate = () => {
  const { date } = useParams();
  console.log(date);

  return (
    <>
      {date?.slice(0, 4)} {date?.slice(5, 7)} {date?.slice(8, 10)}
    </>
  );
};

export default SessionDate;
