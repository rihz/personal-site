import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/gallery.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  images: GalleryImage[] = [
    { id: 1, width: 600, height: 400, path: 'assets/test1.PNG' },
    { id: 2, width: 600, height: 400, path: 'assets/test2.PNG' },
    { id: 3, width: 600, height: 400, path: 'assets/test3.PNG' },
  ];

  defaultHeight = 500;
  projectHeight = 0;
  
  constructor() { }

  ngOnInit() {
    
  }

  handleImageChange(newImage: GalleryImage) {
    this.projectHeight = newImage
      ? newImage.height + 100
      : this.defaultHeight;
  }

}
