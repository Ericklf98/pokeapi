import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-card-pkemon',
  templateUrl: './card-pkemon.component.html',
  styleUrls: ['./card-pkemon.component.css']
})
export class CardPkemonComponent implements OnInit {
  public open:boolean=false;
  @Input() nombre = '';
  @Input() id = '';
  @Input() imagen = '../../../../assets/imagenes/imagenes/nodisponible.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  onMostrar():boolean{
    return this.open=!this.open;
  }
}
