import Link from "next/link";

const favs = [
  "928047",
  "928111",
  "928387",
  "927990",
  "928045",
  "928026",
  "928209",
  "928049",
  "928188",
  "928078",
  "928375",
  "928083",
  "928019",
  "928297",
  "927981",
  "928030",
  "928029",
];

export default async function d3Page() {
  return (
    <div className="container mx-auto bg-orange-300 w-screen h-screen">
      <h1 className="text-2xl font-bold px-8 py-8">Favourites:</h1>
      <ul className="grid grid-cols-3 gap-4 pl-10">
        {favs.map((id) => (
          <li key={id} className="text-lg">
            <Link href={`/d3/${id}`}>
              <div className="text-blue-600 hover:underline">{id}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
