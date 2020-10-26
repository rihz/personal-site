import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.models';
import { Project } from './projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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
          text: 'View Source on GitHub',
          id: 'pkmn1'
        },
        {
          path: 'https://github.com/rihz/pkmn-team-builder/projects/1',
          text: 'View Project Board on GitHub',
          id: 'pkmn2'
        }
      ],
      trelloLinks: [],
      images: [
        
      ],
      reverse: true
    },
    {
      title: 'XIV Multitool',
      description: 'Suite of applications to manage various aspects '
        + 'of the user experience in Final Fantasy XIV Online.',
      langs: ['Angular', 'Electron', 'C# Web API', 'SQL'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/xiv-multitool',
          text: 'View Source on GitHub',
          id: 'xiv1'
        }
      ],
      trelloLinks: [
        { 
          path: 'https://trello.com/b/Oc5gknIK/xiv-multitool-v01-proto',
          text: 'View Project Board on Trello',
          id: 'xiv2'
        }
      ],
      images: [
        
      ],
      reverse: false
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
          text: 'View Source on GitHub',
          id: 'parser'
        }
      ],
      trelloLinks: [
      ],
      images: [
      ],
      reverse: true
    },
    {
      title: 'This Site',
      description: 'This site that you are viewing right now!',
      langs: ['Angular'],
      githubLinks: [
        { 
          path: 'https://github.com/rihz/personal-site',
          text: 'View Source on GitHub',
          id: 'site'
        }
      ],
      trelloLinks: [
      ],
      images: [
        
      ],
      reverse: false
    }
  ];
  
  constructor() { }

  ngOnInit() {
    
  }

}
