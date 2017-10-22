import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparator'
})
export class CommaSeparatorPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return value.toLocaleString('en');
  }

}
