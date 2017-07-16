import { Component, OnInit } from '@angular/core';
import { IssueSearchesService } from '../issue-searches.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers:[IssueSearchesService]
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
