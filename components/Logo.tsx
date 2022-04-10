import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <a href="/" className="flex items-center gap-2 md:text-3xl">
        <Image src="/img/logo-lite.svg" height={40} width={40} />
        <span>CodeX</span>
      </a>
    </Link>
  )
}

export default Logo
