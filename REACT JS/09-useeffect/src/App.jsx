import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonShow, setPokemonShow] = useState(null);

  // Usando If
  // if (pokemons.length === 0) {
  //   fetchPokemon().then((result) => {
  //     setPokemons(result);
  //   });
  // }

  useEffect(() => {
    fetchPokemon().then((result) => {
      setPokemons(result);
    });
  }, []);

  const showDetails = async (url) => {
    const data = await fetch(url).then((res) => res.json());
    setPokemonShow(data);
  };

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <span>{pokemon.name}</span>
              <button onClick={() => showDetails(pokemon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {pokemonShow && (
        <div>
          <h2>{pokemonShow.name}</h2>
          <img src={pokemonShow.sprites.front_default} alt="" />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShow.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>
            {pokemonShow.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>
            {pokemonShow.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShow.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShow.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
