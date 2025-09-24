import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='f-center h-screen w-full'>
        <Image alt='404' src={"/images/404.png"} width={250} height={250}/>
    </div>
  )
}

export default NotFound