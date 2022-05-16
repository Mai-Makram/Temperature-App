import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {

  transform(value: number, unit:string){
    if(value){
      if(unit==='c'){
        var temp = (value - 32)/ 1.8
        return temp
      }else if(unit==='f'){
        var temp = (value * 1.8) + 32
        return temp
      }
    }
    return;
  }

}
