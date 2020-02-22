import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataServicesService } from '../shared-services/data-services.service';
import { HttpClient } from '@angular/common/http';
//import {  } from 'protractor';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private _url: string = "http://www.omdbapi.com/?t=flash&apikey=a11804e3";
  private movieData;
  
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor(
    private _dataService: DataServicesService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.getDataFromService();

  }

  // getData() {
  //   this._http.get(this._url).subscribe(movies => {
  //     debugger;
  //     console.log(movies);
  //   });
  // }

  getDataFromService() {
    // debugger; 
    this._dataService.getMovieData().subscribe(movie => {
      this.movieData = movie;
    })
  }

  onSubmit()
   {
    console.log("Button clicked!");
    this.childEvent.emit("Hey Moshiur!!!")
    // console.log(this.childEvent.emit);
  }


}
