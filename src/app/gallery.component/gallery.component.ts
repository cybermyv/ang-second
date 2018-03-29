import { Component, OnInit } from '@angular/core';
import 'rxjs/operators/map';

import { Image } from './../image';
import { ImageService } from './../image.service';

@Component({
    selector: 'gallery-list',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

    filesToUpload: Array<File> = [];

    images: Image[] = [];
    
    loader = 'Загрузка ... ';

    constructor(private imageService: ImageService) {}

    public ngOnInit() {
        this.imageService
            .getImage()
            .finally(() => this.loader = 'Загрузка завершена')
            .subscribe((res) => { this.images = res})
    };

    onUpload() {
        const formData = new FormData();
        const files: Array<File> = this.filesToUpload;
        formData.append('uploads[]', files[0]);

        this.imageService
            .uploadFile(formData)
            .subscribe(files => {
                console.log('subscribe ', files)
            })
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log('to upload', this.filesToUpload);
    }

    //-- Insert into db
    fileCangeEventDb(flie: any) {
        this.filesToUpload = <Array<File>>flie.target.files;
        console.log('to insert', this.filesToUpload);
    }

    onInsertDb() {
        const payload = new FormData();
        const file: Array<File> = this.filesToUpload;
        payload.append('image', file[0]);
        this.imageService
            .insertImage(payload)
            .subscribe(() => { this.ngOnInit() })
    }


};