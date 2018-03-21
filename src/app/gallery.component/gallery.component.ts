import { Component, OnInit } from '@angular/core';

import { Image } from './../image';
import { ImageService } from './../image.service';

@Component({
    selector: 'gallery-list',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

    fileToUpload: File = null;

    image: Image[] = [];

    constructor(private imageService: ImageService) { }

    public ngOnInit() {
        this.onGetImage();
    };

    onGetImage() {
        this.imageService
            .getImage()
            .subscribe(
                image => this.image = image
            )
    }


    // onAddImage(image){
    //     this.imageService
    //     .addImage(image)
    //     .subscribe(()=>this.ngOnInit());
    // }

    handleFileInput(files: FileList) {

        this.fileToUpload = files.item(0);
        this.uploadFileToActivity();

        console.log(this.fileToUpload);
    }

    uploadFileToActivity() {
        this.imageService.postFile(this.fileToUpload).subscribe(data => {
          // do something, if upload success
          }, error => {
            console.log(error);
          });
      }
};