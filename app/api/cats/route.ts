import { NextResponse } from 'next/server';

import type { Cat } from '../interfaces/Cat';

const cats = [
  {
    name: 'Pumpkin',
    age: 'Adult',
    sex: 'Male',
    img: 'pumpkin.png'
  },
  {
    name: 'Cheese',
    age: 'Kitten',
    sex: 'Male',
    img: 'cheese.png'
  },
  {
    name: 'Saydie',
    age: 'Senior',
    sex: 'Female',
    img: 'saydie.png'
  },
  {
    name: 'Geralt',
    age: 'Adult',
    sex: 'Male',
    img: 'geralt.png'
  }
] as Array<Cat>;

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  return NextResponse.json({ cats }, { status: 200 });
}

// // To handle a POST request to /api
// export async function POST(request) {
//   // Do whatever you want
//   return NextResponse.json({ data: cats }, { status: 200 });
// }
