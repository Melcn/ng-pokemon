import { Component, OnInit } from '@angular/core'; // Import les elements dont on va avoir besoin (componenent angular)

@Component({

  selector: 'app-root',
  template: `<h1> Welcome to {{ pokemonList[1] }}! </h1>`


})

export class AppComponent implements OnInit{
  pokemonList = ['Bulbizarre', 'Salameche', 'Carapuce'];

  ngOnInit(){
    console.table(this.pokemonList);
  }
}
