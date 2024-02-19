import { getPlaiceholder } from 'plaiceholder';

import { getBufferFromS3Url } from './getBufferFromS3Url';

export const getBase64FromBuffer = async (src: string) => {
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
