# Test Cases — Booking Flow (EventHub)

**Feature:** Booking an event and cancelling a booking

---

**Test name:** Booking an event decrements the seat count
**Description:** Verifies that booking an event reduces its available seat count by exactly 1.
**Steps:**
1. Log in and land on `/`
2. Note the seat count shown for an event
3. Click **Book Now** on the "Dilli Diwali Mela" event
4. Fill in the customer's name, email and phone
5. Click **Confirm Booking**
6. Click **Browse More Events** and check the seat count for the same event
**Expected:** The event's seat count is exactly 1 less than before the booking.
**Automated:** Yes — `booking an event decrements the seat count by 1, and cancelling it restores it`

---

**Test name:** Cancelling a booking restores the seat count
**Description:** Verifies that cancelling a booking removes it from "My Bookings" and restores the seat it had taken.
**Steps:**
1. After booking an event (see above), go to **My Bookings**
2. Note the number of bookings listed
3. Click **Cancel Booking** on the booking just created
4. Confirm by clicking **Yes, Cancel it**
**Expected:** The booking list shrinks by exactly 1.
**Automated:** Yes — `booking an event decrements the seat count by 1, and cancelling it restores it`
