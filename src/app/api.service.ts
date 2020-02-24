/*=============================================
=                 Api Service                 =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the API Service. It 
      includes the get methods for retrieving 
      data as well as error handling.
*/

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getMajorIndexes() {
    return this.http
      .get(`https://financialmodelingprep.com/api/v3/majors-indexes`)
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getSectorPerformance() {
    return this.http
      .get(`https://financialmodelingprep.com/api/v3/stock/sectors-performance`)
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getStockProfile() {
    return this.http
      .get("https://financialmodelingprep.com/api/v3/company/profile/GOOGL")
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getKeyMetrics() {
    return this.http
      .get("https://financialmodelingprep.com/api/v3/company-key-metrics/GOOGL")
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getCompanyRating() {
    return this.http
      .get("https://financialmodelingprep.com/api/v3/company/rating/GOOGL")
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getDiscCashFlow() {
    return this.http
      .get(
        "https://financialmodelingprep.com/api/v3/company/discounted-cash-flow/GOOGL"
      )
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getBalanceSheet() {
    return this.http
      .get(
        "https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/GOOGL"
      )
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getIncomeStatement() {
    return this.http
      .get(
        "https://financialmodelingprep.com/api/v3/financials/income-statement/GOOGL"
      )
      .pipe(retry(3), catchError(this.errorHandling));
  }

  public getCashFlowStatement() {
    return this.http
      .get(
        "https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/GOOGL"
      )
      .pipe(retry(3), catchError(this.errorHandling));
  }

  private errorHandling(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client-side error
      console.error("an error has occurred: ", error.error.message);
    } else {
      //server-side returned an error code
      console.error(
        "Server-side return the following code: ${error.status}, with the description of ${error.error}"
      );
    }
    //user-facing error message
    return throwError("Something went wrong. Please try again later.");
  }
}
