import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navHome: Locator;
  readonly navEvents: Locator;
  readonly navBookings: Locator;
  readonly navApiDocs: Locator;
  readonly adminButton: Locator;
  readonly nav: Locator;
  readonly manageEventsLink: Locator;
  readonly manageBookingsLink: Locator;
  readonly userEmailDisplay: Locator;
  readonly eventCards: Locator;
  readonly eventFestivalDetail: Locator;
  readonly seatsFestivalAvailable: Locator;
  readonly eventConcertDetail: Locator;
  readonly eventConcertPrice: Locator;
  readonly seatsConcertAvailable: Locator;
  readonly eventConferenceDetail: Locator;
  readonly eventConferencePrice: Locator;
  readonly seatsConferenceAvailable: Locator;
  readonly browseEventsLink: Locator;
  readonly myBookingsLink: Locator;
  readonly exploreAllEventsLink: Locator;
  readonly pageTitle: Locator;
  readonly amayzingEventTitle: Locator;
  readonly titleDescription: Locator;


  constructor(page: Page) {
    this.page = page;
    this.navHome = page.locator('a#nav-home');
    this.navEvents = page.locator('a#nav-events');
    this.navBookings = page.locator('a#nav-bookings');
    this.adminButton = page.getByRole('button', { name: 'Admin' });
    this.nav = page.getByRole('navigation');
    // Scoped to the nav (like manageEventsLink/manageBookingsLink below), instead of a
    // page-wide search, so a duplicate "API Docs" link elsewhere on the page can't collide.
    this.navApiDocs = this.nav.getByRole('link', { name: 'API Docs' });
    this.manageEventsLink = this.nav.getByRole('link', { name: 'Manage Events' });
    this.manageBookingsLink = this.nav.getByRole('link', { name: 'Manage Bookings' });
    this.userEmailDisplay = page.locator('#user-email-display');
    // Matched by role rather than `#event-card` — that id is (invalidly) reused on all three
    // cards, so relying on it would break the moment the app gives each card a unique id.
    this.eventCards = page.getByRole('article');
    this.eventFestivalDetail = page.getByRole('article').filter({ hasText: 'Dilli Diwali Mela' });
    // Matched by text, not a color class — low-stock events show "X seats left!" in a
    // different color than the normal "X seats available", so a class-based locator
    // only works for one of the two states.
    this.seatsFestivalAvailable = this.eventFestivalDetail.getByText(/\d+ seats?/);
    this.eventConcertDetail = page.getByRole('article').filter({ hasText: 'Hollywood Monsoon Night — Los Angeles' });
    this.eventConcertPrice = this.eventConcertDetail.locator('p.text-indigo-700');
    this.seatsConcertAvailable = this.eventConcertDetail.getByText(/\d+ seats?/);
    this.eventConferenceDetail = page.getByRole('article').filter({ hasText: 'World Tech Summit' });
    this.eventConferencePrice = this.eventConferenceDetail.locator('p.text-indigo-700');
    this.seatsConferenceAvailable = this.eventConferenceDetail.getByText(/\d+ seats?/);
    this.browseEventsLink = page.getByRole('main').getByRole('link', { name: /browse events/i });
    this.myBookingsLink = page.getByRole('main').getByRole('link', { name: /My Bookings/i });
    this.exploreAllEventsLink = page.getByRole('main').getByRole('link', { name: /Explore All Events/i });
    this.pageTitle = page.locator('h1.text-4xl');
    this.amayzingEventTitle = page.locator('h1 .text-indigo-200');
    this.titleDescription = page.getByText('From tech conferences to live concerts');

  }
  // ...
}
