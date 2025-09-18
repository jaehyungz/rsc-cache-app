import { NextResponse } from "next/server";

global.bool = true;

export async function GET() {
  console.log(global.bool);

  if (global.bool) {
    global.bool = false;
    return new NextResponse(JSON.stringify({ response: "ok" }), {
      status: 200,
    });
  } else {
    global.bool = true;
    return new NextResponse(JSON.stringify({ response: "false" }), {
      status: 401,
    });
  }
}
