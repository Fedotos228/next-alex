import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Customers() {
  return (
    <div className='grid grid-cols-3 place-items-center bg-[#53067A]'>
      <div className='h-[185px] border w-full flex items-center justify-center flex-col'>
        <h3 className='text-3xl'>Our Happy Customers</h3>
        <p>(12.5k Reviews)</p>
      </div>
      <div className='h-[185px] border w-full flex items-center justify-center flex-col'>
        <Image
          src='/Groupw.png'
          alt='ww'
          width={215}
          height={90}
        />
      </div>
      <div className='h-[185px] border w-full flex items-center justify-center gap-3'>
        <Star />
        <h3 className='text-3xl'>4.7</h3>
      </div>
    </div>
  )
}
