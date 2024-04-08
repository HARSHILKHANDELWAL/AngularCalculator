import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService ,Result} from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})



export class ConfigComponent implements OnInit {
data: any;
  // config:User|undefined;
  apidata: any;

  ngOnInit(): void {
    // this.Config()
  }
  constructor(private configService:ConfigService){}


Config() {
  console.log("connection successful")
  // this.configService.postConfig().subscribe();
   
}
}