import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private sport:NewsapiserviceService) { }

  Sport:any=[];
  ngOnInit(): void {
  this.sport.getsports().subscribe(result=>{
    this.Sport=result.articles;
  })
  }

}
