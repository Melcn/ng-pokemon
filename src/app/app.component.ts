import { Component, OnInit } from '@angular/core'; // Import les elements dont on va avoir besoin (componenent angular)
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({

  selector: 'app-root',
  template: `<h1> Liste de pokemons </h1>`


})

export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) { //method pour selectionner pkm
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
