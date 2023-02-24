import { Component, OnInit } from '@angular/core'; // Import les elements dont on va avoir besoin (componenent angular)
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


/*-------------------VUE------------------*/
@Component({

  selector: 'app-root',
  templateUrl: `app.component.html`


})

/*----------------LOGIQUE------------------*/ 
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent) { //method pour selectionner pkm
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemonList[index].name}`);
  }
}
