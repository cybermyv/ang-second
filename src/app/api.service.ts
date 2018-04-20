import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { User } from "./user";
import { Image } from "./image";

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  public getUsers(): Observable<User[]> {
    return this.http
      .get(API_URL + "/users")
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getUsersByID(id): Observable<User> {
    return this.http
      .get(API_URL + "/users/"+id)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public createUser(user: User): Observable<User> {
    return this.http
      .post(API_URL + "/users", user)
      .map(response => {
        return new User(user);
      })
      .catch(this.handleError);
  }

  public deleteUser(userId: number): Observable<null> {
    return this.http
      .delete(API_URL + "/users/" + userId)
      .map(response => null)
      .catch(this.handleError);
  }

  public updateUser(user: User): Observable<User> {
    return this.http
      .put(API_URL + "/users", user)
      .map(response => null)
      .catch(this.handleError);
  }

  //--- gallery

  public getImages(): Observable<Image[]> {
    return this.http
      .get(API_URL + "/gallery")
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public uploadFile(data: FormData): Observable<FormData> {
    return this.http
      .post(API_URL + "/upload", data)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public insertImage(data: FormData): Observable<FormData> {
    return this.http
      .post(API_URL + "/insert", data)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
