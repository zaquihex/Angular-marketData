import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FinnhubService {

  constructor(private http: HttpClient) { }

  getQuery(endpoint: string, query?: string) {
    const token = 'br9kltvrh5rbhn692180';
    const url = `https://finnhub.io/api/v1/${endpoint}?token=${token}${query || ''}&from=2020-01-01`;

    return this.http.get(url);
  }

  getCompanyNews(company: string) {
    return this.getQuery('company-news', `&symbol=${company}`);
  }

  getCompanyRecommendation(company: string) {
    return this.getQuery('stock/recommendation',`&symbol=${company}`);
  }
}
