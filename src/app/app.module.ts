import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './display/display.component';
import { NumberComponent } from './button/number/number.component';
import { FunctionComponent } from './button/function/function.component';
import { OperationalComponent } from './button/operational/operational.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigComponent } from './config/config.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CalculatorComponent,
    DisplayComponent,
    NumberComponent,
    FunctionComponent,
    OperationalComponent,
    ConfigComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [   importProvidersFrom(HttpClientModule),],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
