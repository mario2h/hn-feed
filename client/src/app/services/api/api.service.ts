import { Injectable } from '@angular/core';
import { BaseApiService } from "../base-api/base-api.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends BaseApiService {

  type = 'dev';

  url: object = {
    dev: 'http://localhost:3000/api/v1',
    prod: ''
  };

  constructor(public http: HttpClient) {
    super(http);

  }


  getany(data: object): Observable<any> {
    return this.request(data['method'], this.url[this.type]  + data['path'], data['params'] || [], data['hd'] || {});
  }
}
