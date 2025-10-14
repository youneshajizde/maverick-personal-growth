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

  const { data, error } = await safeFetch<AuthT>("/auth/local/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (error || !data) {
    return { success: false, message: "Registration failed!" };
  }

  const authData = (data).data ?? data; 

  if (!authData?.jwt) {
    return { success: false, message: "Registration failed!" };
  }

  const cookieStore = cookies();
  (await cookieStore).set("token", authData.jwt, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return { success: true, data: authData };
};
