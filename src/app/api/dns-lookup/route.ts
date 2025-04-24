import { NextResponse } from "next/server";

const recordTypes = {
  A: 1,
  AAAA: 28,
  MX: 15,
  NS: 2,
  TXT: 16,
  SOA: 6,
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");
  if (!domain) {
    return NextResponse.json({ error: "Domain is required" }, { status: 400 });
  }

  try {
    const fetches = Object.entries(recordTypes).map(
      async ([typeName, typeNum]) => {
        const res = await fetch(
          `https://dns.google/resolve?name=${domain}&type=${typeNum}`
        );
        if (!res.ok) {
          throw new Error("Domain is not valid");
        }
        const data = await res.json();
        return data.Answer
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.Answer.map((r: any) => ({ ...r, typeName }))
          : [];
      }
    );

    const results = await Promise.all(fetches);
    const mergedAnswers = results.flat();

    return NextResponse.json({ Answer: mergedAnswers });
  } catch (err) {
    if (err instanceof Error)
      return NextResponse.json(
        { error: err.message || "Something went wrong" },
        { status: 500 }
      );
  }
}
