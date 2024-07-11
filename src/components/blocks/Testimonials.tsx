import Image from 'next/image'
import Container from '../elements/Container'

export default function Testimonials() {
  return (
    <div className='mt-[50px]'>
      <Container>

        <h3 className='text-3xl text-center font-bolt mb-4'>Testimonials About Us</h3>
        <p className='text-center mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>

        <div className='border rounded-xl'>
          <div className='max-w-[70%] mx-auto  flex items-center justify-center gap-5 py-[100px]'>
            <Image
              src="/Mask.png"
              alt='pizet'
              width={136}
              height={136}
            />
            <div className=''>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. Sagittis non augue elementum vehicula id. Urna vulputate nunc aliquet sapien. </p>
              <h4 className='text-lg text-yellow-500'>Melissa Carson</h4>
              <p>Alexandria, LA</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
