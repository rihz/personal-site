import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.scss']
})
export class ProjectControlComponent implements OnInit {
  @Input() icon: string;
  @Input() iconDark: string;
  @Input() iconLight: string;
  @Input() matIcon = true;
  @Input() text: string;
  @Input() isMobile: boolean = false;
  @Output() clicked = new EventEmitter<boolean>();

  hovering = false;

  constructor() { }

  ngOnInit() {
    console.log(this.matIcon);
  }

}
