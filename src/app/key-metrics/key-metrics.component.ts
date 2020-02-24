/*=============================================
=            Sector Performance               =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Key Metrics 
      component. It is displayed in the accordion 
      on the Google page. It retrieves data from
      https://financialmodelingprep.com/ and uses
      the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-key-metrics",
  template: `
    <div>
      <ng-container *ngIf="KeyMetric">{{
        KeyMetric[0]["date"] | date: "longDate"
      }}</ng-container>
    </div>
    <br />

    <table>
      <tr>
        <th>
          Values Per Share
        </th>
      </tr>
      <tr>
        <td>Revenue</td>
        <td>
          <ng-container *ngIf="KeyMetric">{{
            KeyMetric[0]["Revenue per Share"]
          }}</ng-container>
        </td>
      </tr>
      <tr>
        <td>Net Income</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Net Income per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Operating Cash Flow</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Operating Cash Flow per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Free Cash Flow</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Free Cash Flow per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Cash</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Cash per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Book Value</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Book Value per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Shareholder Equity</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Shareholders Equity per Share"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Interest Debt</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Interest Debt per Share"]
        }}</ng-container>
      </tr>
    </table>

    <br />
    <table>
      <th>Ratios</th>
      <tr>
        <td>PE</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["PE ratio"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Price to Sales</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Price to Sales Ratio"]
        }}</ng-container>
      </tr>
      <tr>
        <td>POCF</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["POCF ratio"]
        }}</ng-container>
      </tr>
      <tr>
        <td>PFCF</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["PFCF ratio"]
        }}</ng-container>
      </tr>
      <tr>
        <td>EV to Sales</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["EV to Sales"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Ent Value Over EBITDA</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Enterprise Value over EBITDA"]
        }}</ng-container>
      </tr>
      <tr>
        <td>Return on Tangible Assets</td>
        <ng-container *ngIf="KeyMetric">{{
          KeyMetric[0]["Return on Tangible Assets"]
        }}</ng-container>
      </tr>
      <tr>
        <td>ROIC</td>
        <ng-container *ngIf="KeyMetric">{{ KeyMetric[0].ROIC }}</ng-container>
      </tr>
      <tr>
        <td>ROE</td>
        <ng-container *ngIf="KeyMetric">{{ KeyMetric[0].ROE }}</ng-container>
      </tr>
    </table>
  `,
  styleUrls: ["./key-metrics.component.sass"]
})
export class KeyMetricsComponent implements OnInit {
  KeyMetric: any;
  error: any;

  constructor(private KeyMetricsService: ApiService) {}

  showKeyMetrics = this.KeyMetricsService.getKeyMetrics().subscribe(data => {
    this.KeyMetric = data["metrics"];
  });

  ngOnInit() {
    this.showKeyMetrics;
  }
}
