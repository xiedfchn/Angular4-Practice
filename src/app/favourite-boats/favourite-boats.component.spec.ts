import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBoatsComponent } from './favourite-boats.component';

describe('FavouriteBoatsComponent', () => {
  let component: FavouriteBoatsComponent;
  let fixture: ComponentFixture<FavouriteBoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
