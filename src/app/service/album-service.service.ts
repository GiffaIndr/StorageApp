import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../model/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
serviceURL: any ;

  constructor(private http: HttpClient) { 
    this.serviceURL = 'http://localhost:3000/album';
  }
  addDescription(album : Album) : Observable<Album>{
    return this.http.post<Album>(this.serviceURL, album);
  }
  getAlbum() : Observable<Album[]> {
    return this.http.get<Album[]>(this.serviceURL);
  }
  deleteAlbum(album : Album) : Observable<Album>{
    return this.http.delete<Album>(this.serviceURL+'/'+album.id);
  }
  editAlbum(album : Album) : Observable<Album>{
    return this.http.put<Album>( this.serviceURL+'/0'+album.id, album);
  }


}
