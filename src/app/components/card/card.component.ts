import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
  @Input() pokemon!: IPokemon;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @ViewChild('card', { read: ElementRef }) card!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.card);
  }
}
