import { Department } from './../models/department.model';
import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private employeesUrl: string;
  private employeesFormUrl: string;
  private departmentUrl: string;

  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/getEmployees';
    this.employeesFormUrl = 'http://localhost:8080/employee';
    this.departmentUrl = "http://localhost:8080/getAllDeaprtments";
  }

  public findAll(): Observable<Employee[]> {
    console.log("hello" ,this.http.get<Employee[]>(this.employeesUrl));
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  public getAllDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(this.departmentUrl);
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeesFormUrl, employee);
  }
}

