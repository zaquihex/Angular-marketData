import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketDataComponent } from './components/market-data/market-data.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { GraphicLineComponent } from './components/graphic-line/graphic-line.component';
//loading library
import { NgxSpinnerModule } from 'ngx-spinner';


//graphics
import { ChartsModule } from 'ng2-charts';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarketDataComponent,
    NewsListComponent,
    GraphicLineComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ChartsModule,
        FormsModule,
      NgxSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
