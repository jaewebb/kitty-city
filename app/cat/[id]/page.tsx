'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

const fetcher = (url: string) => fetch(url).then(res => res.json());

function Birthday(birthday: Date) {
  let diff = formatDistanceToNow(parseISO(birthday.toString()));
  return <>{diff} old</>;
}

export default function Page({ params }: { params: { id: string } }) {
  const {
    data,
    error,
    isLoading
  } = useSWR(params.id ? `/api/cats/${params.id}` : null, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return (
    <main className="min-h-screen m-10">
      loading...
    </main>
  );

  return (
    <main className="min-h-screen m-10 fade-in">
      <Link href="/">
        <i className="fa-solid fa-arrow-left"></i> Back to cats
      </Link>
      <h1 className="mt-5">{ data.cat?.name }</h1>
      <h2>{ data.cat?.gender }, { Birthday(data.cat?.birthday) }</h2>
      <p className='py-1'>{ data.cat?.description }</p>
      <Image
        priority
        alt={`photo of ${data.cat.name}`}
        className="rounded-lg"
        height={400}
        width={400}
        src={`/images/${data.cat.img}`}
      />
    </main>
  );
};
