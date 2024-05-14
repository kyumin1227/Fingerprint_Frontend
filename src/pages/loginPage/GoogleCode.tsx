import { useLocation, useParams } from "react-router-dom";

const GoogleCode = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams.get("code"));

  return <></>;
};

export default GoogleCode;
