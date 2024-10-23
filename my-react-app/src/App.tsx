import "./App.css";
import PokemonCards from "./components/PokemonCard";
import { useState } from "react";





const pokemonList = [

  {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "charmander",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    {
  
      name: "squirtle",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    {
  
      name: "pikachu",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];



function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleBackClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }
    
    const handleNextClick = () => {
      setPokemonIndex(pokemonIndex + 1)
    }
  return (

    <div>

      <PokemonCards pokemon={pokemonList[pokemonIndex]} />

        {pokemonIndex > 0 &&

          <button type="button" onClick={handleBackClick}>Précédent</button>}

        {pokemonIndex < pokemonList.length - 1 &&

          <button type="button" onClick={handleNextClick}>Suivant</button>}

    </div>

);

}


export default App
