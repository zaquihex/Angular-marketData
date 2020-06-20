import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FinnhubService = class FinnhubService {
    constructor(http) {
        this.http = http;
    }
    getQuery(endpoint, query) {
        const token = 'br9kltvrh5rbhn692180';
        const url = `https://finnhub.io/api/v1/${endpoint}?token=${token}${query || ''}&from=2020-01-01`;
        return this.http.get(url);
    }
    getCompanyNews(company) {
        return this.getQuery('company-news', `&symbol=${company}`);
    }
    getCompanyRecommendation(company) {
        return this.getQuery('stock/recommendation', `&symbol=${company}`);
    }
};
FinnhubService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FinnhubService);
export { FinnhubService };
//# sourceMappingURL=finnhub.service.js.map