import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  post: any;

  constructor(private http: HttpClient) { }

getAuth(){
  return this.http.get('http://localhost:3000/tasks')
}

getData(){
  return this.http.get('')
}
}
