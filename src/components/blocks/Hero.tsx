import Image from 'next/image'
import Container from '../elements/Container'

export default async function Hero() {
  return (
    <div className='bg-[#53067A]'>
      <Container className='relative h-screen'>
        <div className='absolute top-1/2 max-w-[500px] -translate-y-1/2'>
          <h1 className='text-white text-[72px]'>Make your {''}
            <span className='text-yellow-400'>healthy day </span> with Petuk
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl neque a, tristique libero blandit quam. Odio sed tellus phasellus pellentesque.</p>
          <button>
            Get Started
          </button>
        </div>
        <div>
          <Image
            src={'/woman.png'}
            alt='Hero'
            width={500}
            height={500}
            className='absolute right-0 top-1/2 -translate-y-1/2'
          />
        </div>
      </Container>
    </div>
  )
}
