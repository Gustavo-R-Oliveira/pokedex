import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, lastValueFrom, map, take, tap } from 'rxjs';
import { Utils } from '../utils/utils';
import { IResponse } from '../interfaces/getAllPokemons.interface';
import { IPokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'http://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getAllPokemons(): Promise<any> {
    const url = `${this.baseUrl}/pokemon?offset=0&limit=151`;

    return lastValueFrom(this.http.get<Promise<any>>(url))
      .then((res) => res as unknown as IResponse)
      .then((res) => res.results.map(({ name }) => this.getPokemonDetail(name)))
      .then((res) => Promise.all(res));
  }

  getPokemonDetail(pokemon: string | number): Promise<any> {
    const url = `${this.baseUrl}/pokemon/${pokemon}`;

    return lastValueFrom(this.http.get<Promise<any>>(url)).then((pokemon) =>
      Utils.mapPokemon(pokemon)
    );
  }
}
