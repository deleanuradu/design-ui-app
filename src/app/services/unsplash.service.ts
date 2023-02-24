import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { CLIENT_ID } from "../utils/api_keys";
import { Observable } from "rxjs";
import { UnsplashElementModel } from "../models/unsplash-element.model";

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(public http: HttpClient) { }

  getRandomPhotos(count: number): Observable<UnsplashElementModel[]> {
    const url = 'https://api.unsplash.com/photos/random';
    const params = new HttpParams().set('client_id', CLIENT_ID).append('count', count);
    console.log(params);
    return this.http.get<UnsplashElementModel[]>(url, { params });
  }
}
