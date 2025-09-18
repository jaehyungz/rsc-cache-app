import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link href={"/api-test"}>API-test</Link>
    </div>
  );
}
