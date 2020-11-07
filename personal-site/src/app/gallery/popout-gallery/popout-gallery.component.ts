import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { GalleryImage } from '../gallery.models';

@Component({
  selector: 'app-popout-gallery',
  templateUrl: './popout-gallery.component.html',
  styleUrls: ['./popout-gallery.component.scss']
})
export class PopoutGalleryComponent implements OnInit {
  counter = 1;

  constructor(
    public ref: MatDialogRef<PopoutGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  get currentImage(): GalleryImage {
    return this.data.images
      ? this.data.images[this.counter - 1]
      : null;
  }

  get isFirstImage(): boolean {
    return this.counter === 1;
  }

  get isLastImage(): boolean {
    return this.data.images
      ? this.counter === this.data.images.length
      : true;
  }

  get width(): string {
    return this.data.imageWidth.toString();
  }

  ngOnInit() {
    console.log(this.width);
  }

  changeImage(change: number) {
    this.counter += change;
  }

  // selectImage(image: GalleryImage) {
  //   const index = this.data.images
  //     ? this.data.images.findIndex(x => x.id === image.id)
  //     : 0;

  //   this.counter = index + 1;
  // }

}
