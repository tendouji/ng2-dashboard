import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalize'
})
export class DecimalizePipe implements PipeTransform {

  transform(val: number, decimalLength?: number): any {
    let d: number = decimalLength ? decimalLength : 2; // default 2
    return (+( Math.round( +(val+'e'+d) ) + ('e-'+d) )).toFixed(d);
  }

}
