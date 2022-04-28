import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageAppFooterComponent } from './image-app-footer/image-app-footer.component';
import { ImageAppWavesEffectComponent } from './image-app-waves-effect/image-app-waves-effect.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import {ImageCropperModule} from "ngx-image-cropper";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ImageHomeComponentComponent } from './image-home-component/image-home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageAppFooterComponent,
    ImageAppWavesEffectComponent,
    ImageCropperComponent,
    ImageHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
