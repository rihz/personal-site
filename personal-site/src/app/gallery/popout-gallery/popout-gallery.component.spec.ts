import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutGalleryComponent } from './popout-gallery.component';

describe('PopoutGalleryComponent', () => {
  let component: PopoutGalleryComponent;
  let fixture: ComponentFixture<PopoutGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoutGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoutGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
