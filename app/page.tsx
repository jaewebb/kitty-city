'use client';

import useSWR from 'swr';

import CatCard from './components/CatCard';
import type { Cat } from './interfaces/Cat';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Cats() {
  const { data, error, isLoading } = useSWR('/api/cats', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return (
    <main className="min-h-screen m-10">
      loading...
    </main>
  );

  return (
    <main className="min-h-screen sm:m-10 m-5">
      <h1>Adopt a Cat</h1>
      <div className="
        grid
        2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1
        gap-20
      ">
          { data.cats.map((cat: Cat, i: number) => (
            <CatCard key={i} cat={cat} />
          )) }
      </div>
    </main>
  );
};
