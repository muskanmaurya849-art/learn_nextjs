import React from "react";
import { ArrowRight, MapPin, PhoneCall, Mail, Clock} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600">
            <div className="max-w-7xl px-6 py-12 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <img src="/logo.png" alt="Samosa Hub" className="w-32 mb-3" />
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

                    <ul className="space-y-2">
                        <li>
                            <a href="/home" className="hover:text-orange-500">
                            Home
                            </a>
                        </li>

                        <li>
                            <a href="/about" className="hover:text-orange-500">
                            About
                            </a>
                        </li>

                        <li>
                            <a href="/samosa" className="hover:text-orange-500">
                            Samosa
                            </a>
                        </li>

                        <li>
                            <a href="/contact" className="hover:text-orange-500">
                            Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Samosa Varieties */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Samosas</h3>
                    <ul className="space-y-2 text-gray-500">
                        <li>Aloo Samosa</li>
                        <li>Paneer Samosa</li>
                        <li>Cheese Samosa</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>

        
                    <p className="flex pr-2"> <MapPin className="mr-2" size={20} strokeWidth={1.25} /> Main Road, Chaproli</p>

                    <p className="mt-2 flex "><PhoneCall className="mr-2" size={18} strokeWidth={1.25} />+91 98765 43210</p>

                    <p className="mt-2 flex"><Mail className="mr-2" size={18} strokeWidth={1.25} />info@samosahub.com</p>

                    <p className="mt-2 flex">
                    <Clock className="mr-2" size={17} strokeWidth={1.25} />
                    Open Daily <br />
                    8:00 AM – 11:00 PM
                    </p>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">

                <p className="text-sm text-center w-full text-gray-500">
                © 2026 Samosa Hub. All Rights Reserved.
                </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;