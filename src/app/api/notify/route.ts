// app/api/notify/route.ts

import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Please provide your email address' }, 
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

    // Create a new user in the database
    const newUser = await prisma.waitlistUser.create({
      data: {
        email,
        phone,
      },
    });

    return NextResponse.json(newUser, { status: 201 });

  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
    
    // Type guard to check for Prisma error code
    const isPrismaError = (err: unknown): err is { code?: string } => {
      return typeof err === 'object' && err !== null && 'code' in err;
    };
    console.error('Error in notification API:', error);
    
    // Handle cases where the email might already exist (unique constraint)
    if (isPrismaError(error) && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already on our waitlist. Thank you for your interest!' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'We encountered an issue. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}