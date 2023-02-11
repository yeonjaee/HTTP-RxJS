import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(public http: HttpClient) {}

  getUser(id: string, callback: any) {
    this.http
      .get(`/api/users/${id}`)
      // @ts-ignore
      .pipe(map((res: { json: () => any }) => res.json()))
      .subscribe(callback);
  }

  addUser(user: any, callback: any) {
    this.http
      .post('/api/users', user)
      // @ts-ignore
      .pipe(map((res: { json: () => any }) => res.json()))
      .subscribe(callback);
  }

  modifyUser(user: any, callback: any) {
    this.http
      .put(`/api/users/${user.id}`, user)
      // @ts-ignore
      .pipe(map((res: { json: () => any }) => res.json()))
      .subscribe(callback);
  }

  removeUser(user: any, callback: any) {
    this.http.delete(`/api/users/${user.id}`).subscribe(callback);
  }
}
