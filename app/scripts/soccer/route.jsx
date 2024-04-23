import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const videos = await sql`SELECT * FROM soccer ;`;
    return NextResponse.json({videos }, { status: 200 });
}