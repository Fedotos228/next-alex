import Image from 'next/image'
import Link from 'next/link'
import Container from '../elements/Container'

export default function Header() {
  return (
    <header className='absolute top-0 right-0 left-0 w-full py-8 z-50'>
      <Container className='flex items-center justify-between'>
        <Image
          src="/PETUK.svg"
          alt="Logo"
          width={200}
          height={50}
        />
        <nav className='flex items-center gap-5 '>
          <Link href='#'>
            Home
          </Link>
          <Link href='#'>
            Product
          </Link>
          <Link href='#'>
            Customers
          </Link>
          <Link href='#'>
            Pricing
          </Link>
          <Link href='#'>
            Docs
          </Link>
        </nav>
      </Container>
    </header>
  )
}
