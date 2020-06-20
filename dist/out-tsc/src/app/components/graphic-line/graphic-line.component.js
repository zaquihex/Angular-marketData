import { __decorate } from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
let GraphicLineComponent = class GraphicLineComponent {
    constructor() {
        this.fullData = {};
        this.colorLine1 = '#DB001C';
        this.colorLine2 = 'rgba(82, 216, 0)';
        this.colorLine3 = 'rgba(223, 220, 0)';
        this.colorLine4 = '#93002D';
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{}],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                    },
                    {
                        id: 'y-axis-1',
                        position: 'right',
                        gridLines: {
                            color: 'rgba(255,0,0,0.3)',
                        },
                        ticks: {
                            fontColor: 'red',
                        }
                    }
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                backgroundColor: 'transparent',
                borderColor: this.colorLine1,
                pointBackgroundColor: this.colorLine1,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: this.colorLine1,
                pointHoverBorderColor: this.colorLine1
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.colorLine2,
                pointBackgroundColor: this.colorLine2,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: this.colorLine2,
                pointHoverBorderColor: this.colorLine2
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.colorLine3,
                pointBackgroundColor: this.colorLine3,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: this.colorLine3,
                pointHoverBorderColor: this.colorLine3
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.colorLine4,
                pointBackgroundColor: this.colorLine4,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: this.colorLine4,
                pointHoverBorderColor: this.colorLine4
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    randomize() {
        this.chart.update();
    }
    changeLabel() {
        // this.chart.update();
    }
};
__decorate([
    Input()
], GraphicLineComponent.prototype, "fullData", void 0);
__decorate([
    ViewChild(BaseChartDirective, { static: true })
], GraphicLineComponent.prototype, "chart", void 0);
GraphicLineComponent = __decorate([
    Component({
        selector: 'app-graphic-line',
        templateUrl: './graphic-line.component.html',
        styleUrls: ['./graphic-line.component.scss']
    })
], GraphicLineComponent);
export { GraphicLineComponent };
//# sourceMappingURL=graphic-line.component.js.map