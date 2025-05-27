import { Page, expect, test } from '@playwright/test';
import { ai } from '@zerostep/playwright'
import LinkedinElements from '../elements/LinkedinElements';
import BasePage from './BasePage';
import env from '../../env';

export default class LinkedinPage extends BasePage {
  readonly linkedinElements: LinkedinElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.linkedinElements = new LinkedinElements(page);
  }

  async validarLogin(): Promise<void>{
    console.log(env.LINKEDIN_EMAIL)
    await this.linkedinElements.getBotaoEntrar().click();
    await this.linkedinElements.getCampoUsuario().fill(env.LINKEDIN_EMAIL);
    await this.linkedinElements.getCampoSenha().fill(env.LINKEDIN_PASSWORD);
    await this.linkedinElements.getBotaoEntrarLinkedin().click();

    await expect(this.linkedinElements.getBotaoEntrarLinkedin()).toBeEnabled;
  }

  async validarLoginZeroStep(): Promise<void> {
     await this.page.goto('https://zerostep.com/')
     let page = this.page
      // An object with page and test must be passed into every call
      const aiArgs = { page, test }
      const headerText = await ai('Get the header text', aiArgs)
      await page.goto('https://google.com/')
      await ai(`Type "${headerText}" in the search box`, aiArgs)
      await ai('Press enter', aiArgs)
    }
}
