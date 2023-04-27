import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdNavCustomStyle } from './nav-custom-style.component';

describe('NavBarComponent', () => {
  let component: NgbdNavCustomStyle;
  let fixture: ComponentFixture<NgbdNavCustomStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdNavCustomStyle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdNavCustomStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
