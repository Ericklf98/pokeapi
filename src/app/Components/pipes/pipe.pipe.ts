import { Pipe, PipeTransform } from '@angular/core';
import { PokemonIndividual } from '../interfaces/pokemon.inerfaces';
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(pokemon: PokemonIndividual[], pagina:number=0,search:string=""): PokemonIndividual[] {
    if(search.length===0){
      return pokemon.slice(pagina,pagina+9);
    }
    const filtrado=pokemon.filter((pro)=>pro.name.toLowerCase().includes(search.toLowerCase()));
    return filtrado.slice(pagina,pagina+9);
  }

}
