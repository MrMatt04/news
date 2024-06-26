import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Newsitem } from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any?type=single';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.apiUrl);
  }
}
