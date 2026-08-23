const About = () => {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-10 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <section className="mb-12 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-12 text-center text-white shadow-xl md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
            About us
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">About Samosa Hub</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Welcome to Samosa Hub — your go-to place for delicious, crispy and
            freshly prepared samosas made with love.
          </p>
        </section>

        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-md">
            <img
              src="/samosa1.png"
              alt="Fresh Samosa"
              className="h-80 w-full rounded-xl object-cover"
            />
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h2 className="mb-4 text-3xl font-bold text-orange-700">Who We Are</h2>
            <p className="mb-4 text-base leading-7 text-gray-700">
              Samosa Hub is a food destination made for samosa lovers. We prepare
              fresh and tasty samosas using quality ingredients and traditional
              flavors.
            </p>
            <p className="text-base leading-7 text-gray-700">
              Our goal is simple: serve flavorful food, keep prices affordable, and
              offer a happy experience with every bite.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-center text-3xl font-bold text-orange-700">
            Why Choose Samosa Hub?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Fresh Food",
                text: "Our samosas are prepared fresh so you can enjoy the perfect taste and crunch.",
              },
              {
                title: "Quality Ingredients",
                text: "We use premium ingredients to keep every samosa rich, flavorful and authentic.",
              },
              {
                title: "Great Taste",
                text: "We focus on delicious flavors that turn every bite into a memorable moment.",
              },
              {
                title: "Affordable Price",
                text: "Enjoy tasty samosas at prices that are easy on your pocket.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
