import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { ApiService } from './api.service';
import { Image } from './image';

@Injectable()
export class ImageService {

    constructor(private api: ApiService) { }

    getImage(): Observable<Image[]> {
        return this.api.getImages()
    };

    uploadFile(data: FormData):Observable<FormData>{
        return this.api.uploadFile(data)
    }

    // addImage(image: Image): Observable<Image> {
    //     return this.api.createImage(image)
    // }

    // postFile(fileToUpload: File): Observable<boolean> {
    //     return this.api.postFile(fileToUpload);
   
    // }


}