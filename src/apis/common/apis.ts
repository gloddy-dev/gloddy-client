import publicApi from '../config/publicApi';
import { compressImage } from '@/utils/compressImage';

import type { FilesRequest, FilesResponse } from '.';

export const postFiles = async ({ fileList }: FilesRequest) => {
  const formData = new FormData();

  const compressedFileList = await Promise.all(fileList.map((file) => compressImage(file)));

  compressedFileList.forEach((file) => {
    formData.append('fileList', file);
  });

  return publicApi.post<FilesResponse>('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
