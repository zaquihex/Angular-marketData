import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';
import {MarketstackService} from '../../services/marketstack.service';

interface response {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-graphic-line',
  templateUrl: './graphic-line.component.html',
  styleUrls: ['./graphic-line.component.scss']
})
export class GraphicLineComponent {

  @Input() fullData:any = {};
  @Output() somethingChange: EventEmitter<response> = new EventEmitter<response>();

  constructor(private marketStack: MarketstackService) {

  }

  clickJulio() {
    console.log('click Julio');
    this.marketStack.setJulioProp('zaquiel');
    this.somethingChange.emit({nombre: 'Julio', edad: 28});
  }

  private colorLine1 = '#DB001C';
  private colorLine2 = 'rgba(82, 216, 0)';
  private colorLine3 = 'rgba(223, 220, 0)';
  private colorLine4 = '#93002D';

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
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
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'transparent',
      borderColor: this.colorLine1,
      pointBackgroundColor: this.colorLine1,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: this.colorLine1,
      pointHoverBorderColor: this.colorLine1
    },

    { // green
      backgroundColor: 'transparent',
      borderColor: this.colorLine2,
      pointBackgroundColor: this.colorLine2,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: this.colorLine2,
      pointHoverBorderColor: this.colorLine2
    },
    { // yellow
      backgroundColor: 'transparent',
      borderColor: this.colorLine3,
      pointBackgroundColor: this.colorLine3,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: this.colorLine3,
      pointHoverBorderColor: this.colorLine3
    },
    { // dark red
      backgroundColor: 'transparent',
      borderColor: this.colorLine4,
      pointBackgroundColor: this.colorLine4,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: this.colorLine4,
      pointHoverBorderColor: this.colorLine4
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';




  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public randomize(): void {
    this.chart.update();
  }

  public changeLabel() {
    // this.chart.update();
  }
}
