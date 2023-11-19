'use client';

import React from 'react';
import useSWR from 'swr';

import CatCard from './components/CatCard';
import type { Cat } from './interfaces/Cat';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Cats() {
  const { data, error, isLoading } = useSWR('/api/cats', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="min-h-screen m-10">
      <h1>Adopt a Cat</h1>
      <div className="grid grid-cols-4 gap-7">
          { data.cats.map((cat: Cat, i: number) => (
            <CatCard key={i} cat={cat} />
          )) }
      </div>
    </main>
  );
};
