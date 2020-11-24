import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;

  @HostBinding('class.show')
  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
