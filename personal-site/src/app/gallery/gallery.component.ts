import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: string[];
  @Input() width: number = 300;
  @Input() height: number = 200;
  counter = 1;

  constructor() { }

  get currentImageSrc(): string {
    return this.images && this.images.length >= this.counter
      ? this.images[this.counter - 1]
      : '';
  }

  get isFirstImage(): boolean {
    return this.counter === 1;
  }

  get isLastImage(): boolean {
    return this.counter === this.images.length;
  }

  ngOnInit() {
  }

  changeImage(change: number) {
    this.counter += change;
  }

}
