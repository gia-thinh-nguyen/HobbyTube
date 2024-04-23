import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {soccerSeed} from '../../seed/soccerSeed.js';
console.log(soccerSeed.items[0] )
 

export async function GET(request) {
  try {

    const data=soccerSeed.items;
    if (!data || data.length === 0) throw new Error('No videos found');
    
     for(let item of data){
      await sql`INSERT INTO soccer (videoid, thumbnail,title) VALUES (${item.id.videoId},${item.snippet.thumbnails.medium.url},${item.snippet.title}) ON CONFLICT (videoid) DO NOTHING;`;
     }
    
    const videos = await sql`SELECT * FROM soccer`;
    return NextResponse.json({videos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

