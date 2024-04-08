import { Component, ElementRef,  Input,  OnChanges, SimpleChanges, ViewChild, ɵɵNgOnChangesFeature } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent{
 
  
  
  @Input() value: string='';

  inputValue:string='';
  setDisplay(value:string):void
  {
    
    // this.value1=value;
    // console.log("In set display")
    // console.log(this.value1,"this.setDisplay")
  }

}
