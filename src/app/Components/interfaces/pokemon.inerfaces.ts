export interface AllPokemons {
    count:    number;
    next:     null;
    previous: null;
    results:  AregloPokemon[];
}

export interface AregloPokemon {
    name: string;
    url:  string;
}


export interface PokemonIndividual {
    id: string;
    name: string;
    imagen: string;
    /*order:string;*/
}