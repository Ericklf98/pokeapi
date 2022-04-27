import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPkemonComponent } from './card-pkemon.component';

describe('CardPkemonComponent', () => {
  let component: CardPkemonComponent;
  let fixture: ComponentFixture<CardPkemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPkemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPkemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
