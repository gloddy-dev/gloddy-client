import { PublicFetch } from './publicFetch';

class PrivateFetch extends PublicFetch {
  constructor() {
    super();
  }
  async common<T>(route: string, requestInit?: RequestInit): Promise<T> {
    return super.common<T>(route, {
      ...(requestInit ?? {}),
      headers: {
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

export { privateFetch };
