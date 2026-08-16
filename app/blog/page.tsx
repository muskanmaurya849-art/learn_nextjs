import Link from "next/link";

const posts = [
  {
    category: "Recipes",
    title: "How to make the perfect crispy samosa",
    excerpt:
      "Learn the secrets behind a golden crust, flavorful filling, and the right frying temperature for a crunchy bite.",
  },
  {
    category: "Food Story",
    title: "Why Samosa Hub keeps customers coming back",
    excerpt:
      "Fresh ingredients, balance of spice, and consistent quality make every snack experience memorable.",
  },
  {
    category: "Culture",
    title: "The samosa story from street snack to favorite comfort food",
    excerpt:
      "Explore how this beloved snack spread across cultures while staying true to its rich heritage.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-orange-50 px-4 py-10 text-gray-800">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Blog
          </p>
          <h1 className="text-4xl font-bold text-orange-700 md:text-5xl">
            Samosa stories & kitchen tips
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                {post.category}
              </p>
              <h2 className="mb-3 text-2xl font-bold text-gray-800">{post.title}</h2>
              <p className="mb-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
              <Link href="/" className="font-semibold text-orange-600 hover:text-orange-700">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
