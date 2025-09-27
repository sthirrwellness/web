import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, phone, plan } = body;
        
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
    
        const newUser = await prisma.register.create({
          data: {
            email, 
            phone: phone || null,
            plan: plan || null,
          },
        });
    
        return NextResponse.json(newUser, { status: 201 });
    
      } catch (error: unknown) { 
        console.error('Error in register API:', error);
    
        if (
          typeof error === 'object' &&
          error !== null &&
          'code' in error &&
          (error as { code: unknown }).code === 'P2002'
        ) {
          return NextResponse.json(
            { error: 'This email is already registered. Thank you!' },
            { status: 409 }
          );
        }
    
        // 3. Return a generic error for all other cases
        return NextResponse.json(
          { error: 'We encountered an issue. Please try again later.' },
          { status: 500 }
        );
      }
}