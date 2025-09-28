import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'contact') {
      const contacts = await prisma.contact.findMany();
      return NextResponse.json({ contacts }, { status: 200 });
    } else if (type === 'register') {
      const registrations = await prisma.register.findMany();
      return NextResponse.json({ registrations }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: 'Invalid query param. Use ?type=contact or ?type=register',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}