import { prisma } from "../../prisma/index";

export default async function Home() {
  const items = await prisma.price_history.findMany();

  console.log("🚀 ~ file: page.tsx:5 ~ Home ~ items:", items);

  return (
    <div className="bg-orange-300 w-screen h-screen">
      <h1>Home</h1>
    </div>
  );
}
