import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
	const body = await request.json().catch(() => null);
	return NextResponse.json({ ok: true, body });
}
