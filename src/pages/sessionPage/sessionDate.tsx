import { useParams } from "react-router-dom";
import Vote from "./sessionComponent/vote";
import Result from "./sessionComponent/result";

const SessionDate = () => {
  const { date } = useParams();
  const now = new Date();

  const nowDate =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");

  const hours = now.getHours();

  console.log(date);
  console.log(nowDate);

  return <>{date == nowDate && hours >= 14 ? <Result /> : <Vote />}</>;
};

export default SessionDate;
