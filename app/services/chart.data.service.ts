import { Injectable } from '@angular/core';
import {RadarChartRow, ChartData} from '../models/chart.data';
import {isNumeric} from "rxjs/util/isNumeric";

@Injectable()
export class ChartDataService{

  public getRadarChartData(rows:IProjectable[]): ChartData {
    let chartData = new ChartData();
    rows.forEach( row => {
      let series = new RadarChartRow();
      /**
       * Get all projectable properties
       */
      row.getVisibleProperties()
        /**
         * Keep those with numeric values
         */
        .filter( key => {
          return isNumeric(row[key]);
        })
        /**
         * Iterate and push values in series data
         * also add the label if not exists
         */
        .forEach( key => {
        if(chartData.labels.indexOf(key) < 0)
            chartData.labels.push(key);
          series.data.push(row[key]);
        });
      /**
       * Add label for the series
       */
      series.label = row.name;
      /**
       * Push the series in the return data
       */
      chartData.data.push(series);
    });
    return chartData;
  }
}
