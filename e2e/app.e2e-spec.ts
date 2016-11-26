import { ColDeJauPage } from './app.po';

describe('col-de-jau App', function() {
  let page: ColDeJauPage;

  beforeEach(() => {
    page = new ColDeJauPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
