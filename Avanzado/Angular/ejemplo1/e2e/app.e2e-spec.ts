import { Ejemplo1Page } from './app.po';

describe('ejemplo1 App', () => {
  let page: Ejemplo1Page;

  beforeEach(() => {
    page = new Ejemplo1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
