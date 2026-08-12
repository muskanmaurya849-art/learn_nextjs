import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <nav className="flex flex-row font-bold text-[20px] justify-end gap-6 text-white p-6 bg-orange-500 dark:bg-orange-600 p-4">
                <Link href="/">Home</Link>
                <Link href="/products">Samosa</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                </nav>

        </div>
    )
}