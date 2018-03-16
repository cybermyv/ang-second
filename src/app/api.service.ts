import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './user';

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
            
    }

    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    };
}