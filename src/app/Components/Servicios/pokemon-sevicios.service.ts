import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllPokemons, PokemonIndividual } from '../interfaces/pokemon.inerfaces';
@Injectable({
  providedIn: 'root'
})
export class PokemonSeviciosService {
  public url="https://pokeapi.co/api/v2";//rl de la pokedexapi
  constructor(private htp:HttpClient) { }
  AllPokemons():Observable<PokemonIndividual[]>{
    return this.htp.get<AllPokemons>(`${ this.url }/pokemon?limit=1500`)
    .pipe( 
      map( this.PokemonI )
    )
  }
  private PokemonI( resp: AllPokemons ): PokemonIndividual[] {
    const pokemonLista: PokemonIndividual[] = resp.results.map( poke => {
      const urlArr = poke.url.split('/');
      const id  = urlArr[6];
      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
      console.log("ver todo lo de pokemon",poke)
      return {
        id,
        imagen,
        name: poke.name,
      }
    })
    return pokemonLista;
  }

}
