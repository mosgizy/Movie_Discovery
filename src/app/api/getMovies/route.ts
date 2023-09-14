import { NextRequest, NextResponse } from "next/server";

// const url = 'https://api.themoviedb.org/3/discover/movie'
const url = 'https://api.themoviedb.org/3/movie/top_rated';

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`${url}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    })

    const data = await res.json()
    return NextResponse.json(data.results.slice(0,10))
  } catch (error) {
    console.error(error);
  }
}