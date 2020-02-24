/*=============================================
=               Company Rating                =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Company Rating 
      component. It is displayed in the accordion 
      on the Google page. It retrieves data from
      https://financialmodelingprep.com/ and uses
      the ApiService service.
*/

import { Component } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-company-rating",
  template: `
    <div class="short-list">
      <label>Score: </label>
      <ng-container *ngIf="companyRating">{{
        companyRating.score
      }}</ng-container
      ><br />

      <label>Rating: </label>
      <ng-container *ngIf="companyRating">{{
        companyRating.rating
      }}</ng-container
      ><br />

      <label>Recommendation: </label>
      <ng-container *ngIf="companyRating">{{
        companyRating.recommendation
      }}</ng-container>
    </div>
  `,
  styleUrls: ["./company-rating.component.sass"]
})
export class CompanyRatingComponent {
  companyRating;

  error: any;

  constructor(private CompanyRatingService: ApiService) {}

  showCompanyRating = this.CompanyRatingService.getCompanyRating().subscribe(
    data => {
      (this.companyRating = data["rating"]),
        //console.log(this.companyRating);
        error => {
          return (this.error = error);
        };
    }
  );
}
