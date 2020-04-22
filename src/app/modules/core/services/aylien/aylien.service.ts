import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StoriesModel } from '../../../shared/models/story';

import { environment } from '../../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "X-AYLIEN-NewsAPI-Application-ID": environment.api_id,
    "X-AYLIEN-NewsAPI-Application-Key": environment.api_key,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AylienService {
  private headers: any;

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({
    //   'X-AYLIEN-NewsAPI-Application-ID': environment.api_id,
    //   'X-AYLIEN-NewsAPI-Application-Key': environment.api_key,
    // });
    this.headers = new HttpHeaders()
      .set("X-AYLIEN-NewsAPI-Application-ID",environment.api_id)
      .set("X-AYLIEN-NewsAPI-Application-Key",environment.api_key);
  }

  getAllStories() {
    return this.http.get<StoriesModel>(`${environment.aylien_api}stories`, httpOptions);
  }
}
