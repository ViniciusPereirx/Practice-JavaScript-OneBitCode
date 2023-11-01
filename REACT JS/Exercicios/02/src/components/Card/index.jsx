import posterImg from "../../assets/star-wars.jpg";

import { Button } from "../Button";

export const Card = () => {
  return (
    <div className="container">
      <img className="poster" src={posterImg} alt="Star Wars poster" />

      <div>
        <h2>Pôster: Star Wars (1977)</h2>
        <p>
          Um pôster épico do filme Star Wars, com moldura de MDF e tamanho A3.
          Uma ótima recordação de um dos mais icônicos filmes de todos os
          tempos. Este clássico pôster trará aventura, nostalgia e a magia de
          Star Wars para qualquer lugar que você decidir pendurar. Não perca a
          chance de adicionar esaa linda memória ao seua cervo!
        </p>
        <Button />
      </div>
    </div>
  );
};
