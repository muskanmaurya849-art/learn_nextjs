import SamosaCard from "../../components/SamosaMenu";

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

export default function SamosaPage() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-orange-700">
          Samosa Collection
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
      </div>
    </main>
  );
}