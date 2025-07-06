// File: components/Navbar.jsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo + Brand Name */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Jabbour Tutoring Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-semibold text-green-800">
          Jabbour Tutoring
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-green-700">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-green-700">
          About
        </Link>
        <Link href="/subjects" className="text-gray-700 hover:text-green-700">
          Subjects
        </Link>
        <Link href="/services" className="text-gray-700 hover:text-green-700">
          Services
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-green-700">
          Contact
        </Link>
      </div>
    </nav>
  );
}
