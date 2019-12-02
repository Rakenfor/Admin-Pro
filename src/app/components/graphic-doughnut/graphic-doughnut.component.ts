import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: "app-graphic-doughnut",
  templateUrl: "./graphic-doughnut.component.html",
  styles: []
})
export class GraphicDoughnutComponent implements OnInit {

  @Input() public chartLabels: string[] = [];
  @Input() public chartData: number[] = [];
  @Input() public chartType: string = "";

  constructor() {}

  ngOnInit() {}
}
