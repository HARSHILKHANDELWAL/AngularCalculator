import { Component, EventEmitter, Output } from '@angular/core';
import { CalculatorComponent } from 'src/app/calculator/calculator.component';
import { CalulatorModel } from 'src/app/calculator/calulator-model';
import { ButtonComponent } from '../button.component';
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends ButtonComponent {
  @Output() displayValue=new EventEmitter<string>();
  @Output()addButton= new EventEmitter();

  // button=new CalulatorModel();

  buttonArray= this.button.numericalBttns;
  
  
  giveValue(Value:string){
    console.log("number component")

    // ClickHandler();
    this.displayValue.emit(Value);

  } giveInfo(button:any){
    this.addButton.emit(button)
  }
  
}
