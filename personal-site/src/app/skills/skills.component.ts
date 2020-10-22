import { Component, OnInit } from '@angular/core';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'C#', years: '4+', description: 'Professional and personal experience. Main language used at current position. Most used language on personal projects.' }
  ];
  columns = ['name', 'years', 'description'];
  constructor() { }

  ngOnInit() {
  }

}
