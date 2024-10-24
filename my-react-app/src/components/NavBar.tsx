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
   


    return (        
        <div>
            <PokemonCards pokemon={pokemonList[pokemonIndex]} />

            {pokemonList.map((pokemon, index) => (    
                <button key={pokemon.name} type="button" onClick={() => setPokemonIndex(index)}>
                    {pokemon.name} 
                </button>
))}
        </div>
    )
}

export default NavBar;