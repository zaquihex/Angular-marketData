import { Component } from '@angular/core';
import { FinnhubService } from 'src/app/services/finnhub.service';
import { MarketstackService } from 'src/app/services/marketstack.service';
import companies from '../../constants/companies.json';

// Import loading
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.scss']
})
export class MarketDataComponent {

  getInfoCompany() {
    // Get news of a specific company
    this.finnhub.getCompanyNews(this.companySelected).subscribe((data: any) => {
      this.companyNews = data;
    });

    // Get recommendations to buy/sell of a specific company
    this.finnhub.getCompanyRecommendation(this.companySelected).subscribe((data: any) => {
      const dataGraphic = this.getDataGraphicRecommendation(data);
      this.companyRecommendations = dataGraphic;
      //Initialize the graphic selected to the recommendations data
      this.graphicSelected = dataGraphic;
    })

    this.marketStack.getCompanyStock(this.companySelected).subscribe((response: any) => {
      const { data } = response;
      const dataGraphic = this.getDataGraphicStock(data);
      this.companyStock = dataGraphic;
    })
  }

  constructor(private finnhub: FinnhubService, private spinner: NgxSpinnerService, private marketStack: MarketstackService) {

    marketStack.setJulioPropValue.subscribe((data) => {
      debugger;
    });

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    // Get list of Companies
    this.listCompanies = companies.map(company => ({ symbol: company.symbol, name: company.description.length > 0 ? company.description : company.symbol }));
    this.getInfoCompany();

  }

  public companySelected: string = 'AAPL';


  initializeStockCompanyInfo = () => ({
    dataGraphic: [
      { data: [], label: 'open' },
      { data: [], label: 'high' },
      { data: [], label: 'low' },
      { data: [], label: 'close' }
    ], lineX: []
  });


  //Format data for the graphic component
  public getDataGraphicStock(data: any[]) {

    const dataGraphic = this.initializeStockCompanyInfo().dataGraphic;

    const lineX = [];

    data.forEach(dataDay => {
      //lines Y
      dataGraphic[0].data.push(dataDay.adj_open);
      dataGraphic[1].data.push(dataDay.adj_high);
      dataGraphic[2].data.push(dataDay.adj_low);
      dataGraphic[3].data.push(dataDay.adj_close);

      //line X
      lineX.push(dataDay.date.substring(0,10));
    })

    // Return data ordered by ascendant by date
    return { dataGraphic: dataGraphic.reverse(), lineX: lineX.reverse() };
  }

  //Basic data for the graphic
  initializeDataGraphicRecomm = () => ({
    dataGraphic: [
      { data: [], label: 'buy' },
      { data: [], label: 'hold' },
      { data: [], label: 'sell' },
      { data: [], label: 'strongBuy' }
    ], lineX: []
  });

  listCompanies: object[] = [];
  companyNews: object[] = [];
  companyRecommendations: any = this.initializeDataGraphicRecomm();
  companyStock: any = this.initializeStockCompanyInfo();


  graphicSelected = this.companyRecommendations;

  public changeCompany(value: string) {
    this.companySelected = value;
    this.getInfoCompany();
  }


  //Format data for the graphic component
  public getDataGraphicRecommendation(data: any[]) {

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
    })

    // Return data ordered by ascendant by date
    return { dataGraphic: dataGraphic.reverse(), lineX: lineX.reverse() };
  }

  //get month with the year. Format should be "yyyy-mm-dd"
  public getMonth(date: string) {
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

  consoleScreen(info) {
    console.log(info);
  }

  changeGraphic(graphicSelected: string) {
    this.graphicSelected = this[graphicSelected];
    const buttonRecommId: any = document.getElementById('companyRecommendations');
    const buttonStockId: any = document.getElementById('companyStock');
    if(graphicSelected === 'companyRecommendations') {
      buttonRecommId.classList.add('activeSegmentedOption');
      buttonStockId.classList.remove('activeSegmentedOption');
    } else {
      buttonStockId.classList.add('activeSegmentedOption');
      buttonRecommId.classList.remove('activeSegmentedOption');
    }
  }

}
