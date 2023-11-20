import useSWR from 'swr';

import type { Cat } from '../../interfaces/Cat';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Page({ params }: { params: { id: string } }) {
  // const {
  //   data,
  //   error,
  //   isLoading
  // } = useSWR(`/api/cats/${params.id}`, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return (
    <main className="min-h-screen m-10">
      {/* { data.cat } */}
    </main>
  );
};
