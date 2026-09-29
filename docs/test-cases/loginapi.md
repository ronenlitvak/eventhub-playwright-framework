# Test Cases — Login API (EventHub)

**Feature:** Authentication API — `POST /auth/login`

---

**Test name:** Successful login with valid credentials
**Description:** Verifies a registered account can log in via the API and receives a usable token.
**Steps:**
1. Send `POST /auth/login` with a valid, registered email and its matching password
**Expected:** Response status is `200`; body has `success: true`, a non-empty `token`, and `user.email` matching the email sent.
**Automated:** Yes — `logs in successfully with valid credentials`

---

**Test name:** Wrong password
**Description:** Verifies the API rejects a registered email with an incorrect password.
**Steps:**
1. Send `POST /auth/login` with a valid, registered email and an incorrect password
**Expected:** Response status is `400`; body has `success: false` and `error: "Invalid email or password"`.
**Automated:** Yes — `rejects a wrong password`

---

**Test name:** Email with no matching account
**Description:** Verifies the API rejects an email that isn't tied to any account.
**Steps:**
1. Send `POST /auth/login` with an email not registered to any account and any password
**Expected:** Response status is `400`; body has `success: false` and `error: "Invalid email or password"`.
**Automated:** Yes — `rejects an email with no matching account`

---

**Test name:** Missing password
**Description:** Verifies the API's validation rejects a request with an empty password field.
**Steps:**
1. Send `POST /auth/login` with a valid email and an empty string for the password
**Expected:** Response status is `400`; body has `success: false`, `error: "Validation failed"`, and a detail for the `password` field: `"Password must be at least 6 characters"`.
**Automated:** Yes — `rejects a request with a missing password`

---

**Test name:** Missing email
**Description:** Verifies the API's validation rejects a request with an empty email field.
**Steps:**
1. Send `POST /auth/login` with an empty string for the email and a valid password
**Expected:** Response status is `400`; body has `success: false`, `error: "Validation failed"`, and a detail for the `email` field: `"A valid email is required"`.
**Automated:** Yes — `rejects a request with a missing email`

---

**Test name:** Malformed email
**Description:** Verifies the API's validation rejects a syntactically invalid email address.
**Steps:**
1. Send `POST /auth/login` with an email that has no `@`/domain (e.g. `not-an-email`) and a valid password
**Expected:** Response status is `400`; body has `error: "Validation failed"` and a detail for the `email` field: `"A valid email is required"`.
**Automated:** Yes — `rejects a malformed email`
