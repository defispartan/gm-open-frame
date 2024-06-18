import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const FRAMES_URL = "https://gm-open-frame.vercel.app";
const imageUrl = new URL("/og", FRAMES_URL).href;
const postUrl = new URL("/frame", FRAMES_URL).href;

const frameMetadata = getFrameMetadata({
  input: { text: "Enter @username" },
  buttons: [{ label: "Enter Name", action: "post" }],
  image: imageUrl,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: "gm",
  description: "A page having a frame meta tag for gm",
  openGraph: {
    title: "gm",
    description: "A page having a frame meta tag for gm",
    images: [imageUrl],
  },
  other: {
    "of:accepts:xmtp": "2024-02-01",
    "of:version": "vNext",
    "of:image": imageUrl,
    "of:input:text": "Enter @username",
    "of:button:1": "Enter Name",
    "of:button:1:action": "post",
    "of:post_url": postUrl,
    "of:button:1:post_url": postUrl,
    "of:authenticated": "false",
    ...frameMetadata,
  },
};

export default async function Page() {
  return <div>gm, user name frames!!</div>;
}
