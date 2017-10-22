import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLimit'
})
export class CharacterLimitPipe implements PipeTransform {

  transform(value:string, characterCount: number): string {
    if(value.length < characterCount) 
      return value;

    return value.substring(0, characterCount) + '...';
  }

}
