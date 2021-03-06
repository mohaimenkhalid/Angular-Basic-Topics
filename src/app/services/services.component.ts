import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-services',
  template: `
        <h1>Employee Lists</h1>
        <div>
          <ul *ngFor="let employee of employees">
            <li>{{ employee.name }}</li>
          </ul>
          {{ errorMessage }}
        </div>
  `,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public employees:any = [];
  public errorMessage:any;
  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
      error => this.errorMessage = error
      )
  }

}
