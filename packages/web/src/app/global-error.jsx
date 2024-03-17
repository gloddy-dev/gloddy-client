'use client';

import Error from 'next/error';

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <Error statusCode={error.code} />
      </body>
    </html>
  );
}
