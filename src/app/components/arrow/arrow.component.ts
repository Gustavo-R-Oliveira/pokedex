import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
export class ArrowComponent {
  @Input() direction!: 'left' | 'right';
  @Output() clicked = new EventEmitter<string>();
}
