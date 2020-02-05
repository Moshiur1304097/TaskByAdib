import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  data = ['Adib', 'Mehedi'];

  addData(cur:string){
    this.data.push(cur);
  }

  getCustomerData(): Array<string> {
    return this.data;
  }

}
