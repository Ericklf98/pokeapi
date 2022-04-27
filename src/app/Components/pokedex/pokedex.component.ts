import { Component, OnInit } from '@angular/core';
import { PokemonSeviciosService } from '../Servicios/pokemon-sevicios.service';
import { PokemonIndividual } from '../interfaces/pokemon.inerfaces';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public pokemon:PokemonIndividual[]=[];
  public pagina:number=0;//se ocupara para la paginacion
  public search:string="";
  loader=true;
  constructor(private serviciopokemon:PokemonSeviciosService) { }

  ngOnInit(): void {
    this.serviciopokemon.AllPokemons()
      .subscribe( pokemons => {
        this.pokemon = pokemons;
        console.log(pokemons);
        this.loader=false;
      });
  }
  ValidadorAnterior():boolean{
    if (this.pagina === 0) {
      return true;
    } else {
      return false;
    }
  }
  nextPage(){
    this.pagina+=9;
  }
  PreviousPage(){
    if(this.pagina>0){
      this.pagina-=9;
    }
  }
  Buscador(word:string){
    console.log("la word",word)
    this.pagina=0;
    this.search=word;
  }
}
