import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private user:NewsapiserviceService) { }
topHeading:any =[]
  ngOnInit(): void {
    this.user.getHeading().subscribe(result=>{
      console.warn(result);
this.topHeading = result.articles;
    })
  }

}
