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

    // addImage(image: Image): Observable<Image> {
    //     return this.api.createImage(image)
    // }

    postFile(fileToUpload: File): Observable<boolean> {
    //    const endpoint = 'your-destination-url';

        const formData: FormData = new FormData();

        formData.append('fileKey', fileToUpload, fileToUpload.name);

        return this.api.createImage(formData);

        // return this.httpClient
        //   .post(endpoint, formData, { headers: yourHeadersConfig })
        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }
}