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
}
const privateFetch = new PrivateFetch();

export { privateFetch };
