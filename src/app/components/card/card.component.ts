import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  @Input() pokemon!: IPokemon;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  firstTime = true;
  isMobile = this.detectTouchDevice();

  ngOnInit(): void {
    setTimeout(() => {
      this.firstTime = true;
    }, 1500);
  }

  detectTouchDevice(): boolean {
    if ('ontouchstart' in window) return true;

    return false;
  }
}
