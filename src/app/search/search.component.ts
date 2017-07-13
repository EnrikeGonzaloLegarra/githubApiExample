import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IssueSearchesService } from '../issue-searches.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();


  constructor(private IssueSearchesService: IssueSearchesService) {

  }

  ngOnInit() {
  }


  issueSearch(search) {
    var res = search.replace("https://github.com", "https://api.github.com/repos");
    var resultSearch = res + "/issues?page=2&per_page=100"

    this.onInput.emit(resultSearch);

 }
}
