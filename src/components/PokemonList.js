import Pokemon from "./Pokemon.js";

const PokemonList = (props) => {
  // Turn each pokemon in the JSON object into a pokemon component
  const pokeComponents = props.pokemonList.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        type={pokemon.type[0]}
        height={pokemon.height}
      />
    );
  });


  return (
    <div>
      <ul className="collection">
        {pokeComponents}
      </ul>
    </div>
  );
};


export default PokemonList;
