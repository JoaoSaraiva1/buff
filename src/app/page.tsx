import { prisma } from "@/../prisma/index";

export default async function Home() {
  const items = await prisma.price_history.findMany();

  return (
    <div className="container mx-auto bg-orange-300 w-screen h-screen">
      <h1>Home</h1>
    </div>
  );
}
