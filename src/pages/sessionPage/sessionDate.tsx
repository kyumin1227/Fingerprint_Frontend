import { useParams } from "react-router-dom";
import Vote from "./sessionComponent/vote";
import Result from "./sessionComponent/result";
import { useSelector } from "react-redux";
import { stateType } from "../../store";

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

  const thatDate = useSelector(
    (state: stateType) => state.session.filter((listDate: SessionInfoType[0]) => listDate.date == date)[0]
  );

  console.log(thatDate.isHoliday);

  console.log(date);
  console.log(nowDate);

  return (
    <>
      {date == nowDate && hours >= 17 ? (
        <>
          <Result />
        </>
      ) : (
        <Vote />
      )}
    </>
  );
};

export default SessionDate;
