import Link from "next/link";
import { prisma } from "@/../prisma/index";

const favs = [
  { id: "928047", itemName: "" },
  { id: "928111", itemName: "" },
  { id: "928387", itemName: "" },
  { id: "927990", itemName: "" },
  { id: "928045", itemName: "" },
  { id: "928026", itemName: "" },
  { id: "928209", itemName: "" },
  { id: "928049", itemName: "" },
  { id: "928188", itemName: "" },
  { id: "928078", itemName: "" },
  { id: "928375", itemName: "" },
  { id: "928083", itemName: "" },
  { id: "928019", itemName: "" },
  { id: "928297", itemName: "" },
  { id: "927981", itemName: "" },
  { id: "928030", itemName: "" },
  { id: "928029", itemName: "" },
];

export default async function d3Page() {
  const favItems = await Promise.all(
    favs.map(async ({ id }) => {
      const item = await prisma.items.findUnique({
        where: {
          buff_id: id,
        },
        select: {
          item_name: true,
        },
      });
      return { id, itemName: item?.item_name || "" };
    })
  );

  return (
    <div className="container mx-auto bg-orange-300 w-screen h-screen">
      <h1 className="text-2xl text-black font-extrabold px-8 py-8">Favourites:</h1>
      <ul className="grid grid-cols-3 gap-4 pl-10">
        {favItems.map(({ id, itemName }) => (
          <li key={id} className="text-lg">
            <Link href={`/d3/${id}`}>
              <div className="text-blue-600 hover:underline">
                {id} - {itemName}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
