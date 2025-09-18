"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>api-test-page/next</h1>

      <button onClick={() => router.back()}>back button</button>
    </div>
  );
}

export default Page;
