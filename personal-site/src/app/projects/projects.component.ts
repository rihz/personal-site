import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.models';
import { WindowService } from '../services/window.service';
import { Project } from './projects.model';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

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
        { src: 'assets/team-builder/News.PNG', w: 2558, h: 571, title: 'This is the home page of the application. It serves a news feed taken from the database for the viewers to see.' },
        { src: 'assets/team-builder/Build 1.PNG', w: 2562, h: 1051, title: 'A shot of the "build" screen, where users select a Pokemon to add to their team.' },
        { src: 'assets/team-builder/Build 2.PNG', w: 2558, h: 595, title: 'Selected Pokemon are shown with their various attributes and abilties. The team can also be named and notes can be added per team member.' },
        { src: 'assets/team-builder/Build 3.PNG', w: 2559, h: 576, title: 'A shot showing more details for the selected team members.' },
        { src: 'assets/team-builder/View 1.PNG', w: 2562, h: 1215, title: 'The "view" screen, where a list of other teams are displayed at a glance.' },
        { src: 'assets/team-builder/View 2.PNG', w: 2545, h: 778, title: 'Teams can be "liked", and their members can be expanded to view more specific details without going into the dedicated team page.' },
        { src: 'assets/team-builder/CHange Theme.PNG', w: 2558, h: 945, title: 'Multiple themes are available for the user to use throughout the application. This showcases a selection of them.' },
        { src: 'assets/team-builder/Different Theme 1.PNG', w: 2557, h: 745, title: 'This shows the "view" page under the "charmander" theme.' },
        { src: 'assets/team-builder/Different Theme 2.PNG', w: 2557, h: 763, title: 'This shows the "view" page under the "pikachu" theme.' },
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
        { src: 'assets/multitool/Checklist 1.PNG', w: 1979, h: 692, title: 'An overview of all available checklists in XIV|Checklist (with placeholder values).' },
        { src: 'assets/multitool/Checklist 2.PNG', w: 1979, h: 1104, title: 'A view of a specific category checklist with the ability to mark it as untracked (X), default (-), or complete.' },
        { src: 'assets/multitool/Ledger 1.PNG', w: 2558, h: 618, title: 'A sample ledger from XIV|Ledger with test values.' },
        { src: 'assets/multitool/Ledger 2.PNG', w: 1102, h: 739, title: 'Adding a transaction to a ledger in XIV|Ledger.' },
        { src: 'assets/multitool/Profile.PNG', w: 1978, h: 1176, title: 'User profile page with an e-mail address, added retainer values, and the ability to link your XIV|Multitool account with your in-game character.' },
        { src: 'assets/multitool/Link Account.PNG', w: 1978, h: 971, title: 'The dialog for linking your character with your account.' },
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
        {
          path: 'https://trello.com/b/lNLnxhzl/js-personal-site-updates',
          id: 'personal1',
          text: 'View Project Board'
        }
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
      trelloLinks: [
        
      ],
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

  openPhotoswipe(images: GalleryImage[]) {
    const element = <HTMLElement>document.querySelectorAll('.pswp')[0];

    const options = {
      index: 0
    };

    let gallery = new PhotoSwipe(element, PhotoSwipeUI_Default, images, options);
    gallery.init();
  }

}
