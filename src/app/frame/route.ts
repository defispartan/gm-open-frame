import { FrameRequest } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const FRAMES_URL = 'https://gm-open-frame.vercel.app'
const postUrl = new URL("/", FRAMES_URL).href

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  let userName = body.untrustedData.inputText;
  const imageUrl = new URL("/og/gm", FRAMES_URL).href + "?" + "userName=" + userName;
  return new NextResponse(`<!DOCTYPE html><html><head>
      <title>gm Open Frame</title>
      <meta property="of:version" content="vNext" />
      <meta property="of:accepts:xmtp" content="2024-02-01" />
      <meta property="of:authenticated" content="false" />
      <meta property="fc:frame" content="vNext" />
      <meta property="og:image" content="${imageUrl}"/>
      <meta property="of:image" content="${imageUrl}"/>
      <meta property="fc:frame:image" content="${imageUrl}"/>
    </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';



