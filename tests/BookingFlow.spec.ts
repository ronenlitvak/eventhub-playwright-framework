import { test, expect } from '../fixtures';

test.describe('Booking flow', () => {
  test('booking an event decrements the seat count by 1, and cancelling it restores it', async ({
    authenticatedPage: page,
    bookEventPage,
    customerDetails,
    credentials,
  }) => {
    // Capture the seat count before booking, so we can confirm it drops by exactly 1 after.
    const seatsBeforeText = await page.getByText(/seats available/).first().innerText();
    const seatsBefore = Number(seatsBeforeText.replace(/\D/g, ''));
    console.log(`Seats before booking: ${seatsBefore}`);

    // Book the "Dilli Diwali Mela" event and fill in the customer details.
    await bookEventPage.bookNow('Dilli Diwali Mela');
    await expect(bookEventPage.eventTitle).toContainText('Dilli Diwali Mela');
    await bookEventPage.fillCustomerDetails({
      name: customerDetails.name,
      email: credentials.email,
      phone: customerDetails.phone,
    });
    await bookEventPage.confirmBooking();

    // Verify the seat count decremented by exactly 1 after the booking.
    await page.getByRole('button', { name: 'Browse More Events' }).click();
    const seatsAfterText = await page.getByText(/seats available/).first().innerText();
    const seatsAfter = Number(seatsAfterText.replace(/\D/g, ''));
    console.log(`Seats after booking: ${seatsAfter}`);
    expect(seatsAfter).toBe(seatsBefore - 1);

    // Cancel the booking created by this test. Existing account bookings are unrelated test data.
    await page.getByTestId('nav-bookings').click();
    await expect(page.locator('h1')).toContainText('My Bookings');

    const cancelButtons = page.getByRole('button', { name: 'Cancel Booking' });
    await expect(cancelButtons.first()).toBeVisible();
    const bookingsBeforeCancel = await cancelButtons.count();
    await cancelButtons.first().click();
    await page.getByRole('button', { name: 'Yes, Cancel it' }).click();
    await expect(cancelButtons).toHaveCount(bookingsBeforeCancel - 1);
  });
});
