import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";

import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { GoogleComponent } from "./google/google.component";
import { MajorIndexesComponent } from "./major-indexes/major-indexes.component";
import { SectorPerformanceComponent } from "./sector-performance/sector-performance.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { StockProfileComponent } from "./stock-profile/stock-profile.component";
import { KeyMetricsComponent } from "./key-metrics/key-metrics.component";
import { CompanyRatingComponent } from "./company-rating/company-rating.component";
import { DiscCashFlowComponent } from "./disc-cash-flow/disc-cash-flow.component";
import { BalanceSheetComponent } from "./balance-sheet/balance-sheet.component";
import { IncomeStatementComponent } from "./income-statement/income-statement.component";

import { RangePipe } from "./range.pipe";
import { FinStateInMillionsPipe } from "./fin-state-in-millions.pipe";

import { ApiService } from "./api.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    GoogleComponent,
    MajorIndexesComponent,
    SectorPerformanceComponent,
    HeaderComponent,
    FooterComponent,
    StockProfileComponent,
    KeyMetricsComponent,
    CompanyRatingComponent,
    DiscCashFlowComponent,
    BalanceSheetComponent,
    IncomeStatementComponent,
    RangePipe,
    FinStateInMillionsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RangePipe, FinStateInMillionsPipe]
})
export class AppModule {}
