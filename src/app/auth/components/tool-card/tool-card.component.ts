import { Component, Input } from '@angular/core';

interface Card{
  img: string,
  text: string,
  title: string,
}

@Component({
  standalone: true,
  selector: 'app-tool-card',
  templateUrl: './tool-card.component.html',
  styleUrls: ['./tool-card.component.css']
})
export class ToolCardComponent  {
  @Input('card') card!: Card;
}
