import { Component, OnInit } from '@angular/core';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'C#', years: '4+', description: 'Professional and personal experience. Main language used at current position. Most used language on personal projects.' },
    { name: 'C++', years: '2+', description: 'Mostly personal experience. Most commonly used language throughout college career.' },
    { name: 'SQL', years: '4+', description: 'Professional and personal experience. Learned on the job for first project and have used almost daily during my career.' },
    { name: 'HTML', years: '4+', description: 'Professional and personal experience. Learned in college and improved throughout career. Every day use.' },
    { name: 'JavaScript', years: '4+', description: 'Professional and personal experience. Learned majority of knowledge throughout career. Every day use.' },
    { name: 'Angular Framework', years: '2+', description: 'Professional and personal experience. Started using for client work and have continued to use it daily since then.' },
    { name: 'Azure Hosting', years: '4+', description: 'Mostly professional experience. Learned ins and outs during the first year of my career and, along with my group, pioneered use of Azure throughout company.' },
    { name: 'GitHub', years: '4+', description: 'Picked up at the start of my career and have used it in every personal project since then.' },
    { name: 'Team Foundation Server (TFS)', years: '4+', description: 'Now known as Azure DevOps. Experienced with boards, sprints, etc. as well as integrations with Microsoft Azure.' }
  ];
  otherSkills: string[] = [
    'Experience working with project managers and clients to create and tasks to other developers through Azure DevOps.',
    'Experience managing other developers and working together to accomplish a task within an acceptable timeframe.',
    'Experience proficiently learning new languages and frameworks in a short amount of time in order to produce a desirable result.',
    'Experience with working on an on-call schedule.',
    'Experience making sites responsive to all screen sizes.',
    'Genuine passion for programming and learning new things.',
    'Laid back attitude and diligent work ethic.'
  ];

  columns = ['name', 'years', 'description'];
  otherColumns = ['skill'];
  constructor() { }

  ngOnInit() {
  }

}
