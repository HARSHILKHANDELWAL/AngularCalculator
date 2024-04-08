import { Component, EventEmitter, Output } from '@angular/core';
import { CalulatorModel } from 'src/app/calculator/calulator-model';
import { ButtonComponent } from '../button.component';
@Component({
  selector: 'app-operational',
  templateUrl: './operational.component.html',
  styleUrls: ['./operational.component.css']
})
export class OperationalComponent extends ButtonComponent{
  // button=new CalulatorModel();
  OrignalValue:String=''
  buttonArray= this.button.operationalBttnNew;
  @Output() displayValue=new EventEmitter<string>();
  @Output()addButton= new EventEmitter();
  giveValue(button:any){
    console.log("operational component")
    if(button.value=="Addition")
    this.displayValue.emit("+");
    if(button.value=="Subtraction")
    this.displayValue.emit("-");
    if(button.value=="Divide")
    this.displayValue.emit("/");
    if(button.value=="Multiply")
    this.displayValue.emit("x");
    if(button.value=="Result")
    this.displayValue.emit("=");
    // this.displayValue.emit(value);

  
  }
  giveInfo(button:any){
    this.addButton.emit(button)
  }

}
