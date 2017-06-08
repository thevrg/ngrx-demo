import { NgrxDemoPage } from './app.po';

describe('ngrx-demo App', () => {
  let page: NgrxDemoPage;

  beforeEach(() => {
    page = new NgrxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
