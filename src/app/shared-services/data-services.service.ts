import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  private _url: string = "http://www.omdbapi.com/?t=flash&apikey=a11804e3"

  constructor(private _http: HttpClient) { }

  getMovieData(): Observable<any> {
    return new Observable(observer => { 
      this._http.get(this._url).subscribe(movies => {
        observer.next(movies);
      })
    });
  }

}
