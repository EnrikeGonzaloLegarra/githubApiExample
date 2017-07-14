import { async,TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { IssueSearchesService } from './issue-searches.service';

describe('IssueSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ IssueSearchesService ]
    });
  });

  it('should be created', inject([IssueSearchesService], (service: IssueSearchesService) => {
    expect(service).toBeTruthy();
  }));
  it('should get a JSON', async(() => {
    const service: IssueSearchesService = TestBed.get(IssueSearchesService);
    const url ="https://github.com/react-toolbox/react-toolbox"
    service.searchIssue(url)
      expect(typeof(service.searchIssue(url))).toBe("object");
  })
  )
});
