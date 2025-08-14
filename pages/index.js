import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <div className="text-center my-8">
        <Link href="/store">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
            View Store
          </button>
        </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
}




// import React from 'react'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Link from 'next/link'

// export default function index() {
//   return (
//     <>
//     <Navbar/>
//     <Header/>
//     <Link href={'/store'}> <button>View Store</button> </Link>
//     </>
//   )
// }
