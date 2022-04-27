import { Component, OnInit } from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  onFileChange(event: any): void {
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }
  imgLoad() {
    // display cropper tool
  }

  initCropper() {
    // init cropper
  }


  imgFailed() {
    // error msg
  }

}
