import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const cats = await prisma.cat.findMany();
    return NextResponse.json({ cats }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
