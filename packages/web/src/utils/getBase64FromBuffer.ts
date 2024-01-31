import { getBufferFromS3Url } from './getBufferFromS3Url';
import { getPlaiceholder } from 'plaiceholder';

const getBase64FromBuffer = async (src: string) => {
  const buffer = await getBufferFromS3Url(src);

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default getBase64FromBuffer;
