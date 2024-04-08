import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
    
  }
  ,
    {path: '', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
