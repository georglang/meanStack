import { CliAngularAppPage } from './app.po';

describe('cli-angular-app App', () => {
  let page: CliAngularAppPage;

  beforeEach(() => {
    page = new CliAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
