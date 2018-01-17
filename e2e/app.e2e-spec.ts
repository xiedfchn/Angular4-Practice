import { PROJECTTUBBBERPage } from './app.po';

describe('project-tubbber App', () => {
  let page: PROJECTTUBBBERPage;

  beforeEach(() => {
    page = new PROJECTTUBBBERPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
