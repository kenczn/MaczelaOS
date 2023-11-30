import { getPizzasByCategory } from "@utils/pizza";
import Pizza from "./Pizza";

export default async function PizzaLists({ label = null }) {
  const pizzas = await getPizzasByCategory("Best sellers");

  return (
    <div className="bg-white pb-24 pt-14">
      <div className="mx-auto max-w-2xl px-6 pt-10 md:px-8 lg:max-w-7xl">
        <h2 className="sr-only">Pizzas</h2>

        {label ? (
          <h2
            className={`label mb-10 text-3xl font-bold text-black ${label.style}`}
          >
            {label.content}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 gap-x-6 gap-y-20 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {pizzas.map((pizza) => (
            <Pizza
              key={pizza.id}
              id={pizza.id}
              href={`/pizza/${pizza.id}`}
              name={pizza.name}
              price={pizza.price}
              imageSrc={pizza.image_url}
              imageAlt={pizza.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
