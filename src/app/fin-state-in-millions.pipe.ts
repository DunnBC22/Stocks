/*=============================================
=            Fin State In Millions            =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the pipe to convert 
      values to millions of dollars instead of 
      dollars. Also, it converts values that use 
      exponents (E) to regular (non-exponent) 
      values.
*/

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "finStateInMillions"
})
export class FinStateInMillionsPipe implements PipeTransform {
  finStateNumber: any;
  beforeE: any;
  afterE: any;
  eValue: any;

  transform(value: any): any {
    this.finStateNumber = value;
    this.eValue = this.finStateNumber.indexOf("E"); //issue
    this.beforeE = this.finStateNumber.slice(0, this.eValue);
    this.afterE = this.finStateNumber.slice(this.eValue + 1);

    if (this.eValue > 0) {
      //convert the number to an E-less value
      this.finStateNumber = this.beforeE * 10 ** this.afterE;
    }

    //convert it to a decimal based on millions
    this.finStateNumber /= 1000000;

    return this.finStateNumber;
  }
}
