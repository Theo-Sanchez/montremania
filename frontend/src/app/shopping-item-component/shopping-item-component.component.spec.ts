import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingItemComponentComponent } from './shopping-item-component.component';

describe('ShoppingItemComponentComponent', () => {
  let component: ShoppingItemComponentComponent;
  let fixture: ComponentFixture<ShoppingItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingItemComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
