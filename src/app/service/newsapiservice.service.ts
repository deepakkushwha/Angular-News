import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http:HttpClient) { }
  
   //HeadLine News
  getHeading():Observable<any>{
   let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
    return this.http.get(url);
  }

//Tech News
  getTeach():Observable<any>{
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
    return this.http.get(url);
  }

  //business news
  getbusiness():Observable<any>{
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
    return this.http.get(url);
  }

  //business news
  getsports():Observable<any>{
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
    return this.http.get(url);
  }
  
  //entertainment news
  getentertainment():Observable<any>{
    let url ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";
    return this.http.get(url);
  }
  
}
