import { PublicFetch } from './publicFetch';

import type { CookieKeyType } from '@/types';

class PrivateFetch extends PublicFetch {
  tokens: Partial<CookieKeyType>;
  constructor(tokens: Partial<CookieKeyType>) {
    super();
    this.tokens = tokens;
  }
  async common<T>(route: string, requestInit?: RequestInit): Promise<{ data: T }> {
    const { accessToken } = this.tokens;

    return super.common<T>(route, {
      ...(requestInit ?? {}),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(requestInit?.headers ?? {}),
      },
    });
  }
  async get<T>(route: string, requestInit?: RequestInit) {
    return this.common<T>(route, {
      method: 'GET',
      ...(requestInit ?? {}),
    });
  }
  async post<T>(route: string, requestInit?: RequestInit) {
    return this.common<T>(route, {
      method: 'POST',
      ...(requestInit ?? {}),
    });
  }
  async put<T>(route: string, requestInit?: RequestInit) {
    return this.common<T>(route, {
      method: 'PUT',
      ...(requestInit ?? {}),
    });
  }
  async delete<T>(route: string, requestInit?: RequestInit) {
    return this.common<T>(route, {
      method: 'DELETE',
      ...(requestInit ?? {}),
    });
  }
}

export { PrivateFetch };
