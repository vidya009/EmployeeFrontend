import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private usersUrl: string;
  private userFormUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.userFormUrl = 'http://localhost:8080/addUser';
  }

  public findAll(): Observable<User[]> {
   // console.log("Users ",JSON.stringify(this.http.get<User[]>(this.usersUrl)))
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userFormUrl, user);
  }
}

