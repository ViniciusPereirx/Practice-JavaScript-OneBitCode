import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Work() {
  const user = useContext(UserContext);
  return (
    <>
      <p style={{ color: "blue" }}>Empresa: {user.work}</p>
    </>
  );
}

export default Work;
