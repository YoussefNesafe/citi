import { PostResponse } from '@/models/BlogsTypes';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await fetch(`${process.env.BLOGS_API}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const response = (await res.json()) as PostResponse[];
    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
