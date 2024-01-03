import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>Informações do Usuário</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default UserInfo;
