import { AgGridTestPage } from './app.po';

describe('ag-grid-test App', () => {
  let page: AgGridTestPage;

  beforeEach(() => {
    page = new AgGridTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
