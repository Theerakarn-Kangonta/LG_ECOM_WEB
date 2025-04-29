import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getPosts(): Observable<any[]> {
    // Guard: prevent window issues on server
    if (isPlatformBrowser(this.platformId)) {
      console.log('Browser-side fetching...');
    }
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
}