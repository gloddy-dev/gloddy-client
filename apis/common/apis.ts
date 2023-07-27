import publicApi from '../config/publicApi';

import type { FilesResponse } from './type';

export const postFiles = (fileList: FormData) => publicApi.post<FilesResponse>('/files', fileList);
