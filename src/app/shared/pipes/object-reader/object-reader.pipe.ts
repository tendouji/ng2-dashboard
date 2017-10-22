import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectReader'
})
export class ObjectReaderPipe implements PipeTransform {

  transform(value: any, arg: string) : any {
    //console.log(value);
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys[0][arg];
  }
  
}
