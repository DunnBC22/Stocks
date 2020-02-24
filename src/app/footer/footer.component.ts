/*=============================================
=                   Footer                    =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the Footer component.
*/

import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <div id="footer">
      <div class="side-by-side">
        <a href="mailto:'{{ myEmailAddress }}'?subject='{{ emailSubject }}'">
          {{ myEmailAddress }}
        </a>
      </div>
      <div class="side-by-side float-right">
        <a href="tel:{{ myPhoneNumber }}">
          {{ myPhoneNumber }}
        </a>
      </div>
    </div>
  `,
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent {
  emailSubject: string = "Contacting You from Stocks Website";
  myEmailAddress: string = "DunnBC22@gmail.com";
  myPhoneNumber: string = "262-923-0473";

  constructor() {}
}
