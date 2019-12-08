
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import { User } from '../interface/users';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface GeResponse {
  Success: string;
  Secret: string;
}
@Injectable()
export class GetUsersService {
  public apiUrl;
  public tmdbAPI;
  constructor(private _http: HttpClient, private http: Http) { 
    this.apiUrl = environment.apiUrl;
    this.tmdbAPI = environment.tmdbAPI;
  }
    getAllUsers(): Observable<User[]> {
        return this.http.get(`${this.apiUrl}/api/read.php`).pipe(
            map((response: Response) => <User[]>response.json()));
    }

    deleteUser (id: number): Observable<{}> {
      const url = `${this.apiUrl}/api/delete.php?id=${id}`;
      return this._http.delete(url);
    }

    insertUsers(Name, userName, Password, Gender, DOB) {
      const url = `${this.apiUrl}/api/create.php`;
      return this._http.post(url, {
        Name,
        userName,
        Password,
        Gender,
        DOB});
    }

    newInsertUsers(formData) {
      const firstName = formData.firstName;
      const lastName = formData.lastName;
      const userName = formData.userName;
      const emailId = formData.emailId;
      const password = formData.password;
      const confirmPassword = formData.confirmPassword;
      const phoneNumber = formData.phoneNumber;

    
      const url = `${this.apiUrl}/api/registeredUser.php`;
      return this._http.put(url, {
        firstName,
        lastName,
        emailId,
        userName,        
        password,
        phoneNumber
       }, { responseType: 'json'});
    }

  //   register(user: User) {
  //     return this.http.post(`${this.apiUrl}/users/register`, user);
  // }
}