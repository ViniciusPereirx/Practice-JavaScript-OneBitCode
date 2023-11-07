import { Card } from "./components/Card";

import swPosterImg from "./assets/star-wars.jpg";
import eswPosterImg from "./assets/esb-poster.jpg";
import rotjPorterImg from "./assets/rotj-poster.jpg";

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card
        title="Pôster: Empire Stikes Back (1980)"
        posterImg={eswPosterImg}
      />
      <Card
        title="Pôster: Return of the Jedi (1983)"
        posterImg={rotjPorterImg}
      />
    </>
  );
}
