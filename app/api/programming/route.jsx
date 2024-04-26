import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
const fetchProgramming=async()=>{
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&type=video&q=programming-for-kids&safeSearch=strict&part=snippet&maxResults=50`);
    const data = await res.json();
    return data;
    }
export async function GET(request) {
  try {
    // await sql`CREATE TABLE IF NOT EXISTS programming (videoid TEXT PRIMARY KEY,thumbnail TEXT,title TEXT,channelid TEXT,channelTitle TEXT);`
    // const data= await fetchProgramming();
    // const items=data.items;
    // if (!data || data.length === 0) throw new Error('No videos found');
    
    //  for(let item of items){
    //   await sql`INSERT INTO programming (videoid, thumbnail,title,channelid,channeltitle) VALUES (${item.id.videoId},${item.snippet.thumbnails.medium.url},${item.snippet.title},${item.snippet.channelId},${item.snippet.channelTitle}) ON CONFLICT (videoid) DO NOTHING;`;
    //  }
    
    const videos = await sql`SELECT * FROM programming`;
    return NextResponse.json({videos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}