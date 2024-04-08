import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CalulatorModel } from './calulator-model';
import { FunctionComponent } from '../button/function/function.component';
import { ConfigService } from '../config/config.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {

  data: any;
  allResult: any[] = [];
  resultNumber: number = 0;
  user: any

  constructor(private configService: ConfigService, private formbuilder: FormBuilder, private router: Router) {
  }

  inputValue: string = '';
  funBtn = new FunctionComponent();
  calModel = new CalulatorModel();
  bttnArray: any = [];
  operationalButtonNew: any


  undo() {
    if (this.allResult.length > 0) {
      this.resultNumber += 1
      this.inputValue = this.allResult[this.allResult.length - this.resultNumber]

    }
  }

  redo() {
    this.resultNumber -= 1
    this.inputValue = this.allResult[this.allResult.length - this.resultNumber]
    console.log(this.allResult)
  }


  buttonArray(button: any) {


    if (button.value != 'AC' && button.Symbol != "=" && button.value != 'DEL')
      this.bttnArray.push({ "type": button.type, "value": button.value })

    console.log(button, "Calculator Controller")
  }
  numClickHandler(value: string) {
    this.inputValue += value;
  }
  functionClickHandler(value: string) {
    if (value == 'AC') {
      this.inputValue = ' '
      this.bttnArray = []
      this.allResult = []
    }
    else {
      this.inputValue = this.inputValue.slice(0, -1);
      this.bttnArray.pop()
      console.log(this.bttnArray, "DEL")

    }
  }
  operationClickHandler(value: string) {

    if (value == '=') {
      // const result1 = this.evaluateExpressionUsingEval(this.inputValue);
      // this.inputValue = result1;
      console.log(this.bttnArray, "finalArray")
      const jsonArray = JSON.stringify(this.bttnArray);
      this.bttnArray = [];

      //without security
      // this.configService.postConfig(jsonArray).subscribe((response) => { this.data = response 
      //   console.log(this.data.value,"85")
      //   this.allResult.push(this.data.value)
      // this.inputValue = this.data.value;

      //   this.bttnArray.push({"type":"NUMBER","value":this.data.value});
      //   // console.log(this.bttnArray)
      // console.log(this.data,"ccccc")
      // });


      //with security
      const ans = this.configService.getConfigResult(jsonArray).subscribe((response) => {
        this.data = response

        console.log(this.data.body.value)
        this.allResult.push(this.data.body.value)
        this.inputValue = this.data.body.value;


        this.bttnArray.push({ "type": "NUMBER", "value": this.data.body.value });

      }, (error) => {

        if (error.status == '403')
          this.inputValue = 'Not allowed'
      if(error.status=='401')
      this.inputValue = 'Please Login'

      });


    }
    else {
      console.log(this.inputValue.slice(-1), " last charcter")
      if (this.inputValue.slice(-1) == value) {
        this.bttnArray.pop()
      } else {
        if (this.inputValue.slice(-1) == 'x' || this.inputValue.slice(-1) == '+' ||
          this.inputValue.slice(-1) == '-' || this.inputValue.slice(-1) == '/'
        ) {
          this.bttnArray.pop()
        }
        else {
          this.inputValue += value;
        }
      }
    }

  }

  logout() {
    this.configService.logout().subscribe(
      (response) => {
        this.data = response
        console.log(this.data)

      }
      , (error) => {
        if (error.status == '401')
          this.router.navigate([""])

      }
    )

  }
}
