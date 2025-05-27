import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LinkedinPage from '../support/pages/LinkedinPage';
import { ai } from '@zerostep/playwright'

test.describe('Linkedin with Zero Step - Demo', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let linkedinPage: LinkedinPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.linkedin')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    linkedinPage = new LinkedinPage(page);
    await page.goto(BASE_URL);
  });

  test('Validação do Login Zero Step', async () => {
    await linkedinPage.validarLoginZeroStep();
  });
});
