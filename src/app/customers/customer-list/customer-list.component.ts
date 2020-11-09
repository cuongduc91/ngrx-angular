import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: "LOAD_CUSTOMERS" });
    this.store.subscribe((state)=>{
      this.customers = state.customers.customers;
      console.log(state);
    })
      
    
  }

}
