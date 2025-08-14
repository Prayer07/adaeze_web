import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Diamond&apos;s Store 💎</h1>
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
}





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
