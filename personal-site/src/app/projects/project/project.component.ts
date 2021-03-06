import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GalleryImage } from 'src/app/gallery/gallery.models';
import { PopoutGalleryComponent } from 'src/app/gallery/popout-gallery/popout-gallery.component';
import { Project } from '../projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() project: Project;
  @Input() reverse = false;
  @Output() openGallery = new EventEmitter<GalleryImage[]>();

  height = 0;
  defaultHeight = 500;

  showButton = false;

  constructor(public dialog: MatDialog) { }

  get maxWidth(): string {
    return this.project.fullWidth ? '1000px' : '500px';
  }

  ngOnInit() {
    
  }  

  // changeImage(newImage: GalleryImage) {
  //   this.height = newImage
  //     ? newImage.height + 100
  //     : this.defaultHeight;
  // }

  showGallery() {
    this.openGallery.emit(this.project.images);
  }

  navTo(path: string) {
    window.open(path, '_blank');
  }

}
