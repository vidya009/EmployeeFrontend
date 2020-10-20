import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {

  employee: Employee;
  departments: Department[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  ngOnInit() {
    this.employeeService.getAllDepartment().subscribe(data => {
      this.departments = data;
      
    });
  }

  onSubmit() {
    console.log("hello", JSON.stringify(this.employee));
    this.employeeService.save(this.employee).subscribe(result => this.gotoEmployeeList());

  }

  gotoEmployeeList() {
    this.router.navigate(['/employee']);
  }
}
