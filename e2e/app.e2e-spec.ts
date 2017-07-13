import { GitHubSearchesPage } from './app.po';

describe('git-hub-searches App', () => {
  let page: GitHubSearchesPage;

  beforeEach(() => {
    page = new GitHubSearchesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
