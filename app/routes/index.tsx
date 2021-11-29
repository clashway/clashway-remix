import type { MetaFunction } from "remix";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Cory Lashway",
    description: "Portfolio Site"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <main>
      <h1 className="mb-4 text-2xl font-extrabold text-yellow-400">
        Who am I?
      </h1>
      <div className="mt-8">
        <p>
          Et ex enim voluptate irure enim irure culpa amet anim. Velit nulla
          velit pariatur id qui magna esse. Mollit pariatur ad officia deserunt
          aliqua culpa nisi voluptate irure est id enim. Veniam minim ex Lorem
          adipisicing enim ut cupidatat velit ullamco sit dolore. Nostrud ad
          velit incididunt exercitation eu irure eu proident reprehenderit.
          Occaecat culpa culpa velit laboris proident irure aute laborum eu
          fugiat exercitation.
        </p>
      </div>
    </main>
  );
}
