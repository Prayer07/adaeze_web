import Image from "next/image";
import React from "react";
import Link from "next/link";

const images = [
  { id: 1, price: 7000, pic: "/woman/pic1.jpg" },
  { id: 2, price: 3000, pic: "/woman/pic2.jpg" },
  { id: 3, price: 3000, pic: "/woman/pic3.jpg" },
  { id: 4, price: 3000, pic: "/woman/pic4.jpg" },
];

export default function MenStore() {
  return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Men’s Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <Link
              key={img.id}
              href={`/store/women/${img.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={img.pic}
                width={400}
                height={400}
                alt={`Men's product ${img.id}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">
                  Price: ₦{img.price.toLocaleString()}
                </p>
                <button className="mt-3 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
}





// import Image from 'next/image'
// import React from 'react'

// const images = [
//     {
//       id: 1,
//       price: 7000,
//       pic: "/woman/pic1.jpg" // make sure this image exists in /public/
//     },
//     {
//       id: 2,
//       price: 3000,
//       pic: "/woman/pic2.jpg" // make sure this image exists in /public/
//     },
//     {
//       id:3,
//       price: 3000,
//       pic: "/woman/pic3.jpg" // make sure this image exists in /public/
//     },
//     {
//       id:4,
//       price: 3000,
//       pic: "/woman/pic4.jpg" // make sure this image exists in /public/
//     },
// ]

// export default function index() {
//   return (
//     <>
//     {images.map((img) =>(
//       <div key={img.id}>
//         <Image src={img.pic} width={100} height={100} alt='fuck me'/>
//         <p>Price: {img.price}</p>
//       </div>
//     ))}
//     </>
//   )
// }