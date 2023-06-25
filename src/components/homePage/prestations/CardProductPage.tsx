import React from 'react'
import Image from 'next/image'

function CardProductPage({name, description, image, id}) {
  return (
    <div className='w-1/2 flex flex-col'>
        <div className=' flex '>
            <h1>{name}</h1>
            <Image src={image} width={100} height={100} alt={name}/>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default CardProductPage