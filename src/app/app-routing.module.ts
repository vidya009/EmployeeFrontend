import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: 'users', component: UserComponent },
{ path: 'adduser', component: UserFormComponent },
{ path: 'getEmployees', component: EmployeeComponent },
{ path: 'employee', component: EmployeeFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
