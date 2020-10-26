import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GalleryImage } from './gallery.models';
import { PopoutGalleryComponent } from './popout-gallery/popout-gallery.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: GalleryImage[] = [];
  @Output() imageChanged = new EventEmitter<GalleryImage>();

  counter = 1;

  constructor(private dialog: MatDialog) { }

  get currentImage(): GalleryImage {
    return this.images && this.images.length > 0
      ? this.images[this.counter - 1]
      : new GalleryImage();
  }

  get isFirstImage(): boolean {
    return this.counter === 1;
  }

  get isLastImage(): boolean {
    return this.counter === this.images.length;
  }

  ngOnInit() {
    if(this.currentImage) {
      this.imageChanged.emit(this.currentImage);
    }
  }

  changeImage(change: number) {
    this.counter += change;

    this.imageChanged.emit(this.currentImage);
  }

  popout() {
    const ref = this.dialog.open(PopoutGalleryComponent, {
      width: '1000px',
      data: {
        images: this.images,
        imageWidth: '950',
        imageHeight: '600'
      }
    });
  }

  selectImage(image: GalleryImage) {
    const index = this.images.findIndex(x => x.id === image.id);

    this.counter = index + 1;
  }

}
