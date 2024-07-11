import Container from '../elements/Container'

export default function Programs() {
  return (
    <div className='mt-10'>
      <Container className=''>
        <h2 className='text-4xl font-bold text-center mb-4 text-[#FFE27C]'>Our Best Programs</h2>

        <p className='text-center mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor scelerisque nisl .</p>

        <div className='grid md:grid-cols-3 gap-5'>

          <div className='shadow-custom flex flex-col items-center justify-center rounded-xl p-4'>
            <img src="/1.svg" alt="asd" />
            <h4 className='bolt text-xl'>Healthy Recipe</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='mt-3 hover:underline'>Learn More</button>
          </div>
          <div className='yellow-gradient rounded-xl  flex flex-col items-center justify-center p-4'>
            <img src="/2.svg" alt="asd" className='' />
            <h4 className='bolt text-xl'>Healthy Meals</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='mt-3 hover:underline'>Learn More</button>
          </div>
          <div className='shadow-custom flex flex-col items-center justify-center rounded-xl p-4'>
            <img src="/3.svg" alt="asd" />
            <h4 className='bolt text-xl'>Healthy Lifes</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className='mt-3 hover:underline'>Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  )
}
