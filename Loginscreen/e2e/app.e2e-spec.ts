import { WebappsPage } from './app.po';

describe('webapps App', () => {
  let page: WebappsPage;

  beforeEach(() => {
    page = new WebappsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
