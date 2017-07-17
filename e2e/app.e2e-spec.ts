import { MyAngularFirstAppPage } from './app.po';

describe('my-angular-first-app App', () => {
  let page: MyAngularFirstAppPage;

  beforeEach(() => {
    page = new MyAngularFirstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
