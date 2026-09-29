# Test Cases — Home Page (EventHub)

**Feature:** Authenticated home page (`/`)

---

**Test name:** Nav bar links point to the right destinations
**Description:** Verifies the Home, Events, My Bookings and API Docs links in the nav bar are visible, labeled correctly, and point to the right destination.
**Steps:**
1. Log in and land on `/`
2. Locate the **Home** link in the nav bar
3. Locate the **Events** link in the nav bar
4. Locate the **My Bookings** link in the nav bar
5. Locate the **API Docs** link in the nav bar
**Expected:** Each link is visible with the expected label and `href` (`/`, `/events`, `/bookings`, and the external API docs URL respectively).
**Automated:** Yes — `nav bar links point to the right destinations`

---

**Test name:** Admin dropdown exposes Manage Events and Manage Bookings links
**Description:** Verifies the Admin dropdown in the nav bar opens and links to the admin sections.
**Steps:**
1. Log in and land on `/`
2. Click the **Admin** button in the nav bar
3. Locate **Manage Events** and **Manage Bookings** within the nav bar
**Expected:** Both links are visible and point to `/admin/events` and `/admin/bookings` respectively.
**Automated:** Yes — `admin dropdown exposes Manage Events and Manage Bookings links`

---

**Test name:** Nav bar shows the logged-in user's email
**Description:** Verifies the logged-in account's email is displayed in the nav bar.
**Steps:**
1. Log in and land on `/`
2. Locate the user email element in the nav bar
**Expected:** The element's `title` attribute matches the logged-in account's email.
**Automated:** Yes — `shows the logged-in user's email in the nav bar`

---

**Test name:** Correct number of featured events displayed
**Description:** Verifies the homepage lists exactly 3 featured event cards.
**Steps:**
1. Log in and land on `/`
2. Count the event cards on the page
**Expected:** Exactly 3 event cards are displayed.
**Automated:** Yes — `Check if the correct number of events are displayed`

---

**Test name:** Festival event card details
**Description:** Verifies the "Dilli Diwali Mela" event card shows the correct title, category, price and seat availability.
**Steps:**
1. Log in and land on `/`
2. Locate the event card titled "Dilli Diwali Mela"
**Expected:** Title is "Dilli Diwali Mela", category is "Festival", price is "$300", and seat availability text matches "<N> seats available".
**Automated:** Yes — `Check Festival event details`

---

**Test name:** Concert event card details
**Description:** Verifies the "Hollywood Monsoon Night — Los Angeles" event card shows the correct title, category, price and seat availability.
**Steps:**
1. Log in and land on `/`
2. Locate the event card titled "Hollywood Monsoon Night — Los Angeles"
**Expected:** Title matches, category is "Concert", price is "$2,500", and seat availability text matches "<N> seats available".
**Automated:** Yes — `Check Concert event details`

---

**Test name:** Conference event card details
**Description:** Verifies the "World Tech Summit" event card shows the correct title, category, price and seat availability.
**Steps:**
1. Log in and land on `/`
2. Locate the event card titled "World Tech Summit"
**Expected:** Title matches, category is "Conference", price is "$1,500", and seat availability text matches "<N> seats available".
**Automated:** Yes — `Check Conference event details`

---

**Test name:** "Browse Events" button navigation
**Description:** Verifies the hero section's "Browse Events" button navigates to the events listing.
**Steps:**
1. Log in and land on `/`
2. Click **Browse Events →** in the hero section
**Expected:** User is navigated to `/events`.
**Automated:** Yes — `browse events button navigation`

---

**Test name:** "My Bookings" button navigation
**Description:** Verifies the hero section's "My Bookings" button navigates to the bookings page.
**Steps:**
1. Log in and land on `/`
2. Click **My Bookings** in the hero section
**Expected:** User is navigated to `/bookings`.
**Automated:** Yes — `my bookings button navigation`

---

**Test name:** "Explore All Events" button navigation
**Description:** Verifies the "Explore All Events" call-to-action navigates to the events listing.
**Steps:**
1. Log in and land on `/`
2. Click **Explore All Events**
**Expected:** User is navigated to `/events`.
**Automated:** Yes — `explore all events button navigation`

---

**Test name:** Hero heading shows "Discover & Book"
**Description:** Verifies the main hero heading contains the expected lead-in text.
**Steps:**
1. Log in and land on `/`
2. Locate the hero `<h1>` heading
**Expected:** Heading text contains "Discover & Book".
**Automated:** Yes — `test validation "Discover & Book"`

---

**Test name:** Hero heading shows "Amazing Events"
**Description:** Verifies the highlighted span within the hero heading reads "Amazing Events".
**Steps:**
1. Log in and land on `/`
2. Locate the highlighted span inside the hero `<h1>`
**Expected:** Span text is exactly "Amazing Events".
**Automated:** Yes — `test validation "Amazing Events"`

---

**Test name:** Hero description text is visible
**Description:** Verifies the descriptive paragraph under the hero heading is shown.
**Steps:**
1. Log in and land on `/`
2. Locate the paragraph starting with "From tech conferences to live concerts"
**Expected:** The description text is visible on the page.
**Automated:** Yes — `test validation "Description"`
