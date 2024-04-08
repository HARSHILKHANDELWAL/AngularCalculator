import { AfterViewInit, Component, ElementRef, EventEmitter, Input,  Output,  ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { CalulatorModel } from '../calculator/calulator-model';
@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() value:String = '';
  @Input() id:string=''
  // @Output() buttonEmitter=new EventEmitter<string>();
  @Output() buttonEmitter=new EventEmitter();

  button=new CalulatorModel();
  @Output() buttonInfo=new EventEmitter();
  
  onBtnPress(value:string){
  
    this.buttonEmitter.emit(value);
    this.buttonInfo.emit()
  }
  
  
  

  
  };
  







