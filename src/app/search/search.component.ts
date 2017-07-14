import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IssueSearchesService } from '../issue-searches.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ IssueSearchesService ]
})
export class SearchComponent implements OnInit {
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();


  constructor(private IssueSearchesService: IssueSearchesService) {

  }

  ngOnInit() {
  }


  issueSearch(search) {
    var res = search.replace("https://github.com", "https://api.github.com/repos");

    this.onInput.emit(res);

 }
}
