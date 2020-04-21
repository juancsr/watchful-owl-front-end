import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StoriesModel } from '../../../shared/models/story';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AylienService {

  constructor(private http: HttpClient) { }

  getAllStories() {
    return this.http.get<StoriesModel>(`${environment.aylien_api}/stories`);
  }
}
