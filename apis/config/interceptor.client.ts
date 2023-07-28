import { postLogin } from '../auth';
import { InternalAxiosRequestConfig } from 'axios';

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    const { token } = await postLogin({
      phoneNumber: '01012345678',
    });

    if (token) {
      config.headers['X-AUTH-TOKEN'] = token.accessToken;
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};
