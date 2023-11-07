/* eslint-disable react/prop-types */
import { Button } from "../Button";

export const Card = ({title, posterImg}) => {
  return (
    <div className="container">
      <img className="poster" src={posterImg} alt={title} />

      <div>
        <h2>{title}</h2>
        <p>
          Um pôster épico do filme Star Wars, com moldura de MDF e tamanho A3.
          Uma ótima recordação de um dos mais icônicos filmes de todos os
          tempos. Este clássico pôster trará aventura, nostalgia e a magia de
          Star Wars para qualquer lugar que você decidir pendurar. Não perca a
          chance de adicionar esaa linda memória ao seua cervo!
        </p>
        <Button text="Comprar agora" />
      </div>
    </div>
  );
};
