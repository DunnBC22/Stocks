/*=============================================
=            Sector Performance               =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Sector Performance 
      component. It retrieves data from
      https://financialmodelingprep.com/ and uses
       the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

export interface SectorPerformance {
  sector: string;
  changesPercentage: number;
}

@Component({
  selector: "app-sector-performance",
  templateUrl: "./sector-performance.component.html",
  styleUrls: ["./sector-performance.component.sass"]
})
export class SectorPerformanceComponent implements OnInit {
  sectorPerformance;
  error: any;

  constructor(private SectorPerformanceService: ApiService) {}

  displayedColumns: string[] = ["Sector", "Change"];

  showSectorPerformance = this.SectorPerformanceService.getSectorPerformance().subscribe(
    data => {
      (this.sectorPerformance = data["sectorPerformance"]),
        error => (this.error = error);
    }
  );

  ngOnInit() {
    this.showSectorPerformance;
  }
}
