type pokemonProps = {
        name: string;
        imgSrc?: string;
}
function PokemonCards({ pokemon }: { pokemon: pokemonProps}) {    

    return (
        <figure>

                {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} />:<p>???</p>}
        
            <figcaption>
                {pokemon.name}
            </figcaption>

        </figure>
    )
}


export default PokemonCards;
