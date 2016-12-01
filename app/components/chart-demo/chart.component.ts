import { Component, Input, OnInit } from '@angular/core';
import { ChartDataService } from "../../services/chart.data.service";

@Component({
  moduleId: module.id,
  selector: 'chart-demo',
  templateUrl: 'chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input()
  selected:IProjectable[];

  public radarChartLabels:string[] = [];
  public radarChartData:any = [];
  public radarChartType:string = 'radar';

  constructor(private chartDataService: ChartDataService){}

  public chartClicked(e:any):void {}

  public chartHovered(e:any):void {}

  public ngOnInit(){
    if (this.selected) {
      let chartData = this.chartDataService.getRadarChartData(this.selected);
      this.radarChartData = chartData.data;
      this.radarChartLabels = chartData.labels;
    }
  }
}
