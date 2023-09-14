import { NextRequest, NextResponse } from "next/server";

const url = 'https://api.themoviedb.org/3/movie'
export async function GET(req: NextRequest, { params }: { params: { id: number } }) {
  try {
    const res = await fetch(`${url}/${params.id}`, {
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