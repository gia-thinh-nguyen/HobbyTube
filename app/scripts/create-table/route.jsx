import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =await Promise.all([
      sql`CREATE TABLE IF NOT EXISTS soccer (videoid TEXT PRIMARY KEY,thumbnail TEXT,title TEXT);`,
      sql`CREATE TABLE IF NOT EXISTS basketball (videoid TEXT PRIMARY KEY,thumbnail TEXT,title TEXT);`,
    ]);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}