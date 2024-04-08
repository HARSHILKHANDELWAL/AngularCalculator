import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';
import { CalulatorModel } from 'src/app/calculator/calulator-model';
import { DisplayComponent } from 'src/app/display/display.component';
import { ButtonComponent } from '../button.component';
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent extends ButtonComponent
{
   @Output() displayValue=new EventEmitter<string>();
   @Output()addButton= new EventEmitter();
  // button=new CalulatorModel();
  buttonArray= this.button.functionBttns;
  display= new DisplayComponent()

  giveValue(value:string){
    console.log("functional component")
    this.displayValue.emit(value);

  }
  giveInfo(button:any){
    this.addButton.emit(button)
  }

}
