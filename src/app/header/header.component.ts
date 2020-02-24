/*=============================================
=                   Header                    =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the header component.
*/

import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="side-by-side" id="header">
      <img src="{{ bdIcon }}" alt="BD Logo" />
    </div>
    <div class="side-by-side" id="site-title">
      <h1>Stocks</h1>
    </div>
  `,
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent {
  bdIcon: string = "./assets/bd-icon.png";
  title: string = "Stocks";

  constructor() {}
}
