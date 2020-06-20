import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NewsListComponent = class NewsListComponent {
    constructor() {
        this.news = [];
    }
};
__decorate([
    Input()
], NewsListComponent.prototype, "news", void 0);
NewsListComponent = __decorate([
    Component({
        selector: 'app-news-list',
        templateUrl: './news-list.component.html',
        styleUrls: ['./news-list.component.scss']
    })
], NewsListComponent);
export { NewsListComponent };
//# sourceMappingURL=news-list.component.js.map