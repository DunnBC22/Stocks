/*=============================================
=            Sector Performance               =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Major Indexes 
      component. It retrieves data from
      https://financialmodelingprep.com/ and 
      uses the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

export interface MajorIndexes {
  ticker: string;
  indeName: string;
  price: number;
  changes: number;
}

@Component({
  selector: "app-major-indexes",
  templateUrl: "./major-indexes.component.html",
  styleUrls: ["./major-indexes.component.sass"]
})
export class MajorIndexesComponent implements OnInit {
  majorIndex;
  error: any;

  constructor(private MajorIndexService: ApiService) {}

  displayedColumns: string[] = ["Ticker", "IndexName", "Price", "Changes"];

  showMajorIndexes = this.MajorIndexService.getMajorIndexes().subscribe(
    data => {
      (this.majorIndex = data["majorIndexesList"]),
        error => {
          return (this.error = error);
        };
    }
  );

  ngOnInit() {
    this.showMajorIndexes;
  }
}
