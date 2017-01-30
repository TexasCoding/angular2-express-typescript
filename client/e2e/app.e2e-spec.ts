import { Ang2ExpressPage } from './app.po';

describe('ang2-express App', function() {
  let page: Ang2ExpressPage;

  beforeEach(() => {
    page = new Ang2ExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
