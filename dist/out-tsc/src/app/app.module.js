import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketDataComponent } from './components/market-data/market-data.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { GraphicLineComponent } from './components/graphic-line/graphic-line.component';
//graphics
import { ChartsModule } from 'ng2-charts';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            ChartsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map