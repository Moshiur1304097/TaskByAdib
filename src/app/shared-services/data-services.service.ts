import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  private _url: string = "http://www.omdbapi.com/?t=flash&apikey=a11804e3";

  private _url2: string = "https://test-schema.herokuapp.com/vegetables";

  constructor(private _http: HttpClient) { }

  getMovieData(): Observable<any> {
    return new Observable(observer => {
      this._http.get(this._url).subscribe(movies => {
        observer.next(movies);
      })
    });
  }

  getVegetablesData(): Observable<any> {
    // return new Observable(observer => {
    //   this._http.get(this._url2)
    //     .subscribe(vegetables => {
    //       observer.next(vegetables);
    //     })
    // });
    return this._http.get(this._url2);
  }

}
