import { Component, OnInit } from '@angular/core';
import { IssueSearchesService } from '../issue-searches.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [IssueSearchesService]
})
export class ListComponent implements OnInit {

  issues : Object[];
  constructor(private issueSearch: IssueSearchesService) { }

  ngOnInit() {

  }
  searchByInput(issues: string){
    this.issueSearch.searchIssue(issues)
    .subscribe( issues =>{
      this.issues = issues;
      console.log(issues);
    });

  }
}
