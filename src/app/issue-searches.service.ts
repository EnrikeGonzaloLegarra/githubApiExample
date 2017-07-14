import { Injectable } from '@angular/core';
import {  Component, OnInit,Input,Output } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class IssueSearchesService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  searchIssue(url){

    const resultSearch = url + "/issues"
    return this.http.get(resultSearch)
      .map(res => res.json())
      .catch(this.handleError);
  }


}
