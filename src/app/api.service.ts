import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './user';
import { Image } from './image';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    public getUsers(): Observable<User[]> {
        return this.http
            .get(API_URL + '/users')
            .map((response) => {
                return response.json();
            })
            .catch(this.handleError)
    }

    public createUser(user: User): Observable<User> {
        return this.http
            .post(API_URL + '/users', user)
            .map((response) => { return new User(user) })
            .catch(this.handleError);

    }

    public deleteUser(userId: number): Observable<null> {
        return this.http
            .delete(API_URL + '/users/' + userId)
            .map(response => null)
            .catch(this.handleError);
    }

    public updateUser(user: User): Observable<User> {
        return this.http
            .put(API_URL + '/users', user)
            .map(response => null)
            .catch(this.handleError)
    }

    //--- gallery

    public getImages(): Observable<Image[]> {
        return this.http
            .get(API_URL + '/gallery')
            .map((response) => { return response.json() })
            .catch(this.handleError);
    }

    // public createImage (image: Image): Observable<Image>{
    //     return this.http
    //     .post(API_URL+'/gallery', image)
    //     .map((response)=>{ return new Image(image)})
    //     .catch(this.handleError)
    // }

    // public createImage (image: FormData): Observable<boolean>{
    //     return this.http
    //     .post(API_URL+'/gallery', image)
    //     // .map((response)=>{ return new Image(image)})
    //     .map((response)=>null)
    //     .catch(this.handleError)
    // }

    // public postFile(fileToUpload: File): Observable<boolean> {
    //     const endpoint = API_URL+'/gallery';
    //     const formData: FormData = new FormData();
    //     formData.append('fileKey', fileToUpload, fileToUpload.name);
    //     return this.http
    //       .post(endpoint, formData)
    //       .map(() => { return true; })
    //       .catch((e) => this.handleError(e));
    // }

    public uploadFile(data: FormData): Observable<FormData> {
        return this.http
            .post(API_URL + '/upload', data)
            .map((response) => { return response.json() })
            .catch(this.handleError)
    };

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    };
}