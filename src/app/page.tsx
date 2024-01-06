import { prisma } from "../../prisma/index";

export default async function Home() {
  const allItems = await prisma.items.findMany();
  console.log(allItems);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
