'use client';

import type { SearchResultType } from '../type';

interface SearchResultSectionProps {
  searchResultList: SearchResultType[];
}

export default function SearchResultSection({ searchResultList }: SearchResultSectionProps) {
  return (
    <section>
      {searchResultList.map((searchResult: SearchResultType) => (
        <div key={searchResult.id} className="border-b-[0.5px] border-b-gray6 p-20">
          <div className="text-14">{searchResult.name}</div>
          <div className="text-12 text-gray2">{searchResult.address}</div>
        </div>
      ))}
    </section>
  );
}
