import privateApi from '../config/privateApi';
import publicApi from '../config/publicApi';

import type { FCMTokenRequest, FilesRequest, FilesResponse } from '.';

export const postFiles = ({ fileList }: FilesRequest) => {
  const formData = new FormData();

  fileList.forEach((file) => {
    formData.append('fileList', file);
  });

  return publicApi.post<FilesResponse>('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const postFCMToken = ({ token }: FCMTokenRequest) => {
  return privateApi.post('/notification/tokens', { token });
};
