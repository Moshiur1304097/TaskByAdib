import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  add(customer:string){
    console.log(customer)
    this.customerService.addData(customer);
  }

}
