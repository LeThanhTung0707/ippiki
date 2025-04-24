// app/api/ipinfo/route.ts
import { NextRequest } from "next/server";

const IPINFO_TOKEN = process.env.IPINFO_TOKEN!;

export async function POST(request: NextRequest) {
  const { ip } = await request.json();

  if (!ip) {
    return Response.json({ error: "Thiếu địa chỉ IP" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://ipinfo.io/${ip}?token=${IPINFO_TOKEN}`);
    const data = await res.json();
    return Response.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return Response.json({ error: "Lỗi khi gọi ipinfo.io" }, { status: 500 });
  }
}
