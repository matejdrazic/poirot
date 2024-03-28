import React from 'react'
import Image from 'next/image'
import logoImage from '../../../public/logo.png'

const Logo = () => {
  return (
    <Image
        src={logoImage}
        width={50}
        height={100}
        alt='logo-image'
        className='mix-blend-hard-dodge'
    />
  )
}

export default Logo