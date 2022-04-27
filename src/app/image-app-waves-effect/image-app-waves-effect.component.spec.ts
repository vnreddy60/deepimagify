import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAppWavesEffectComponent } from './image-app-waves-effect.component';

describe('ImageAppWavesEffectComponent', () => {
  let component: ImageAppWavesEffectComponent;
  let fixture: ComponentFixture<ImageAppWavesEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAppWavesEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAppWavesEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
