import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, } from 'rxjs';
import { Utils } from '../utils/utils';
import { IResponse } from '../interfaces/getAllPokemons.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getAllPokemons(generation: string): Promise<any> {
    let path = ''
    switch (generation) {
      case '1':
        path = `?offset=0&limit=151`
        break;
      case '2':
        path = `?offset=151&limit=100`
        break;
      case '3':
        path = `?offset=251&limit=135`
        break;
      case '4':
        path = `?offset=386&limit=107`
        break;
      case '5':
        path = `?offset=493&limit=156`
        break;
      case '6':
        path = `?offset=649&limit=72`
        break;
      case '7':
        path = `?offset=721&limit=88`
        break;
      case '8':
        path = `?offset=809&limit=96`
        break;
      case '9':
        path = `?offset=905&limit=121`
        break;
      case 'variations':
        path = `?offset=1025&limit=277`
        break

    }

    const url = `${this.baseUrl}/pokemon${path}`;

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
