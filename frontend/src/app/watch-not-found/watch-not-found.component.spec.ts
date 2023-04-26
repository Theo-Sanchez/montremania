import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchNotFoundComponent } from './watch-not-found.component';

describe('WatchNotFoundComponent', () => {
  let component: WatchNotFoundComponent;
  let fixture: ComponentFixture<WatchNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
