"use client";

import AccentButton from "@/components/custom/accent-button";
import { externalApi } from "@/lib/external-api";

export default async function GetTokenButton() {
  async function handleClick() {
    const req = await externalApi.get("/authcheck");
    console.log(req);
  }
  return <AccentButton onClick={handleClick}>Test token</AccentButton>;
}
