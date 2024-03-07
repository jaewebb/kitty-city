import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest, { params }: { params: { id: string } }
) {
  try {
    const cat = await prisma.cat.findUnique({
      where: { id: String(params.id) }
    });
    return NextResponse.json({ cat }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
