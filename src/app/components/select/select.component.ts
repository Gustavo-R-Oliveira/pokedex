import { IPokemon } from 'src/app/interfaces/pokemon.interface';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements AfterViewInit, OnDestroy {
  @Input() pokemons: IPokemon[] = [];
  @Input() placeholder = '';
  @Input() filter = false;
  @Output() pokemonFiltered = new EventEmitter<string>();
  @Output() genChanged = new EventEmitter<string>();
  @Output() pokemonSelected = new EventEmitter<string>();

  public valueFilter = '';
  public valueSelect = '1';
  public open = false;
  private subcription = new Subscription();

  ngAfterViewInit(): void {
    if (this.filter === false) return
    this.subcription = fromEvent(document, 'input')
      .pipe(debounceTime(1000))
      .subscribe(() => this.pokemonFiltered.emit(this.valueFilter));
  }

  changeGeneration(): void {
    this.genChanged.emit(this.valueSelect)
  }

  selectPokemon(id: string): void {
    this.open = false
    this.pokemonSelected.emit(id)
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
