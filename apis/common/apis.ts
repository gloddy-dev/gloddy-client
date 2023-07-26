import { FilesResponse } from './type';
import publicApi from '../config/publicApi';

export const postFiles = (fileList: FormData) => publicApi.post<FilesResponse>('/files', fileList);
