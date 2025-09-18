"use client";

import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const instance = ky.extend({
  prefixUrl: "http://localhost:3000",
});

function Page() {
  const router = useRouter();
  const { data, isError } = useQuery({
    queryKey: ["query-test"],
    queryFn: async () => {
      console.log("!");
      return await instance.get("api/toggle").json();
    },
  });

  return (
    <div>
      <h1>api-test-page</h1>

      <h1 className="text-4xl">isError : {isError ? "true" : "false"}</h1>

      <button onClick={() => router.back()}>back button</button>
      <br />
      <button onClick={() => router.push("/api-test/next")}>next button</button>
    </div>
  );
}

export default Page;
