import { async,TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { IssueSearchesService } from './issue-searches.service';

describe('IssueSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [IssueSearchesService]
    });
  });

  it('should be created', inject([IssueSearchesService], (service: IssueSearchesService) => {
    expect(service).toBeTruthy();
  }));
  it('should get CARBRON', async(() => {
    const service: IssueSearchesService = TestBed.get(IssueSearchesService);
    const url ="www.api.github.com"
    service.searchIssue(url).subscribe((response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error))
  })
  )
});
