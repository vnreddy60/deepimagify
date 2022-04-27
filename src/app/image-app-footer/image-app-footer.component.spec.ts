import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAppFooterComponent } from './image-app-footer.component';

describe('ImageAppFooterComponent', () => {
  let component: ImageAppFooterComponent;
  let fixture: ComponentFixture<ImageAppFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAppFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
