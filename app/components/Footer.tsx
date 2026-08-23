import Link from "next/link";
import { MapPin, PhoneCall, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 text-left md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Samosa Hub" className="mb-3 w-32" />
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/about/Samosa" className="hover:text-orange-500">
                Samosa
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Our Samosas</h3>
          <ul className="space-y-2 text-gray-500">
            <li>Aloo Samosa</li>
            <li>Paneer Samosa</li>
            <li>Cheese Samosa</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Contact</h3>

          <p className="flex pr-2">
            <MapPin className="mr-2" size={20} strokeWidth={1.25} /> Main Road, Chaproli
          </p>

          <p className="mt-2 flex">
            <PhoneCall className="mr-2" size={18} strokeWidth={1.25} />+91 98765 43210
          </p>

          <p className="mt-2 flex">
            <Mail className="mr-2" size={18} strokeWidth={1.25} />info@samosahub.com
          </p>

          <p className="mt-2 flex">
            <Clock className="mr-2" size={17} strokeWidth={1.25} />
            Open Daily <br />
            8:00 AM – 11:00 PM
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-4 md:flex-row">
          <p className="w-full text-center text-sm text-gray-500">
            © 2026 Samosa Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;