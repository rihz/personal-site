import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isMobile = false;

  skills: Skill[] = [
    { name: 'Angular', years: '2+', description: 'Professional and personal experience. Started using for client work and have continued to use it daily since then in a professional as well as personal capacity.' },
    { name: 'Azure Hosting', years: '4+', description: 'Mostly professional experience. Learned ins and outs during the first year of my career and, along with my group, pioneered use of Azure throughout company.' },
    { name: 'C#', years: '4+', description: 'ASP.NET, Web API, .NET Core 2.0+ since the beginning of my career. Also used frequently in personal projects.' },
    { name: 'C++', years: '2+', description: 'Mostly personal experience. Most commonly used language throughout college career.' },
    { name: 'Firebase', years: '<1', description: 'Personal experience with hosting and using NoSQL database.' },
    { name: 'GitHub', years: '4+', description: 'Picked up at the start of my career and have used it in every personal project since then.' },
    { name: 'HTML5', years: '4+', description: 'Professional experience that carried on throughout my career. Still used every day for professional and personal needs.' },
    { name: 'JavaScript', years: '4+', description: 'Used professionally every day since the start of my career. Fluent with vanilla JavaScript as well as child frameworks like React, Angular, and Vue.' },
    { name: 'PHP', years: '1+', description: 'Professional experience involved learning PHP to replace deprecated PHP code from a client site and maintaining it afterwards.' },
    { name: 'React', years: '1+', description: 'Professional experience replacing existing jQuery code with React components and functionality.' },
    { name: 'SQL', years: '4+', description: 'Learned SQL at the beginning of my career with now prior knowledge from college or elsewhere. Now, it used daily for a variety of professional and personal projects.' },
    { name: 'Team Foundation Server (TFS)', years: '4+', description: 'Now known as Azure DevOps. Experienced with boards, sprints, etc. as well as integrations with Microsoft Azure.' },
    { name: 'Trello', years: '<1', description: 'Project boards used for personal projects. Experienced with browser version and stand-alone app.' }
  ];
  otherSkills: string[] = [
    'Experience working with project managers and clients to create and assign tasks to other developers through Azure DevOps.',
    'Experience managing other developers and working together to accomplish a task within an acceptable timeframe.',
    'Experience proficiently learning new languages and frameworks in a short amount of time in order to produce a desirable result.',
    'Experience with working on an on-call schedule.',
    'Experience making sites responsive to all screen sizes.',
    'Experience conducting phone interviews with potential new employees.',
    'Experience earning certifications within a timeframe.',
    'Experience writing design documents and adding documentation to code.',
    'Skilled at time management and self-motivation to get tasks done with little to no supervision.',
    'Genuine passion for programming and learning new things.',
  ];

  otherColumns = ['skill'];

  constructor(private windowService: WindowService) { }

  get columns(): string[] {
    return this.isMobile
      ? ['name', 'years']
      : ['name', 'years', 'description'];
  }

  ngOnInit() {
    this.onResize();    
    this.windowService.checkWidth();
  }

  onResize(){
    this.windowService.getMobileStatus().subscribe( isMobile =>{
      this.isMobile = isMobile;
    });
  }

}
