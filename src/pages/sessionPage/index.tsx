import { useEffect } from "react";
import { getSessions } from "../../api/session";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../store/SessionInfo";

// 세션 데이터 설정 및 첫번째 날짜로 라우팅
const Session = () => {
  const stdNum = useSelector((state: stateType) => state.user.studentNum);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await getSessions(stdNum);

    dispatch(setSession(data.data));
  };

  getData();

  const date = useSelector((state: stateType) => state.session[0].date);

  useEffect(() => {
    navigate(`/sessions/${date}`);
  }, [date]);

  return <>Session page</>;
};

export default Session;
