import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private business:NewsapiserviceService) { }

  businessNews:any=[]
  ngOnInit(): void {
    this.business.getbusiness().subscribe(result=>{
console.warn(result);
      this.businessNews = result.articles;
    })
  }

}
