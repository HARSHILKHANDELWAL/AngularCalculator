import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfigService } from '../config/config.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any;
  constructor(private configService: ConfigService, private activeroute: ActivatedRoute,private formbuilder: FormBuilder, private router: Router) { }
  myForm = this.formbuilder.group({
    UserName: new FormControl('', Validators.required),

    Password: new FormControl('', Validators.required)
  });


  



  onSubmit() {
    const ans = JSON.stringify(this.myForm.value)
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa(this.myForm.value.UserName + ":" + this.myForm.value.Password);
    headers.append("Authorization", "Basic " + base64Credential);

    // let options = new RequestOptions();
    const options = ({
      headers: headers
    });
    options.headers = headers;

    // this.configService.getConfig(ans).subscribe((response) => { this.data = response 
    // this.configService.postConfig(options).subscribe((response) => { this.data = response 
    this.configService.getConfig(this.myForm.value.UserName, this.myForm.value.Password).subscribe((response) => {
      this.data = response
      this.router.navigate(["/calculator"])

      console.log(this.data, "ccccc")
    });

    // You can add code here to submit the form data to a server or do something else with it
  }
}
