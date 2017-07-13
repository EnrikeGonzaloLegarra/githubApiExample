import { TestBed, inject } from '@angular/core/testing';

import { IssueSearchesService } from './issue-searches.service';

describe('IssueSearchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueSearchesService]
    });
  });

  it('should be created', inject([IssueSearchesService], (service: IssueSearchesService) => {
    expect(service).toBeTruthy();
  }));
});
