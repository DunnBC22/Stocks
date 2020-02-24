import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "range"
})
export class RangePipe implements PipeTransform {
  range: string;
  dollarsign: string;
  output: string;

  transform(value: string): any {
    this.range = value;
    this.dollarsign = "$";

    return this.dollarsign.concat(this.range.replace("-", "-$"));
  }
}
