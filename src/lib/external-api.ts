import axios from "axios";

import { env } from "@/lib/env";
import { authClient } from "./auth-client";

export const externalApi = axios.create({
  baseURL: env.NEXT_PUBLIC_EXTERNAL_API_URL,
  headers: { "Content-Type": "application/json" },
});

externalApi.interceptors.request.use(async (config) => {
  await authClient.getSession({
    fetchOptions: {
      onSuccess: (ctx) => {
        const jwt = ctx.response.headers.get("set-auth-jwt");

        if (jwt) {
          config.headers.Authorization = `Bearer ${jwt}`;
        }
      },
    },
  });

  return config;
});
