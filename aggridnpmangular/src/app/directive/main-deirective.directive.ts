import { Directive,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class MainDeirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
