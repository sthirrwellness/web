import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, name, subject, message } = body;

    if (!email && !name && !subject && !message) {
      return NextResponse.json(
        { error: 'Please provide the required fields.' },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const newUser = await prisma.contact.create({
      data: {
        name, subject, message,
        email,
        phone: phone || null,
      },
    });

    return NextResponse.json(newUser, { status: 201 });

  } catch (error: unknown) {
    console.error('Error in contact API:', error);

    // 3. Return a generic error for all other cases
    return NextResponse.json(
      { error: 'We encountered an issue. Please try again later.' },
      { status: 500 }
    );
  }
}