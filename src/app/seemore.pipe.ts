import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(overView:string,limit:number): string {
    return overView.split(' ').splice(limit,overView.length).join(' ');
  }

}
