import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloButtonComponent } from './trello-button.component';

describe('TrelloButtonComponent', () => {
  let component: TrelloButtonComponent;
  let fixture: ComponentFixture<TrelloButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
