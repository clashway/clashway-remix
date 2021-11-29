import type { MetaFunction } from "remix";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Cory Lashway",
    description: "Games of the Year"
  };
};

export default function Games() {
  const games = [
    {
      title: "Green Hell",
      startDate: new Date("Nov 21, 2021")
    },
    {
      title: "Something Else",
      startDate: new Date("Nov 23, 2021")
    }
  ];
  return (
    <div className="">
      <main>
        <h1 className="text-2xl font-extrabold text-yellow-400">
          2022 Game Log
        </h1>
        <ul className="mt-8">
          {games.map((game) => {
            return (
              <li className="mb-4" key={game.title}>
                <div>{game.title}</div>
                <div>Started: {game.startDate.toDateString()}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
