import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketstackService {

  private julioProp = 'Julio';
  private zaquielProp = 'Zaquiel';

  setNamePropValue: Subject<string> = new Subject<string>();

  getJulioProp() {
    return this.julioProp;
  }

  setJulioProp(newJulio: string) {
    this.setNamePropValue.next(newJulio);
  }

  apiKey: string = "28b87715045c41b3dcec19356a370d2c";
  url: string = `http://api.marketstack.com/v1/eod?access_key=${this.apiKey}&symbols=`;

  constructor(private http: HttpClient) {
    this.setNamePropValue.subscribe((newJulio) => {
      this.julioProp = newJulio;
      this.zaquielProp = newJulio;
    });
  }

  getCompanyStock(idCompany: string) {
    return this.http.get(this.url + idCompany);
  }
}
