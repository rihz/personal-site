import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {
  @Input() link: string;
  @Input() text: string;
  @Input() id: string;

  hovering = false;

  constructor() { }

  ngOnInit() {
  }

  goToLink() {
    document.getElementById(this.id).click();
  }

}
