import Image from 'next/image'
import React from 'react'

  const pictures = [
    {
      id: 1,
      price: 7000,
      pic: "/images/pic1.jpg" // make sure this image exists in /public/
    },
    {
      id: 2,
      price: 3000,
      pic: "/images/IMG-20250701-WA0227.jpg" // make sure this image exists in /public/
    },
  ]

export default function Images() {

  return (
    <div className='img'>
      {pictures.map(pics => (
        <div key={pics.id} className='box'>
          <Image src={pics.pic} width={100} height={100}/>
          <p>price: ${pics.price}</p>
        </div>
      ))}
    </div>
  )
}
