import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from './service/service.service';
import { IPokemon, getEmptyIPokemon } from './interfaces/pokemon.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  title = 'pokedex';
  pokemon: IPokemon = getEmptyIPokemon();
  pokemons: IPokemon[] = [];
  selectValue = '';

  public typeColors = {
    normal: [170, 166, 127],
    fighting: [193, 34, 57],
    flying: [168, 145, 236],
    poison: [164, 62, 158],
    ground: [222, 193, 107],
    rock: [182, 158, 49],
    bug: [167, 183, 35],
    ghost: [112, 85, 155],
    steel: [183, 185, 208],
    fire: [245, 125, 49],
    water: [100, 147, 235],
    grass: [116, 203, 72],
    electric: [249, 207, 48],
    psychic: [251, 85, 132],
    ice: [154, 214, 223],
    dragon: [112, 55, 255],
    dark: [117, 87, 76],
    fairy: [230, 158, 172],
  };

  //v1 0 - 151
  //v2 152 - 251
  //v3 252 - 386
  //v4 387 - 493
  //v5 494 - 649
  //v6 650 - 721
  //v7 722 - 809
  //v8 810 - 905
  //v9 906 - 1025
  // 10001 10277

  ngOnInit(): void {
    this.pokemonService.getPokemonDetail('904').then((pokemon) => {
      this.pokemon = pokemon;
    });
    this.pokemonService.getAllPokemons().then((pokemons) => {
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

    // if (!!+param) {
    //   this.pokemonsUpdated = this.pokemons.filter((pokemon) =>
    //     pokemon.id.includes(param)
    //   );
    // } else {
    //   this.pokemonsUpdated = this.pokemons.filter((pokemon) =>
    //     pokemon.name.includes(param)
    //   );
    // }

    // console.log(this.pokemons);
  }

  nextPokemon(): void {
    console.log('next');
  }
  previousPokemon(): void {
    console.log('previous');
  }
}

// 1° 1 - 151
// 2° 152 - 251
// 3° 252 - 386
// 4° 387 - 490   // 491 492 493
// 5° 494 - 649
// 6° 650 - 721
// 7° 722 - 809
// 8° 810 - 905
// 9° 906 - 1025
