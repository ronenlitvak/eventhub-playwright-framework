import { test, expect } from '../fixtures';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('logs in successfully with valid credentials', async ({ page, loginPage, credentials }) => {
    await loginPage.login(credentials.email, credentials.password);

    await expect(
      page.locator('h1').filter({ hasText: 'Discover & Book' })
    ).toBeVisible();
  });

  test('shows an error toast for a wrong email', async ({ loginPage, credentials }) => {
    const wrongEmail = credentials.email.slice(0, -1); // drops the last char, still a valid shape

    await loginPage.login(wrongEmail, credentials.password);

    await expect(loginPage.errorMessage('Invalid email or password')).toBeVisible();
  });

  test('shows a validation error for a malformed email', async ({ loginPage, credentials }) => {
    const malformedEmail = credentials.email.split('@')[0]; // no @ / domain at all

    await loginPage.login(malformedEmail, credentials.password);

    await expect(loginPage.errorMessage('Enter a valid email')).toBeVisible();
  });

  test('shows a validation error for a password shorter than 6 characters', async ({ loginPage, credentials }) => {
    const shortPassword = '123!';

    await loginPage.login(credentials.email, shortPassword);

    await expect(
      loginPage.errorMessage('Password must be at least 6 characters')
    ).toBeVisible();
  });

  test('shows a validation error when the email field is left empty', async ({ loginPage, credentials }) => {
    await loginPage.login('', credentials.password);

    await expect(loginPage.errorMessage('Enter a valid email')).toBeVisible();
  });

  test('shows a validation error when the password field is left empty', async ({ loginPage, credentials }) => {
    await loginPage.login(credentials.email, '');

    await expect(
      loginPage.errorMessage('Password must be at least 6 characters')
    ).toBeVisible();
  });

  test('shows validation errors for both fields when submitted empty', async ({ loginPage }) => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage('Enter a valid email')).toBeVisible();
    await expect(
      loginPage.errorMessage('Password must be at least 6 characters')
    ).toBeVisible();
  });
});
