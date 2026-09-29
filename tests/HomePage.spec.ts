import { test, expect } from '../fixtures';

test.describe('Home page test', () => {
  test('nav bar links point to the right destinations', async ({ homePage }) => {
    //Home Link (Your inspected element)
    const navHome = homePage.navHome;
    await expect(navHome).toBeVisible();
    await expect(navHome).toHaveText('Home');
    await expect(navHome).toHaveAttribute('href', '/');

    // Events Link
    const navEvents = homePage.navEvents;
    await expect(navEvents).toBeVisible();
    await expect(navEvents).toHaveText('Events');
    await expect(navEvents).toHaveAttribute('href', '/events');

    // My Bookings Link
    const navBookings = homePage.navBookings;
    await expect(navBookings).toBeVisible();
    await expect(navBookings).toHaveText('My Bookings');
    await expect(navBookings).toHaveAttribute('href', '/bookings');

    // API Docs / Extra Link (uid=13)
    const navApiDocs = homePage.navApiDocs;
    await expect(navApiDocs).toBeVisible();
    await expect(navApiDocs).toHaveAttribute('href', 'https://api.eventhub.rahulshettyacademy.com/api/docs');
  });

  test('admin dropdown exposes Manage Events and Manage Bookings links', async ({ homePage }) => {

    const adminButton = homePage.adminButton;
    await expect(adminButton).toBeVisible();
    await adminButton.click();


    //  Verify Admin "Manage Events" link
    const manageEventsLink = homePage.manageEventsLink;
    await expect(manageEventsLink).toBeVisible();
    await expect(manageEventsLink).toHaveAttribute('href', '/admin/events');

    //  Verify Admin/ "Manage Bookings" link
    const manageBookingsLink = homePage.manageBookingsLink;
    await expect(manageBookingsLink).toBeVisible();
    await expect(manageBookingsLink).toHaveAttribute('href', '/admin/bookings');
  });

  test('shows the logged-in user\'s email in the nav bar', async ({ homePage, credentials }) => {
    const userEmail = homePage.userEmailDisplay;
    await expect(userEmail).toHaveAttribute('title', credentials.email);
  });

  test('Check if the correct number of events are displayed', async ({ homePage }) => {
    const eventCards = homePage.eventCards;
    await expect(eventCards).toHaveCount(3);

  });

  test('Check Festival event details', async ({ homePage }) => {
    const eventCard = homePage.eventFestivalDetail;
    await expect(eventCard.locator('h3')).toHaveText('Dilli Diwali Mela');
    await expect(eventCard.getByText('Festival')).toBeVisible();
    await expect(eventCard.locator('p.text-indigo-700')).toHaveText('$300');
    const seatsAvailable = homePage.seatsFestivalAvailable;
    await expect(seatsAvailable).toHaveText(/\d+ seats available/);
  });

  test('Check Concert event details', async ({ homePage }) => {
    const eventCard2 = homePage.eventConcertDetail;
    await expect(eventCard2.locator('h3')).toHaveText('Hollywood Monsoon Night — Los Angeles');
    await expect(eventCard2.getByText('Concert')).toBeVisible();
    const price = homePage.eventConcertPrice;
    await expect(price).toHaveText('$2,500');
    const seatsAvailable = homePage.seatsConcertAvailable;
    await expect(seatsAvailable).toHaveText(/\d+ seats available/);

  });

  test('Check Conference event details', async ({ homePage }) => {
    const eventCard3 = homePage.eventConferenceDetail;
    await expect(eventCard3.locator('h3')).toHaveText('World Tech Summit');
    await expect(eventCard3.getByText('Conference')).toBeVisible();
    const price = homePage.eventConferencePrice;
    await expect(price).toHaveText('$1,500');
    const seatsAvailable = homePage.seatsConferenceAvailable;
    await expect(seatsAvailable).toHaveText(/\d+ seats available/);
  });

  test('browse events button navigation', async ({ homePage }) => {
    const browseEventsLink = homePage.browseEventsLink;
    await expect(browseEventsLink).toBeVisible();
    await browseEventsLink.click();
    await expect(homePage.page).toHaveURL(/\/events/);
  });
  test('my bookings button navigation', async ({ homePage }) => {
    const myBookingsLink = homePage.myBookingsLink;
    await expect(myBookingsLink).toBeVisible();
    await myBookingsLink.click();
    await expect(homePage.page).toHaveURL(/\/bookings/);
  });

  test('explore all events button navigation', async ({ homePage }) => {
    const exploreAllEventsLink = homePage.exploreAllEventsLink;
    await expect(exploreAllEventsLink).toBeVisible();
    await exploreAllEventsLink.click();
    await expect(homePage.page).toHaveURL(/\/events/);
  });


  test('test validation "Discover & Book"', async ({ homePage }) => {
    const header = homePage.pageTitle;
    await expect(header).toContainText('Discover & Book');

  });

  test('test validation "Amazing Events"', async ({ homePage }) => {
    const amazingEventsSpan = homePage.amayzingEventTitle;
    await expect(amazingEventsSpan).toHaveText('Amazing Events');
  });

  test('test validation "Description"', async ({ homePage }) => {
    const description = homePage.titleDescription;
    await expect(description).toBeVisible();

});
});