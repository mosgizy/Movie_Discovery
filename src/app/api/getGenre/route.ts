import { NextRequest, NextResponse } from "next/server";

const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

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
    return NextResponse.json(data)
  } catch (error) {
    console.error(error);
  }
}