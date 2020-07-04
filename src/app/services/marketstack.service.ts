import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketstackService {

  apiKey: string = "28b87715045c41b3dcec19356a370d2c";
  url: string = `http://api.marketstack.com/v1/eod?access_key=${this.apiKey}&symbols=`;

  constructor(private http: HttpClient) {}

  getCompanyStock(idCompany: string) {
    return this.http.get(this.url + idCompany);
  }
}
