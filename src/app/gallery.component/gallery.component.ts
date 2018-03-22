import { Component, OnInit } from '@angular/core';

import { Image } from './../image';
import { ImageService } from './../image.service';

@Component({
    selector: 'gallery-list',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

    filesToUpload: Array<File> = [];

    constructor(private imageService: ImageService) { }

    public ngOnInit() {

    };

    onUpload() {
        const formData = new FormData();
        const files: Array<File> = this.filesToUpload;
        console.log('upload', files);

        formData.append('uploads[]', files[0]);

        this.imageService
            .uploadFile(formData)
            .subscribe(files => {
                console.log('subscribe ', files)
            })
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

    // onGetImage() {
    //     this.imageService
    //         .getImage()
    //         .subscribe(
    //             image => this.image = image
    //         )
    // }


    // onAddImage(image){
    //     this.imageService
    //     .addImage(image)
    //     .subscribe(()=>this.ngOnInit());
    // }

    // handleFileInput(files: FileList) {

    //     this.fileToUpload = files.item(0);
    //     this.uploadFileToActivity();

    //     console.log(this.fileToUpload);
    // }

    // uploadFileToActivity() {
    //     this.imageService.postFile(this.fileToUpload).subscribe(data => {
    //       // do something, if upload success
    //       }, error => {
    //         console.log(error);
    //       });
    //   }
};