import { Directive, HostListener, ElementRef, Input  } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  /* constructor() { } */

  constructor(private el: ElementRef) {

  }
 /*  @Input('x') format:any; */
  /* @HostListener('blur') onBlur(){
    let value: string =this.el.nativeElement.value;
    this.el.nativeElement.value =  value.toLowerCase();
  } */
   @Input('format') format:any;
  /* @HostListener('blur') onBlur(){
    let value: string =this.el.nativeElement.value;

    if(this.format == 'lowercase')
    this.el.nativeElement.value =  value.toLowerCase();
    else
    this.el.nativeElement.value =  value.toUpperCase();
  } */
  /* @Input('appInputFormat') format:any; */
  @HostListener('blur') onBlur(){
    let value: string =this.el.nativeElement.value;

    if(this.format == 'lowercase')
    this.el.nativeElement.value =  value.toLowerCase();
    else
    this.el.nativeElement.value =  value.toUpperCase();
  }


}
