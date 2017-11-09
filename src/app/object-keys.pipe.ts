import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keys'})
export class GetKeysPipe implements PipeTransform {
  transform(value, type:string) : any {
    if(type === "object"){
      return Object.keys(value);
    }
    if(type === "array"){
      return Object.keys(value[0]);
    }else{
      throw Error("Key Pipe: you need to specify array or object");
    }
  }
}