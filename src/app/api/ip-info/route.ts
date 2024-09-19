import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
export interface reqHeadersType {
  [key: string]: string | null;
}
export async function GET() {
  const header  = headers();
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  return NextResponse.json({ status: 'ok', res: {ip_address: ip}  });
}
