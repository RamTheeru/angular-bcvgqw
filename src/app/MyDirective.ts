import {Directive,ElementRef,OnInit,Renderer2,HostListener,Input}from  '@angular/core';
@Directive({
  selector:'[applystyle]'
})
export class applyMyStyle implements OnInit
{
  @Input() Dcolor :string ='';
  @Input() Acolor : string ='';
  constructor(private element:ElementRef,private renders : Renderer2)
  {
    console.log(element);
    
  }
  ngOnInit(){
     this.renders.setStyle(this.element.nativeElement,'background-color',this.Acolor);
     this.renders.setAttribute(this.element.nativeElement,'align','center');
     this.renders.setStyle(this.element.nativeElement,'color','white')
    console.log(this.element);
   // this.element.nativeElement.style.backgroundColor = 'grey';
  }
 @HostListener('mouseenter') mouseover()
 {
    this.renders.setStyle(this.element.nativeElement,'background-color',this.Dcolor);
   this.renders.setStyle(this.element.nativeElement,'font-family','verdana');
this.renders.setStyle(this.element.nativeElement,'font-size','50px');
 }

 
}