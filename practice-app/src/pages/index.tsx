import { Inter } from "next/font/google";

import Todos from "@/todos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-6 p-24 ${inter.className}`}
    >
      <h1 className="text-6xl font-bold">Todos</h1>
      <Todos />
    </main>
  );
}
