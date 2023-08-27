import { serverClient } from "../server/serverClient";

export default async function Home() {
  const foo = await serverClient.getTodos();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(foo)}</pre>
    </main>
  );
}
