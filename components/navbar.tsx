"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import Container from "./container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-t border-gray-500">
      <Container>
        <nav className="flex items-center justify-between p-4 font-sans">
          {/* Logo + Hamburger */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="hidden text-2xl font-extrabold tracking-tight text-green-600 md:block">
              Bitsoft
            </div>

            {/* Hamburger (mobile only) */}
            <button
              className="rounded-md p-2 text-gray-700 hover:text-green-600 focus:outline-none 
              focus:ring-2 focus:ring-inset focus:ring-green-600 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden flex-1 justify-center space-x-6 md:flex">
            {["Home", "Shop", "Blog", "Contact", "Hot Deals"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 font-bold transition-all duration-200 hover:text-green-600 hover:underline underline-offset-4"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative">
              <ShoppingCart className="h-6 w-6 cursor-pointer text-gray-700 transition-colors hover:text-green-600" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                0
              </span>
            </div>

            {/* Wishlist */}
            <div className="relative">
              <Heart className="h-6 w-6 cursor-pointer text-gray-700 transition-colors hover:text-green-600" />
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                0
              </span>
            </div>

            {/* User */}
            <div className="flex cursor-pointer items-center space-x-2">
              <User className="h-6 w-6 text-gray-700 transition-colors hover:text-green-600" />
              <span className="text-sm text-gray-700 transition-colors hover:text-green-600">
                Login
              </span>
            </div>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 space-y-2 bg-white shadow-md md:hidden">
          {["Home", "Shop", "Blog", "Contact", "Hot Deals"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block rounded px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-green-600"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
