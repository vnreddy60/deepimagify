import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageCropperComponent} from "./image-cropper/image-cropper.component";

const routes: Routes = [
  { path: 'image-cropper', component: ImageCropperComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

