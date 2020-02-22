import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../shared-services/data-services.service';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.scss']
})
export class HttpApiComponent implements OnInit {

  private _url2: string = "https://test-schema.herokuapp.com/vegetables";
  private vegetablesData = [];


  constructor(
    private _vegetabledataService: DataServicesService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.getVegetableDataFromService();
  }

  getVegetableDataFromService() {
    debugger;
    this._vegetabledataService.getVegetablesData()
      .subscribe(vegetable => {
        this.vegetablesData = vegetable.data;
      })
  }

}
