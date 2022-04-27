import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css']
})
export class ModalPokemonComponent implements OnInit {
  @Input() open = false;
  @Input() nombre = '';
  @Input() id = '';
  @Input() imagen = '../../../../assets/imagenes/imagenes/nodisponible.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  cambiarEstado():boolean{
    return this.open=!this.open;
  }
  public title:string="";
  
}
