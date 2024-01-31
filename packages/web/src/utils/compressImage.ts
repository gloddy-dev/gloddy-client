import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File) => {
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 200,
    useWebWorker: true,
  };
  const BlobImage = await imageCompression(file, options);
  return new File([BlobImage], file.name, { type: file.type });
};
