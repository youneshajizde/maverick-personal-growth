"use server";

import { cookies } from "next/headers";
import { AuthT } from "../types/global.types";
import { safeFetch } from "../utils/functions";

export const submitAuth = async (fd: FormData) => {
  const body = JSON.stringify({
    username: fd.get("username"),
    email: fd.get("email"),
    password: fd.get("password"),
  });

  const { data } = await safeFetch<AuthT>("/auth/local/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (!data?.jwt) {
    return { success: false, message: "Registration failed!" };
  }

  const cookieStore = cookies();
  (await cookieStore).set("token", data.jwt, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return { success: true, data: data };
};
