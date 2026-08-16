import Link from "next/link";

export default function Navbar() {
return (
        <nav className="flex flex-row justify-end gap-6 bg-orange-500 p-6 text-[20px] font-bold text-white dark:bg-orange-600">
            <Link href="/">Home</Link>
            <Link href="/products">Samosa</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}