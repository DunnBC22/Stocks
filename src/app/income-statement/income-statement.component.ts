/*=============================================
=             Income Statement                =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Income Statement 
      component. It is displayed in the accordion 
      on the Google page under the "Latest Annual 
      Financial Statements" tab. It retrieves data 
      from https://financialmodelingprep.com/
      and uses the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-income-statement",
  templateUrl: "./income-statement.component.html",
  styleUrls: ["./income-statement.component.sass"]
})
export class IncomeStatementComponent implements OnInit {
  IncomeStatement;
  error: any;

  constructor(private IncomeStatementService: ApiService) {}

  showIncomeStatement = this.IncomeStatementService.getIncomeStatement().subscribe(
    data => {
      (this.IncomeStatement = data["financials"]),
        error => {
          return (this.error = error);
        };
    }
  );

  ngOnInit() {
    this.showIncomeStatement;
  }
}
