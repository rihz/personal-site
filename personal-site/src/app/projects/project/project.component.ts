import { Component, Input, OnInit } from '@angular/core';
import { GalleryImage } from 'src/app/gallery/gallery.models';
import { Project } from '../projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() reverse = false;

  height = 0;
  defaultHeight = 500;

  constructor() { }

  ngOnInit() {
  }  

  changeImage(newImage: GalleryImage) {
    this.height = newImage
      ? newImage.height + 100
      : this.defaultHeight;
  }

}
