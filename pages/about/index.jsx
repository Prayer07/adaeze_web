import React from "react";
import Image from "next/image";

export default function About() {
  return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Diamond&apos;s Store 💎</h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* About Image */}
          {/* <div className="flex-1">
            <Image
              src="/images/about-store.jpg" // Make sure this image exists in /public/images
              width={600}
              height={400}
              alt="About Diamond's Store"
              className="rounded-lg shadow-lg object-cover"
            />
          </div> */}

          {/* About Text */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to <span className="font-semibold">Diamond&apos;s Store</span>, your go-to destination for premium
              fashion and lifestyle products. We believe in delivering not just products, but an experience of
              elegance, comfort, and style.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Since our inception, we&apos;ve been committed to sourcing high-quality items for both men and women, ensuring
              every purchase brings a smile to our customers' faces.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking for the latest trends or timeless classics, Diamond&apos;s Store is here to serve you
              with excellence and dedication.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 bg-pink-50 rounded-lg p-8 shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To make premium fashion accessible and affordable while delivering outstanding customer service. We aim to
            inspire confidence in every customer, one outfit at a time.
          </p>
        </div>
      </div>
  );
}
