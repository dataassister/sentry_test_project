import {NextResponse} from "next/server";

export async function GET(request: Request) {
    throw new Error("Sentry Example API Route Error");

    return NextResponse.json({ name: "John Doe" });
}
