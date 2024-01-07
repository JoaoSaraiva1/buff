import { prisma } from "@/../prisma/index";
import D3Chart from "./d3-chart";

export default async function Page({ params }: { params: { id: string } }) {
  const Items = await prisma.price_history.findMany({
    where: {
      buff_id: params.id,
    },
    include: {
      items: {
        select: {
          item_name: true,
        },
        where: {
          buff_id: params.id,
        },
      },
    },
  });

  console.log("🚀 ~ file: page.tsx:21 ~ Page ~ Items:", Items)

  return (
    <div className="container mx-auto bg-orange-300 w-screen h-screen">
      <h2 className="text-3xl px-8 py-8">Item: {Items[0]?.items?.item_name}</h2>
      <D3Chart items={Items}></D3Chart>
    </div>
  );
}
