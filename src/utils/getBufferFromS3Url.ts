import * as https from 'https';

/**
 * S3 URL에서 데이터를 가져와 Buffer 객체로 반환합니다.
 * @param s3Url - S3 파일의 URL (문자열 타입)
 * @returns Promise<Buffer> - 비동기적으로 Buffer 객체를 반환하는 Promise
 */
export const getBufferFromS3Url = (s3Url: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    https
      .get(s3Url, (res) => {
        const chunks: Buffer[] = [];

        res.on('data', (chunk: Buffer) => {
          chunks.push(chunk);
        });

        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
      })
      .on('error', (error: Error) => {
        reject(error);
      });
  });
};
