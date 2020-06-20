import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent{

  
  labelWideHideSection = 'wide';
  classSection = "listNews sectionLimited"

  public changeWideHideSection() {
    if(this.labelWideHideSection === 'wide') {
      this.labelWideHideSection = 'hide';
      this.classSection= 'listNews'
    } else {
      this.labelWideHideSection = 'wide';
      this.classSection= 'listNews sectionLimited'
    }
  }

  constructor() { }

  @Input() news: object[] = [];

}
