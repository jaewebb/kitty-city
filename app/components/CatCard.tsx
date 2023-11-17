
import Image from 'next/image';
import Link from 'next/link';

import type { Cat } from '../interfaces/Cat';

function Favorite(isFavorite: boolean) {
  if (isFavorite) {
    return <i className="fa-solid fa-heart ml-1 text-2xl text-red-600" />;
  }
  return <i className="fa-regular fa-heart ml-1 text-2xl text-red-600" />;
}

export default function CatCard({ cat } : { cat: Cat }) {
  return (
    <div className="drop-shadow-xl bg-white">
      <div className="flex h-32 px-3 py-2">
        <div>
          <h2>{cat.name}</h2>
          <h4>{cat.age}</h4>
          <h4>{cat.sex}</h4>
        </div>
        <div className="grow text-right">
          { Favorite(cat.age === 'Adult') }
        </div>
      </div>
      <div className="w-100 h-80 relative">
        <Image
          src={`/images/${cat.img}`}
          className="mx-auto"
          fill={true}
          alt={`photo of ${cat.name}`}
        />
      </div>
    </div>
  );
}
