import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  maLimite: number;
  transform(value: string, limit?: number): any {
    
    if(!value)
    {
     return null;
    }
    //return value.substr(0,30) + '...';
    this.maLimite = limit ? limit : 30;
    return value.substr(0,this.maLimite) + '...'; 
  }

}
