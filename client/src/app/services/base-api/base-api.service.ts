import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(public http: HttpClient) { }

  request(method: string, url: string, params, hd): Observable<any> {
    const body: any = (params !== '' ? params : false);
    const pm = new HttpParams();

    Object.keys(body).map((key: any): void => {
      pm.append(key, params[key]);
    });

    const headers = new HttpHeaders(hd);

    const req = new HttpRequest(method, url, pm, {
      reportProgress: true,
      responseType: 'json',
      headers: headers
    });

    return this.http.request(req);
  }

}
