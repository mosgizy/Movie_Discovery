import { NextRequest, NextResponse } from "next/server";

const url = 'https://api.themoviedb.org/3/search/movie?query=';
export async function GET(req: NextRequest, { params }: { params: { search: string } }) {
  const { search } = params

  try {
    const res = await fetch(`${url}${search}&page=1&limit=10`, {
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