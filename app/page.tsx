import SamosaCard from "./components/SamosaMenu";

const samosaItems = [
  {
    name: "Classic Samosa",
    description: "Freshly made with spiced potatoes and peas.",
    price: 99,
    image: "/samosa1.png",
  },
  {
    name: "Aalu Samosa",
    description: "Crispy golden bites filled with potato and spices.",
    price: 129,
    image: "/samosa2.png",
  },
  {
    name: "Cheese Samosa",
    description: "A rich, cheesy twist on the classic favorite.",
    price: 149,
    image: "/samosa3.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-500 px-4 py-10 text-center text-white">
      <main className="mx-auto max-w-6xl">
        <section>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Welcome to My Samosa Hub
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-orange-100 md:text-lg">
            Fresh, crispy, and delicious samosas made every day using quality
            ingredients. Enjoy authentic taste with every bite.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 text-left text-gray-500 shadow-lg">
              <h4 className="text-lg font-medium">Enter your delivery location</h4>
            </div>
            <div className="rounded-lg bg-white p-3 text-left text-gray-500 shadow-lg">
              <h4 className="text-lg font-medium">
                Search for restaurant, item or more
              </h4>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {samosaItems.map((item) => (
              <SamosaCard
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}