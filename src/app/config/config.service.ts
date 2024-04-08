import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

import { CalculatorComponent } from '../calculator/calculator.component';
import { Observable, catchError, tap, throwError } from 'rxjs';
export interface Result {
  type: string,
  value: string,
}
@Injectable({
  providedIn: 'root'
})


export class ConfigService  {
  result: Result | undefined;
  data: any;
  username:any
  password:any
  router: any;

  constructor(private http: HttpClient) { }
  //  cal=new CalculatorComponent();
  @Output() auth=new EventEmitter<string>();
 

  configUrl = "http://localhost:8080/SpringSecurity/login"
  
  //Calculator backend Call
  // configUrl1 = "http://localhost:8080/CalculatorBackend/CalculatorController" 
  
  configUrl1 = "http://localhost:8080/SpringSecurity/CalculatorController"
  // Security 
  
  getConfig(username:any,password:any):Observable<any> {
    this.username=username;
    this.password=password;
    console.log("connection successful")
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  
    return this.http.get(this.configUrl, {headers,responseType: 'text' as 'json'});
  }
  getConfigResult(jsonArray: any):Observable<any> {
    console.log("connection successful")
    console.log(jsonArray)
    console.log(this.username,this.password)
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    });
 
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.post<any>("http://localhost:8080/SpringSecurity/CalculatorController",jsonArray,{ headers: headers,observe: 'response'}) .pipe(
      // catchError(this.handleError)
    );
  }
 

  logout():Observable<any> {
    console.log("connection successful")
    
    console.log(this.username,this.password)
  
    this.clearHeaders();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
 
    return this.http.post<any>("http://localhost:8080/SpringSecurity/user/logout",{headers:headers})
  
  }
  clearHeaders() {
    this.username="";
    this.password="";

    console.log("headers cleared after log out")
  }
  // postConfig(httpOptions:any):Observable<any> {
  //   console.log("connection successful")
  //   console.log(httpOptions,"htpp")
  //   // console.log(jsonArray)
  //   // const req = this.http.post(this.configUrl, jsonArray).subscribe((response) => {

  //   //   this.data = response;
  //   //   this.handleResponse(response);
  //   // })
  


  //   return this.http.post(this.configUrl, httpOptions);
  // }

  // getConfig(jsonArray: any):Observable<any> {
  //   console.log("connection successful")
  //   console.log(jsonArray)
   
  //   return this.http.get(this.configUrl, jsonArray,);
  // }






  handleResponse(response: Object) {
    // throw new Error('Method not implemented.');
    this.data = response
    
    JSON.stringify(this.data)
    console.log(this.data)
    // return this.data;
   
  }
call(){
  return this.data;
}
 
}
