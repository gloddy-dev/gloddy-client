import fs from 'node:fs/promises';
import { join } from 'path';

import { getPlaiceholder } from 'plaiceholder';

const getBase64 = async (src: string) => {
  const isExternal = src.startsWith('http');
  let buffer: Buffer;

  if (isExternal) {
    buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));
  } else {
    buffer = await fs.readFile(join(process.cwd(), `public${src}`));
  }

  const { base64 } = await getPlaiceholder(buffer);

  return base64 as `data:image/${string}`;
};

export default getBase64;
