import {ClaritySeedAppHome} from './app.po';

fdescribe('clarity-seed app', function () {

  let expectedMsg: string = 'This project will help you find easily projects, to which you can contribute with small effort and huge impact in 3 simple steps';

  let page: ClaritySeedAppHome;

  beforeEach(() => {
    page = new ClaritySeedAppHome();
  });

  it('should display: ' + expectedMsg, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(expectedMsg)
  });
});
