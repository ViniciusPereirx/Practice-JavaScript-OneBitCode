import Container from "./components/Container";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import Work from "./components/Work";
import UserContext from "./contexts/UserContext";

function App() {
  const user = {
    name: "Vinicius Pereira",
    email: "viniciuspereiraa51@gmail.com",
    work: "CooperRita",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Usando contexto</h1>
        <Container>
          {" "}
          <UserInfo />
        </Container>
        <Header>
          <Work />
        </Header>
      </UserContext.Provider>
    </>
  );
}

export default App;
