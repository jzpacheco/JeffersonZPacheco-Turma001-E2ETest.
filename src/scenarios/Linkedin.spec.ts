import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LinkedinPage from '../support/pages/LinkedinPage';

test.describe('Sauce Demo', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let linkedinPage: LinkedinPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.linkedin')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    linkedinPage = new LinkedinPage(page);
    await page.goto(BASE_URL);
  });

  test('Validação do carrinho', async () => {
    await linkedinPage.validarCarrinho();
  });
});
