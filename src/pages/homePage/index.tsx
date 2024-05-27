import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateType } from "../../store";

const Home = () => {
  const navigate = useNavigate();
  const stdNum = useSelector((state: stateType) => state.user.studentNum);

  useEffect(() => {
    console.log(stdNum);
    console.log("useEffect 실행");

    if (stdNum === "") {
      navigate("/login");
    }
  }, [navigate, stdNum]);

  return <>Homepage</>;
};

export default Home;
