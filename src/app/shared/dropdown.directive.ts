import { Directive,HostListener,HostBinding,ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 @HostBinding('class.open') isOpen=false;
@HostListener('mouseenter') mouseover(){
  console.log(this.isOpen);
 this.isOpen = !this.isOpen;


}
  constructor() { }

}