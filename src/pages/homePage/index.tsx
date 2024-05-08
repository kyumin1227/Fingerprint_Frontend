import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stateType } from "../../store";

const Home = () => {
  const navigate = useNavigate();
  const stdNum = useSelector((state: stateType) => state.user.studentNum);

  useEffect(() => {
    if (stdNum === "") {
      navigate("/login");
    }
  }, []);

  return <>Homepage</>;
};

export default Home;
