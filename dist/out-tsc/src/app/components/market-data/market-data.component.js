import { __decorate } from "tslib";
import { Component } from '@angular/core';
import companies from '../../constants/companies.json';
let MarketDataComponent = class MarketDataComponent {
    constructor(finnhub) {
        this.finnhub = finnhub;
        this.companySelected = 'AAPL';
        //Basic data for the graphic
        this.initializeDataGraphicRecomm = () => ({
            dataGraphic: [
                { data: [], label: 'buy' },
                { data: [], label: 'hold' },
                { data: [], label: 'sell' },
                { data: [], label: 'strongBuy' }
            ], lineX: []
        });
        this.listCompanies = [];
        this.companyNews = [];
        this.companyRecommendations = this.initializeDataGraphicRecomm();
        // Get list of Companies
        this.listCompanies = companies.map(company => ({ symbol: company.symbol, name: company.description }));
        console.log('listCompanies', this.listCompanies);
        // Get news of a specific company
        this.finnhub.getCompanyNews(this.companySelected).subscribe((data) => {
            this.companyNews = data;
        });
        // Get recommendations to buy/sell of a specific company
        this.finnhub.getCompanyRecommendation(this.companySelected).subscribe((data) => {
            const dataGraphic = this.getDataGraphicRecommentdation(data);
            this.companyRecommendations = dataGraphic;
        });
    }
    //Format data for the graphic component
    getDataGraphicRecommentdation(data) {
        const dataGraphic = this.initializeDataGraphicRecomm().dataGraphic;
        const lineX = [];
        data.forEach(dataMonth => {
            //lines Y
            dataGraphic[0].data.push(dataMonth.buy);
            dataGraphic[1].data.push(dataMonth.hold);
            dataGraphic[2].data.push(dataMonth.sell);
            dataGraphic[3].data.push(dataMonth.strongBuy);
            //line X
            lineX.push(this.getMonth(dataMonth.period));
        });
        // Return data ordered by ascendant by date
        return { dataGraphic: dataGraphic.reverse(), lineX: lineX.reverse() };
    }
    //get month with the year. Format should be "yyyy-mm-dd"
    getMonth(date) {
        const dateParsed = date.split('-');
        const year = dateParsed[0];
        const month = dateParsed[1];
        switch (month) {
            case '01': return `January (${year})`;
            case '02': return `February (${year})`;
            case '03': return `March (${year})`;
            case '04': return `April (${year})`;
            case '05': return `May (${year})`;
            case '06': return `June (${year})`;
            case '07': return `July (${year})`;
            case '08': return `August (${year})`;
            case '09': return `September (${year})`;
            case '10': return `October (${year})`;
            case '11': return `November (${year})`;
            case '12': return `December (${year})`;
        }
    }
};
MarketDataComponent = __decorate([
    Component({
        selector: 'app-market-data',
        templateUrl: './market-data.component.html',
        styleUrls: ['./market-data.component.scss']
    })
], MarketDataComponent);
export { MarketDataComponent };
//# sourceMappingURL=market-data.component.js.map