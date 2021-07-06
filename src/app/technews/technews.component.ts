import { Component, OnInit } from '@angular/core';
import{NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private news:NewsapiserviceService) { }

  techNews:any =[]
  ngOnInit(): void {
    this.news.getTeach().subscribe(result=>{
this.techNews = result.articles;
    })
  }

}
