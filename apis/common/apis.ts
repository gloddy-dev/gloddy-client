import publicApi from '../config/publicApi';

export const postFiles = (fileList: FormData) => publicApi.post('/files', fileList);
