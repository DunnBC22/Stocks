/*=============================================
=               Balance Sheet                 =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Balance Sheet 
      component. It is displayed in the accordion 
      on the Google page under the "Latest Annual 
      Financial Statements" tab. It retrieves data
      from https://financialmodelingprep.com/ and 
      uses the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-balance-sheet",
  templateUrl: "./balance-sheet.component.html",
  styleUrls: ["./balance-sheet.component.sass"]
})
export class BalanceSheetComponent implements OnInit {
  BalanceSheet;
  error: any;

  constructor(private BalanceSheetService: ApiService) {}

  showBalanceSheet = this.BalanceSheetService.getBalanceSheet().subscribe(
    data => {
      (this.BalanceSheet = data["financials"]),
        error => {
          return (this.error = error);
        };
    }
  );

  ngOnInit() {
    this.showBalanceSheet;
  }
}
