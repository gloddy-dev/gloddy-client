import { PublicFetch } from './publicFetch';
import { getTokenFromCookie } from '@/utils/auth/tokenController';

class PrivateFetch extends PublicFetch {
  constructor() {
    super();
  }
  async common<T>(route: string, requestInit?: RequestInit): Promise<{ data: T }> {
    const { accessToken } = await getTokenFromCookie();
    return super.common<T>(route, {
      ...(requestInit ?? {}),
      headers: {
        'X-AUTH-TOKEN': accessToken as string,
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
const privateFetch = new PrivateFetch();

export { PrivateFetch, privateFetch };
