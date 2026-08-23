import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
return (
        <header className="flex flex-row items-center justify-between bg-orange-500 p-6 text-[20px] font-bold text-white dark:bg-orange-600">
        {/* Logo */}
            <div>
                <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                />
            </div>
    
            <nav className="flex flex-row gap-6">
                <Link href="/">Home</Link>
                <Link href="/about/Samosa">Samosa</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    
    );
}