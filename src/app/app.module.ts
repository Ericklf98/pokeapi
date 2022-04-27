import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { CardPkemonComponent } from './Components/card-pkemon/card-pkemon.component';
import { ModalPokemonComponent } from './Components/modal-pokemon/modal-pokemon.component';
import { PipePipe } from './Components/pipes/pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    CardPkemonComponent,
    ModalPokemonComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
