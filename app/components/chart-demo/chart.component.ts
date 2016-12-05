import { Component, Input, OnInit } from '@angular/core';
import { ChartDataService } from "../../services/chart.data.service";
import { HeroViewService } from '../../services/hero.view.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'chart-demo',
  templateUrl: 'chart.component.html'
})
export class ChartComponent implements OnInit {
  @Input()
  selected:IProjectable[];

  subscription: Subscription;

  public radarChartLabels:string[] = [];
  public radarChartData:any = [];
  public radarChartType:string = 'radar';

  constructor(private chartDataService: ChartDataService, private heroViewService: HeroViewService){
    /**
     * Here we just listen for an event that declares
     * change in the selection and take the selected array
     * from the bound input variable (just call ngOnInit)
     */
    this.subscription = heroViewService.messageQueue$.subscribe(
      message => {
        if (message == 'heroSelectionChanged'){
          this.ngOnInit();
        }
      }
    );
  }

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
