/**
 * This class can populate any kind of chart
 */
export class ChartData{

  labels: string[] = [];
  data: any[] = [];

}
/**
 * We are going to create a class per Chart Type
 */
export class RadarChartRow{

  label: string;
  data: number[] = [];

}
