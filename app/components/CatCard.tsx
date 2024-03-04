import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Cat } from '../interfaces/Cat';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

function Favorite(isFavorite: boolean) {
  if (isFavorite) {
    return <i className="fa-solid fa-heart ml-1 text-2xl text-red-600" />;
  }
  return <i className="fa-regular fa-heart ml-1 text-2xl text-red-600" />;
}

function Birthday(birthday: Date) {
  let diff = formatDistanceToNow(parseISO(birthday.toString()));
  return <h4>{diff} old</h4>;
}

function Photo(cat: Cat) {
  return (
    <Image
      priority
      alt={`photo of ${cat.name}`}
      className='rounded-lg'
      height='500'
      width='500'
      src={`/images/${cat.img}`}
    />
  );
}

function Profile(cat: Cat) {
  return (
    <div className="flex px-3 py-2">
      <div>
        <h2>{cat.name}</h2>
        { Birthday(cat.birthday) }
        <h4>{cat.gender}</h4>
      </div>
      <div className="grow text-right">
        { Favorite(cat.name == 'Pumpkin') }
      </div>
    </div>
  );
}

export default function CatCard({ cat } : { cat: Cat }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`cat/${cat.id}`}
      className="drop-shadow-xl bg-white rounded-lg border border-orange-500 h-full fade fade-in"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
    >
      { hover == true ? Profile(cat) : Photo(cat) }
    </Link>
  );
}
