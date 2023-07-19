import publicApi from '../config/publicApi';

export type LoginResponse = {
  errorCode: string;
  userId: number;
  authority: string;
  token: string;
};

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const login = async () => {
  const data = await publicApi.post('/api/v1/auth/login', TEST_ID);
  return data;
};
