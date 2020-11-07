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
        { src: 'assets/team-builder/News.PNG', w: 2558, h: 571 },
        { src: 'assets/team-builder/Build 1.PNG', w: 2562, h: 1051 },
        { src: 'assets/team-builder/Build 2.PNG', w: 2558, h: 595 },
        { src: 'assets/team-builder/Build 3.PNG', w: 2559, h: 576 },
        { src: 'assets/team-builder/View 1.PNG', w: 2562, h: 1215 },
        { src: 'assets/team-builder/View 2.PNG', w: 2545, h: 778 },
        { src: 'assets/team-builder/CHange Theme.PNG', w: 2558, h: 945 },
        { src: 'assets/team-builder/Different Theme 1.PNG', w: 2557, h: 745 },
        { src: 'assets/team-builder/Different Theme 2.PNG', w: 2557, h: 763 },
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
        { src: 'assets/multitool/Register.PNG', w: 1960, h: 976 },
        { src: 'assets/multitool/Login.PNG', w: 2544, h: 959 },
        { src: 'assets/multitool/Checklist 1.PNG', w: 1979, h: 692 },
        { src: 'assets/multitool/Checklist 2.PNG', w: 1979, h: 1104 },
        { src: 'assets/multitool/Ledger 1.PNG', w: 2558, h: 618 },
        { src: 'assets/multitool/Ledger 2.PNG', w: 1102, h: 739 },
        { src: 'assets/multitool/Profile.PNG', w: 1978, h: 1176 },
        { src: 'assets/multitool/Link Account.PNG', w: 1978, h: 971 },
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
      trelloLinks: [
        {
          path: 'https://trello.com/b/lNLnxhzl/js-personal-site-updates',
          id: 'personal1',
          text: 'View Project Board'
        }
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
