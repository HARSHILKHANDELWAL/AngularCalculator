import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorMVC';

  @Input() value:any
  giveIn(value:string)
  {
    console.log(value)
     value=value;
  }
}
