import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-game-pad-button',
  templateUrl: './game-pad-button.component.html',
  styleUrls: ['./game-pad-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GamePadButtonComponent implements OnInit {

  @Input() btnStyle!: number;

  constructor() {
    this.btnStyle = 1;
  }

  ngOnInit(): void {
  }

}
