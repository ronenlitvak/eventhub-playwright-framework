# Test Cases — Login (EventHub)

**Feature:** User authentication — Login page (`/login`)

---

**Test name:** Successful login with valid credentials
**Description:** Verifies a user with valid, registered credentials can log in and reach the app.
**Steps:**
1. Navigate to `/login`
2. Enter a valid, registered email
3. Enter the matching password
4. Click **Sign In**
**Expected:** User is redirected away from `/login`; the "Discover & Book" heading is visible.

---

**Test name:** Login with wrong password or unregistered email
**Description:** Verifies the app rejects a well-formed but incorrect email/password combination.
**Steps:**
1. Navigate to `/login`
2. Enter an email not tied to any account
3. Enter any password
4. Click **Sign In**
**Expected:** Error message **"Invalid email or password"** is shown; user stays on `/login`.

---

**Test name:** Malformed email
**Description:** Verifies client-side validation catches an email with no `@`/domain.
**Steps:**
1. Navigate to `/login`
2. Enter a value with no `@` or domain (e.g. `lironen`) in the email field
3. Enter any password
4. Click **Sign In**
**Expected:** Validation message **"Enter a valid email"** is shown; request is not submitted.

---

**Test name:** Password shorter than the minimum length
**Description:** Verifies client-side validation enforces a minimum password length.
**Steps:**
1. Navigate to `/login`
2. Enter a valid email
3. Enter a password under 6 characters (e.g. `123!`)
4. Click **Sign In**
**Expected:** Validation message **"Password must be at least 6 characters"** is shown.

---

**Test name:** Empty email field
**Description:** Verifies the form doesn't submit when the email field is left blank.
**Steps:**
1. Navigate to `/login`
2. Leave the email field empty
3. Enter a valid password
4. Click **Sign In**
**Expected:** Inline validation message **"Enter a valid email"** is shown below the email field; user remains on `/login`.
**Automated:** Yes — `shows a validation error when the email field is left empty`

---

**Test name:** Empty password field
**Description:** Verifies the form doesn't submit when the password field is left blank.
**Steps:**
1. Navigate to `/login`
2. Enter a valid email
3. Leave the password field empty
4. Click **Sign In**
**Expected:** Inline validation message **"Password must be at least 6 characters"** is shown below the password field; user remains on `/login`.
**Automated:** Yes — `shows a validation error when the password field is left empty`

---

**Test name:** Both fields empty
**Description:** Verifies validation is shown for both fields when the form is submitted blank.
**Steps:**
1. Navigate to `/login`
2. Click **Sign In** without entering anything
**Expected:** Both inline messages are shown together — **"Enter a valid email"** and **"Password must be at least 6 characters"**; no request is sent.
**Automated:** Yes — `shows validation errors for both fields when submitted empty`
