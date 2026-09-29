import { APIRequestContext } from '@playwright/test';

export const API_BASE_URL = 'https://api.eventhub.rahulshettyacademy.com/api';

/** The localStorage key the app reads its JWT from. */
export const AUTH_TOKEN_STORAGE_KEY = 'eventhub_token';

export interface LoginSuccessBody {
  success: true;
  token: string;
  user: { id: number; email: string };
}

export interface LoginFailureBody {
  success: false;
  error: string;
  details?: { field: string; message: string }[];
}

export type LoginBody = LoginSuccessBody | LoginFailureBody;

export class AuthApi {
  constructor(private readonly request: APIRequestContext) {}

  async login(email: string, password: string) {
    const response = await this.request.post(`${API_BASE_URL}/auth/login`, {
      data: { email, password },
    });

    return { status: response.status(), body: (await response.json()) as LoginBody };
  }

  /** Logs in and returns the bearer token, for tests that need an authenticated request. */
  async getToken(email: string, password: string): Promise<string> {
    const { status, body } = await this.login(email, password);

    if (status !== 200 || !body.success) {
      throw new Error(`Login failed for ${email}: ${JSON.stringify(body)}`);
    }

    return body.token;
  }
}
