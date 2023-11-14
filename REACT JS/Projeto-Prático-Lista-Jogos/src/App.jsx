import { Games } from "./components/Games";
import { AddGame } from "./components/AddGame";
import { useGamesCollection } from "./hooks/useGamesCollections";

export const App = () => {
  const { games, addGame, removeGame } = useGamesCollection();

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <AddGame addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Games
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2>Nenhum jogo encontrado!</h2>
        )}
      </div>
    </div>
  );
};
