# EventHub Playwright Framework

Playwright + TypeScript test suite for EventHub (https://eventhub.rahulshettyacademy.com) - an event booking app. Covers login, the home page, booking a ticket, and the auth API.

![Playwright Tests](https://github.com/ronenlitvak/eventhub-playwright-framework/actions/workflows/playwright.yml/badge.svg)

## Structure

- `pages/` - page objects (LoginPage, HomePage, BookEventPage)
- `fixtures/` - custom fixtures: credentials, an already-logged-in page, and the page objects
- `api/` - AuthApi, used both by the API tests and to log in fast for UI tests (skips the login form and just seeds the JWT into localStorage)
- `tests/` - the specs
- `docs/test-cases/` - test cases written out in plain language

## Setup

```bash
npm install
npx playwright install
cp .env.example .env
```

Fill in `.env`:

```
EVENTHUB_EMAIL=
EVENTHUB_PASSWORD=
TEST_CUSTOMER_NAME=
TEST_CUSTOMER_PHONE=
```

(`.env` is gitignored, don't commit real credentials)

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
