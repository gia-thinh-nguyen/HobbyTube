import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const videos = await sql`SELECT * FROM soccer ORDER BY RANDOM() LIMIT 16;`;
    return NextResponse.json({videos }, { status: 200 });
}