/*=============================================
=                  Stock Profile              =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Stock Profile 
      component that it displayed at the top 
      of the Google page. It retrieves data from
      https://financialmodelingprep.com/ and uses 
      the ApiService service.
*/

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

export interface Profile {
  price: number;
  beta: string;
  volAvg: string;
  mktCap: string;
  image: string;
  industry: string;
  website: string;
  exchange: string;
  description: string;
  ceo: string;
  companyName: string;
  sector: string;
  changes: number;
  range: string;
  lastDiv: string;
  changesPercentage: string;
}

@Component({
  selector: "app-stock-profile",
  template: `
    <div class="stock-profile-margin">
      <div class="center">
        <h4>Company Profile</h4>
        <br />
        <ng-container *ngIf="StockProfile">
          <img src="{{ StockProfile.image }}" alt="Google's Image" />
        </ng-container>
      </div>

      <table class="table-side-by-side">
        <tr>
          <td>Company Name:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.companyName }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>CEO:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.ceo }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Sector:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.sector }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Exchange:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.exchange }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Website:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              <a
                href="{{ StockProfile.website }}"
                alt="Link to Google's Website"
              >
                {{ StockProfile.website }}
              </a>
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Industry:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.industry }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Last Dividend:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.lastDiv }}
            </ng-container>
          </td>
        </tr>
      </table>

      <table class="table-side-by-side">
        <tr>
          <td>Price:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.price | currency }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Changes:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.changes | currency }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Change Percent:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.changesPercentage }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Range:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.range | range }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Beta:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.beta }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Volume Average:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.volAvg }}
            </ng-container>
          </td>
        </tr>
        <tr>
          <td>Market Cap:</td>
          <td>
            <ng-container *ngIf="StockProfile">
              {{ StockProfile.mktCap | finStateInMillions }}
            </ng-container>
          </td>
        </tr>
      </table>

      <br />

      <div class="center">
        <ng-container *ngIf="StockProfile">
          {{ StockProfile.description }}
        </ng-container>
      </div>
      <br />
    </div>
  `,
  styleUrls: ["./stock-profile.component.sass"]
})
export class StockProfileComponent implements OnInit {
  StockProfile;
  error: any;

  constructor(private StockProfileService: ApiService) {}

  showStockProfile = this.StockProfileService.getStockProfile().subscribe(
    data => {
      (this.StockProfile = data["profile"]),
        error => {
          return (this.error = error);
        };
    }
  );
  ngOnInit() {
    this.showStockProfile;
  }
}
