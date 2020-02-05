import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  
  public customerDataList = []

  ngOnInit() {

    this.customerDataList = this.customerService.getCustomerData();

  }




}
