import { Department } from './department.model';
export class Employee {
    id: number;
    name: string;
    mobile: string;
    address: string;
    gender: string;
    birthdate: Date;
    salary: number;
    department: Department;
  }
