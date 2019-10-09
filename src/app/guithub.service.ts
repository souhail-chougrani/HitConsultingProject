import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './Models/GithubUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuithubService {
  constructor(private http: HttpClient) {}

  search(userSearched = ''): Observable<Result> {
    return this.http.get<Result>(
      '//api.github.com/search/users?per_page=10&page=1&q=' + userSearched
    );
  }
}
