import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers! : Observable<any>;
  errorMsg! : string;

  constructor(private customerService : CustomerService) {

  }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomer();
    
  }

}
