import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {soccerSeed} from '../../seed/soccerSeed.js';

 
export async function GET(request) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS soccertable (videoid TEXT PRIMARY KEY,thumbnail TEXT,title TEXT,channelid TEXT,channelTitle TEXT);`
    const data=soccerSeed.items;
    if (!data || data.length === 0) throw new Error('No videos found');
    
    //  for(let item of data){
    //   await sql`INSERT INTO soccertable (videoid, thumbnail,title,channelid,channeltitle) VALUES (${item.id.videoId},${item.snippet.thumbnails.medium.url},${item.snippet.title},${item.snippet.channelId},${item.snippet.channelTitle}) ON CONFLICT (videoid) DO NOTHING;`;
    //  }
    
    const videos = await sql`SELECT * FROM soccertable`;
    return NextResponse.json({videos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

