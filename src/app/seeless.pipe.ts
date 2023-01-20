import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeless'
})
export class SeelessPipe implements PipeTransform {

  transform(overView:string,limit:number): string {
    return overView.split(' ').slice(0,limit).join(' ');
  }

}
