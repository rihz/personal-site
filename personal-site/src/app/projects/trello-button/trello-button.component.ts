import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-button',
  templateUrl: './trello-button.component.html',
  styleUrls: ['./trello-button.component.scss']
})
export class TrelloButtonComponent implements OnInit {
  @Input() link: string;
  @Input() text: string;
  @Input() id: string;

  hovering = false;

  constructor() { }

  ngOnInit() {
    console.log(this.link);
  }

  goToLink() {
    document.getElementById(this.id).click();
  }

}
