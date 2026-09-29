# EventHub Playwright Framework

Playwright + TypeScript test suite for EventHub (https://eventhub.rahulshettyacademy.com) - an event booking app. Covers login, the home page, booking a ticket, and the auth API.

![Playwright Tests](https://github.com/ronenlitvak/eventhub-playwright-framework/actions/workflows/playwright.yml/badge.svg)

## Structure

- `pages/` - page objects (LoginPage, HomePage, BookEventPage)
- `fixtures/` - custom fixtures: credentials, an already-logged-in page, and the page objects
- `api/` - AuthApi, used both by the API tests and to log in fast for UI tests (skips the login form and just seeds the JWT into localStorage)
- `tests/` - the specs
- `docs/test-cases/` - test cases written out in plain language

## How to run the project locally

1. Clone the repo and move into it:
   ```bash
   git clone https://github.com/ronenlitvak/eventhub-playwright-framework.git
   cd eventhub-playwright-framework
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install the Playwright browsers (npm install alone doesn't download these):
   ```bash
   npx playwright install
   ```

4. Create your local `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

5. `.env` is gitignored, so it doesn't come down with `git clone` - `.env.example` only has the variable names, no values. Contact me (the project owner lironen@gmail.com) to get the real `EVENTHUB_EMAIL`, `EVENTHUB_PASSWORD`, `TEST_CUSTOMER_NAME` and `TEST_CUSTOMER_PHONE` values, then fill them into your local `.env`:
   ```
   EVENTHUB_EMAIL=
   EVENTHUB_PASSWORD=
   TEST_CUSTOMER_NAME=
   TEST_CUSTOMER_PHONE=
   ```

6. Run the tests:
   ```bash
   npm test
   ```

7. Playwright writes an HTML report after each run. Open the latest one with:
   ```bash
   npm run test:report
   ```

## Running tests

```bash
npm test              # headless
npm run test:headed   # with browser visible
npm run test:report   # open last HTML report
```

One file or one test:

```bash
npx playwright test tests/HomePage.spec.ts
npx playwright test -g "logs in successfully with valid credentials"
```

## CI

GitHub Actions runs the suite on every push/PR to main (`.github/workflows/playwright.yml`), report gets uploaded as an artifact.
