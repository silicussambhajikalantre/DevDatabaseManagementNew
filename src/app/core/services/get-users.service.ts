
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from '@angular/http';
import { IUsers } from '../interface/users';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
export interface GeResponse {
  Success: string;
  Secret: string;
}
@Injectable()
export class GetUsersService {
  public apiUrl;
  constructor(private _http: HttpClient, private http: Http) { 
    this.apiUrl = environment.apiUrl;
  }
    getAllUsers(): Observable<IUsers[]> {
        return this.http.get(`${this.apiUrl}/api/read.php`).pipe(
            map((response: Response) => <IUsers[]>response.json()));
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

    
      // const url = `${this.apiUrl}/api/insert.php`;
      // return this._http.post(url, {
      //   yourName,
      //   yourEmail,
      //   userName,
      //   gender,
      //   password
      //  });
    }

    register(user: IUsers) {
      return this.http.post(`${this.apiUrl}/users/register`, user);
  }
}