'use client';

import { useParams } from 'next/navigation';

type NonEmptyArray<T> = [T, ...T[]];

export default function useNumberParams<T extends NonEmptyArray<string>>() {
  const params = useParams();

  const numberParams = Object.fromEntries(
    Object.entries(params).map(([key, value]) => [key, Number(value)])
  ) as Record<T[number], number>;

  return numberParams;
}
