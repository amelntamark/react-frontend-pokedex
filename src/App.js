import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import pokeData from './pokedata.json';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(pokeData["pokemon"]);
  }, []);

  
  return (
    <div>
      <nav>
      <div className="nav-wrapper">
        <a href="index.html" className="brand-logo">Pokédex</a>
      </div>
  </nav>
  <a class="waves-effect waves-light btn" id="toggleButton">Show height</a>
      <PokemonList
        pokemonList={pokemon}
      />
    </div>
  );
}

export default App;
