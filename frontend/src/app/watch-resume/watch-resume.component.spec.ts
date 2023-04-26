import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchResumeComponent } from './watch-resume.component';

describe('WatchResumeComponent', () => {
  let component: WatchResumeComponent;
  let fixture: ComponentFixture<WatchResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
