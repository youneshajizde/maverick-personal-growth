"use server";

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

  console.log("this is auth data : " , data)

  if (error || !data) {
    return { success: false, message: "Registration failed!" };
  }



  return { success: true, data };
};
