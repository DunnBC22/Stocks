/*=============================================
=                 App Routing                 =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the App Routing module.
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { GoogleComponent } from "./google/google.component";
import { MajorIndexesComponent } from "./major-indexes/major-indexes.component";
import { SectorPerformanceComponent } from "./sector-performance/sector-performance.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "about-me",
    component: AboutMeComponent
  },
  {
    path: "google",
    component: GoogleComponent
  },
  {
    path: "major-indexes",
    component: MajorIndexesComponent
  },
  {
    path: "sector-performance",
    component: SectorPerformanceComponent
  },
  {
    path: "",
    redirectTo: "/about-me",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
