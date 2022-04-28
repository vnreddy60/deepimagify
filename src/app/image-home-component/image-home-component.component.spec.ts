import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageHomeComponentComponent } from './image-home-component.component';

describe('ImageHomeComponentComponent', () => {
  let component: ImageHomeComponentComponent;
  let fixture: ComponentFixture<ImageHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageHomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
