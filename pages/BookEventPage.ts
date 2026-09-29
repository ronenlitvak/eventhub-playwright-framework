import { Locator, Page } from '@playwright/test';

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

export class BookEventPage {
  readonly page: Page;
  readonly eventTitle: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly confirmBookingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTitle = page.locator('h1');
    this.fullNameInput = page.getByRole('textbox', { name: 'Full Name*' });
    this.emailInput = page.getByTestId('customer-email');
    this.phoneInput = page.getByRole('textbox', { name: 'Phone Number*' });
    this.confirmBookingButton = page.getByRole('button', { name: 'Confirm Booking' });
  }

  /** The event card on the listing page for the given event name. */
  eventCard(eventName: string): Locator {
    return this.page.getByRole('article').filter({ hasText: eventName });
  }

  /** Clicks "Book Now" on the given event's card, opening its booking form. */
  async bookNow(eventName: string) {
    await this.eventCard(eventName).getByTestId('book-now-btn').first().click();
  }

  async fillCustomerDetails({ name, email, phone }: CustomerDetails) {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async confirmBooking() {
    await this.confirmBookingButton.click();
  }
}
