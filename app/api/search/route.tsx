import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("query") as string;
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = await res.json();

  return NextResponse.json(data);
}
