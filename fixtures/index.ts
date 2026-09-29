import { test as base, Page } from '@playwright/test';
import { AuthApi, AUTH_TOKEN_STORAGE_KEY } from '../api/AuthApi';
import { LoginPage } from '../pages/LoginPage';
import { BookEventPage } from '../pages/BookEventPage';
import {HomePage} from '../pages/HomePage';


export interface Credentials {
  email: string;
  password: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} must be set (see .env.example).`);
  }
  return value;
}

type Fixtures = {
  /** Login credentials for the seeded test account, read from EVENTHUB_EMAIL / EVENTHUB_PASSWORD. */
  credentials: Credentials;
  /** Details used to fill booking forms, read from TEST_CUSTOMER_NAME / TEST_CUSTOMER_PHONE. */
  customerDetails: CustomerDetails;
  authApi: AuthApi;
  /** A page already logged in (JWT seeded into localStorage) and navigated to '/'. */
  authenticatedPage: Page;
  loginPage: LoginPage;
  bookEventPage: BookEventPage;
  homePage: HomePage;
};

export const test = base.extend<Fixtures>({
  credentials: async ({}, use) => {
    await use({
      email: requireEnv('EVENTHUB_EMAIL'),
      password: requireEnv('EVENTHUB_PASSWORD'),
    });
  },

  customerDetails: async ({}, use) => {
    await use({
      name: requireEnv('TEST_CUSTOMER_NAME'),
      phone: requireEnv('TEST_CUSTOMER_PHONE'),
    });
  },

  authApi: async ({ request }, use) => {
    await use(new AuthApi(request));
  },

  authenticatedPage: async ({ page, context, authApi, credentials }, use) => {
    const token = await authApi.getToken(credentials.email, credentials.password);

    // Seed the JWT into localStorage before any page script runs, so the app
    // treats the very first navigation as already logged in.
    await context.addInitScript(
      ([key, value]) => window.localStorage.setItem(key, value),
      [AUTH_TOKEN_STORAGE_KEY, token]
    );

    await page.goto('/');
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  bookEventPage: async ({ authenticatedPage }, use) => {
    await use(new BookEventPage(authenticatedPage));
  },
  homePage: async ({ authenticatedPage }, use) => {
    await use(new HomePage(authenticatedPage));
  },
});

export { expect } from '@playwright/test';
