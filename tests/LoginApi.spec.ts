import { test, expect } from '../fixtures';

test.describe('Login API — POST /auth/login', () => {
  test('logs in successfully with valid credentials', async ({ authApi, credentials }) => {
    const { status, body } = await authApi.login(credentials.email, credentials.password);

    console.log('status:', status);
    console.log('body:', body);

    expect(status).toBe(200);
    expect(body.success).toBe(true);
    if (!body.success) throw new Error('unreachable'); // narrows the type for TS below
    expect(typeof body.token).toBe('string');
    expect(body.token.length).toBeGreaterThan(0);
    expect(body.user.email).toBe(credentials.email);
  });

  test('rejects a wrong password', async ({ authApi, credentials }) => {
    const { status, body } = await authApi.login(credentials.email, 'wrongPassword123');

    expect(status).toBe(400);
    expect(body.success).toBe(false);
    expect(body).toMatchObject({ error: 'Invalid email or password' });
  });

  test('rejects an email with no matching account', async ({ authApi }) => {
    const { status, body } = await authApi.login(
      'no-such-user-xyz123@example.com',
      'whatever1'
    );

    expect(status).toBe(400);
    expect(body).toMatchObject({
      success: false,
      error: 'Invalid email or password',
    });
  });

  test('rejects a request with a missing password', async ({ authApi, credentials }) => {
    const { status, body } = await authApi.login(credentials.email, '');

    expect(status).toBe(400);
    expect(body).toMatchObject({
      success: false,
      error: 'Validation failed',
      details: [{ field: 'password', message: 'Password must be at least 6 characters' }],
    });
  });

  test('rejects a request with a missing email', async ({ authApi, credentials }) => {
    const { status, body } = await authApi.login('', credentials.password);

    expect(status).toBe(400);
    expect(body).toMatchObject({
      success: false,
      error: 'Validation failed',
      details: [{ field: 'email', message: 'A valid email is required' }],
    });
  });

  test('rejects a malformed email', async ({ authApi, credentials }) => {
    const { status, body } = await authApi.login('not-an-email', credentials.password);

    expect(status).toBe(400);
    expect(body).toMatchObject({
      error: 'Validation failed',
      details: [{ field: 'email', message: 'A valid email is required' }],
    });
  });
});
