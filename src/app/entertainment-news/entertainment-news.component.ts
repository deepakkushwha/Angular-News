import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'
@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private entertainment:NewsapiserviceService) { }

  Entertainment:any=[];
  ngOnInit(): void {
    this.entertainment.getentertainment().subscribe(result=>{
      this.Entertainment=result.articles;
    })
  }

}
