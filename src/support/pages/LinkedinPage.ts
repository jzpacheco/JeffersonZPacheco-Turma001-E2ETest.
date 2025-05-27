import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import LinkedinElements from '../elements/LinkedinElements';
import BasePage from './BasePage';

export default class LinkedinPage extends BasePage {
  readonly linkedinElements: LinkedinElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.linkedinElements = new LinkedinElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.linkedinElements.getBotaoNovoCadastro().click();
    await this.linkedinElements.getCampoNome().fill(faker.person.firstName());
    await this.linkedinElements.getCampoCpf().fill('33223745050');
    await this.linkedinElements.getCampoEmail().fill('a@b.com.br');
    await this.linkedinElements.getCampoWhatsapp().fill('48 999998888');
    await this.linkedinElements.getCampoCep().fill('88817070');
    await this.linkedinElements.getBotaoBuscarCep().click();
    await this.linkedinElements.getCampoNumero().fill('10');
    await this.linkedinElements.getCampoComplemento().fill(faker.word.words());
    await this.linkedinElements.getCampoMetodoEntrega().click();
    await this.linkedinElements
      .getCampoAnexo()
      .setInputFiles('src/support/fixtures/cnh_testes.jpg');
    await this.linkedinElements.getBotaoCadastrar().click();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.linkedinElements.getBotaoNovoCadastro().click();
    await this.linkedinElements.getCampoNome().fill(faker.person.firstName());
    await this.linkedinElements.getCampoCpf().fill('33223745050');
    await this.linkedinElements.getCampoEmail().fill('a@b.com.br');
    await this.linkedinElements.getCampoWhatsapp().fill('48 999998888');
    await this.linkedinElements.getCampoCep().fill('88817070');
    await this.linkedinElements.getBotaoBuscarCep().click();
    await this.linkedinElements.getCampoNumero().fill('10');
    await this.linkedinElements.getCampoComplemento().fill(faker.word.words());
    await this.linkedinElements.getCampoMetodoEntrega().click();
    await this.linkedinElements.getBotaoCadastrar().click();
  }

  async validarCadastro(): Promise<void> {
    await expect(this.linkedinElements.getMessageOK()).toBeVisible();
  }

  async validarCNH(): Promise<void> {
    await expect(this.linkedinElements.getValidarCNH()).toBeVisible();
  }

  async validarCarrinho(): Promise<void> {
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill('secret_sauce');
    await this.page.locator('[data-test="login-button"]').click();
    await this.page.locator('#shopping_cart_container a').click();
    await this.page.locator('[data-test="checkout"]').click();
  }
}
