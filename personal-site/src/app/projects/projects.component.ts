import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.models';
import { WindowService } from '../services/window.service';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isMobile = false;
  projects: Project[] = [
    {
      title: 'Pokemon Team Builder',
      description: 'An application to organize, manage, and share competitive '
        + 'teams of Pokemon in the Pokemon Sword and Pokemon Shield '
        + 'titles.',
      langs: ['Angular', 'C# Web API', 'SQL'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/pkmn-team-builder',
          text: 'View Source',
          id: 'pkmn1'
        },
        {
          path: 'https://github.com/rihz/pkmn-team-builder/projects/1',
          text: 'View Project Board',
          id: 'pkmn2'
        }
      ],
      trelloLinks: [],
      images: [
        { id: 1, path: 'assets/team-builder/News.PNG', width: 600, height: 400 },
        { id: 2, path: 'assets/team-builder/Build 1.PNG', width: 600, height: 400 },
        { id: 3, path: 'assets/team-builder/Build 2.PNG', width: 600, height: 400 },
        { id: 4, path: 'assets/team-builder/Build 3.PNG', width: 600, height: 400 },
        { id: 5, path: 'assets/team-builder/View 1.PNG', width: 600, height: 400 },
        { id: 6, path: 'assets/team-builder/View 2.PNG', width: 600, height: 400 },
        { id: 7, path: 'assets/team-builder/CHange Theme.PNG', width: 600, height: 400 },
        { id: 8, path: 'assets/team-builder/Different Theme 1.PNG', width: 600, height: 400 },
        { id: 9, path: 'assets/team-builder/Different Theme 2.PNG', width: 600, height: 400 },
      ],
      backgroundImage: 'assets/team-builder/News.PNG',
      fullWidth: false
    },
    {
      title: 'XIV Multitool',
      description: 'Suite of applications to manage various aspects '
        + 'of the user experience in Final Fantasy XIV Online.',
      langs: ['Angular', 'Electron', 'C# Web API', 'SQL'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/xiv-multitool',
          text: 'View Source',
          id: 'xiv1'
        }
      ],
      trelloLinks: [
        { 
          path: 'https://trello.com/b/Oc5gknIK/xiv-multitool-v01-proto',
          text: 'View Project Board',
          id: 'xiv2'
        }
      ],
      images: [
        { id: 10, path: 'assets/multitool/Register.PNG', width: 600, height: 400 },
        { id: 11, path: 'assets/multitool/Login.PNG', width: 600, height: 400 },
        { id: 12, path: 'assets/multitool/Checklist 1.PNG', width: 600, height: 400 },
        { id: 13, path: 'assets/multitool/Checklist 2.PNG', width: 600, height: 400 },
        { id: 14, path: 'assets/multitool/Ledger 1.PNG', width: 600, height: 400 },
        { id: 15, path: 'assets/multitool/Ledger 2.PNG', width: 600, height: 400 },
        { id: 16, path: 'assets/multitool/Profile.PNG', width: 600, height: 400 },
        { id: 17, path: 'assets/multitool/Link Account.PNG', width: 600, height: 400 },
      ],
      backgroundImage: 'assets/multitool/Profile.PNG',
      fullWidth: false
    },
    {
      title: 'Lodestone Parser',
      description: 'Library for applications to use in order to extract '
        + 'data from the Final Fantasy XIV Online companion site, the '
        + 'Lodestone.',
      langs: ['C#'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/LodestoneParser',
          text: 'View Source',
          id: 'parser'
        }
      ],
      trelloLinks: [
      ],
      images: [
      ],
      backgroundImage: 'assets/parser.PNG',
      fullWidth: false
    },
    {
      title: 'This Site',
      description: 'This site that you are viewing right now!',
      langs: ['Angular'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/personal-site',
          text: 'View Source',
          id: 'site'
        }
      ],
      trelloLinks: [
      ],
      images: [
        
      ],
      backgroundImage: 'assets/site.PNG',
      fullWidth: false
    },
    {
      title: 'Professional Projects',
      description: 'While I cannot share specific source code from my professional projects, '
        + 'my personal projects serve a way for me to take what I am currently using at work and '
        + 'improve my skills with it. As such, a lot of what I have accomplished in my career uses '
        + 'the same frameworks as you see in the projects above.',
      langs: ['Angular', 'C# Web API', 'SQL', 'JavaScript', 'React', 'jQuery', 'VBA', '...and more!'],
      githubLinks: [],
      trelloLinks: [],
      images: [],
      fullWidth: true,
      backgroundImage: ''
    }
  ];
  
  constructor(private windowService: WindowService) { }

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
