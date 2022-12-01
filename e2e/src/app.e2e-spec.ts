import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe estar en blanco ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  it('Deberia mostrar un mensaje de bienvenida', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Bienvenido');
  });

});
