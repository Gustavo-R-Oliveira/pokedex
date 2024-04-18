import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from './service/service.service';
import { IPokemon, getEmptyIPokemon } from './interfaces/pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  pokemon: IPokemon = getEmptyIPokemon();
  pokemons: IPokemon[] = [];
  selectValue = '';
  previousPokemon = 1

  ngOnInit(): void {
  this.getAllPokemons()
  this.getPokemon()
   
  }

  getPokemon(pokemon = 'bulbasaur'): void {
    if (`${pokemon}` === '0') return;

    this.pokemonService.getPokemonDetail(pokemon).then((pokemon) => {
      this.pokemon = pokemon;
      setTimeout(() => {
      this.previousPokemon = JSON.parse(JSON.stringify(+pokemon.id))
      }, 1000);
    });
  }

  getAllPokemons(pokemonGeneration = '1'): void {
    this.pokemons = []
    this.pokemonService.getAllPokemons(pokemonGeneration).then((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  get getPokemons(): IPokemon[] {
    return this.pokemonsUpdated(this.selectValue);
  }

  pokemonsUpdated(param = ''): IPokemon[] {
    if (!!+param) {
      return this.pokemons.filter((pokemon) => pokemon.id.includes(param));
    } else {
      return this.pokemons.filter((pokemon) => pokemon.name.includes(param));
    }
  }
}
