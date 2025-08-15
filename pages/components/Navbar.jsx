import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Store Title */}
        <h1 className="text-xl font-bold">Diamond&apos;s Store 💎</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-pink-400 transition">Home</Link>
          </li>
          <li>
            <Link href="/store" className="hover:text-pink-400 transition">Store</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-400 transition">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-400 transition">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </div>

      {/* Side Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <HiX className="text-2xl" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link href="/" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/store" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Store</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Dark Overlay Behind Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}






// import Link from 'next/link';
// import React from 'react';

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 text-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Diamond&apos;s Store 💎</h1>
//         <ul className="flex space-x-6">
//           <li>
//             <Link href="/" className="hover:text-pink-400 transition">Home</Link>
//           </li>
//           <li>
//             <Link href="/store" className="hover:text-pink-400 transition">Store</Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-pink-400 transition">About</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-pink-400 transition">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }





// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
//   return (
//     <>
//       <nav>
//         <Link href={"/"} style={{ textDecoration: "none" }}> <p>Home</p></Link>
//         <Link href={"/store"} style={{ textDecoration: "none" }}><p>Store</p></Link>
//         <Link href={"/about"} style={{ textDecoration: "none" }}><p>About</p></Link>
//         <Link href={"/contact"} style={{ textDecoration: "none" }}><p>Contact</p></Link>
//       </nav>
//     </>
//   )
// }
