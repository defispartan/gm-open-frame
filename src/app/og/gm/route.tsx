import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  let searchParams = req.nextUrl.searchParams;
  let userName = searchParams.get("userName");
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 54,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        gm, {userName} !!
      </div>
    )
  );
}
