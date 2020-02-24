/*=============================================
=            Discounted Cash Flow             =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Discounted Cash Flow 
      component. It is displayed in the accordion 
      on the Google page. It retrieves data from
      https://financialmodelingprep.com/ and uses
      the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-disc-cash-flow",
  template: `
    <div class="short-list">
      <label>Date: </label>
      <ng-container *ngIf="DiscCF">{{
        DiscCF["date"] | date: "longDate"
      }}</ng-container>
      <br />
      <br />
      <label>Disc. Cash Flow: </label>
      <ng-container *ngIf="DiscCF">{{ DiscCF["dcf"] | currency }}</ng-container>
      <br />
      <label>Stock Price: </label>
      <ng-container *ngIf="DiscCF">{{
        DiscCF["Stock Price"] | currency
      }}</ng-container>
    </div>
  `,
  styleUrls: ["./disc-cash-flow.component.sass"]
})
export class DiscCashFlowComponent implements OnInit {
  DiscCF;
  error: any;

  constructor(private DiscCashFlowService: ApiService) {}

  showDCF = this.DiscCashFlowService.getDiscCashFlow().subscribe(data => {
    (this.DiscCF = data),
      error => {
        return (this.error = error);
      };
  });

  ngOnInit() {
    this.showDCF;
  }
}
