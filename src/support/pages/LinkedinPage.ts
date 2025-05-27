import { Page, expect } from '@playwright/test';
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
}
