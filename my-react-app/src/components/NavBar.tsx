import PokemonCards from './PokemonCard';

interface Pokemon {
    name: string;  
    imgSrc?: string;  
}
  
  
interface NavBarProps {  
    pokemonIndex: number;  
        setPokemonIndex: (index: number) => void;  
    pokemonList: Pokemon[];  
}

const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) => {
    const handleBackClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    };
    
    const handleNextClick = () => {
      setPokemonIndex(pokemonIndex + 1)
    };


    return (        
        <div>
            <PokemonCards pokemon={pokemonList[pokemonIndex]} />
                {pokemonIndex > 0 && (
                    <button type="button" onClick={handleBackClick}>Précédent</button>
)}

                {pokemonIndex < pokemonList.length - 1 && (
                    <button type="button" onClick={handleNextClick}>Suivant</button>
)}
        </div>
    )
}

export default NavBar;