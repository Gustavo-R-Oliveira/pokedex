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
  @Output() typed = new EventEmitter<string>();

  public value = '';
  public open = false;
  private subcription = new Subscription();

  ngAfterViewInit(): void {
    this.subcription = fromEvent(document, 'input')
      .pipe(debounceTime(1000))
      .subscribe(() => this.typed.emit(this.value));
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
