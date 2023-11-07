import publicApi from '../config/publicApi';

import type { FilesRequest, FilesResponse } from '.';

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
