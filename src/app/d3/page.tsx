import { prisma } from "@/../prisma/index";
import D3Chart from "./d3-chart";

export default async function d3Page() {
  const Items = await prisma.price_history.findMany({
    where: {
      buff_id: "927964",
    },
    include: {
      items: {
        select: {
          item_name: true,
        },
        where: {
          buff_id: "927964",
        },
      },
    },
  });

  return (
    <div className="container mx-auto bg-orange-300 w-screen h-screen">
      <h1>D3 Page</h1>
      <h2>Item: {Items[0]?.items?.item_name}</h2>
      <D3Chart items={Items}></D3Chart>
    </div>
  );
}
