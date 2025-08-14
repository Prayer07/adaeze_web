import Link from "next/link";
import React from "react";

const genders = [
  { id: 1, type: "men" },
  { id: 2, type: "women" },
];

export default function Store() {
  return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {genders.map((gender) => (
            <Link
              key={gender.id}
              href={`/store/${gender.type}`}
              className="block p-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition"
            >
              <h2 className="text-2xl font-semibold text-center">
                {gender.type.toUpperCase()}
              </h2>
            </Link>
          ))}
        </div>
      </div>
  );
}




// import Link from 'next/link'
// import React from 'react'

// const genders = [
//   {
//     id: 1,
//     type: "men",
//   },
//   {
//     id: 2,
//     type: "women",
//   },
// ]

// export default function store() {
//   return (
//     <>
//     {genders.map((gender) =>(
//       <div key={gender.id}>
//         <Link href={`/store/${gender.type}`}>{gender.type.toUpperCase()}</Link>
//       </div>
//     ))}
//     </>
//   )
// }