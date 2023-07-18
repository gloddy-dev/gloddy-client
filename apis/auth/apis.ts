import publicApi from '../config/publicApi';

const TEST_ID = {
  email: 'testy54@soongsil.ac.kr',
  password: 'qwqw5533',
};

export const getExample = () => {};

export const login = async () => {
  const data = await publicApi.post(`/api/v1/auth/login`, TEST_ID);
  return data;
};
