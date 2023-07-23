import publicApi from '../config/publicApi';

export const postFiles = (fileList: FormData) => publicApi.post('/api/v1/files', fileList);
