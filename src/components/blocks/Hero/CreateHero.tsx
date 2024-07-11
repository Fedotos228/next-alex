'use client'

import { createHero } from '@/actions/create-hero'
import React from 'react'

export default function CreateHero() {
  const [hero, setHero] = React.useState({
    title: '',
    subtitle: '',
    image: ''
  })

  const handleSetTitle = (title: string) => {
    setHero({ ...hero, title })
  }
  const handleSetSubTitle = (subtitle: string) => {
    setHero({ ...hero, subtitle })
  }
  const handleSetImage = (image: string) => {
    setHero({ ...hero, image })
  }

  return (
    <div>
      <h1>Create Hero</h1>
      <form action={createHero} className='bg-blue-900 p-6'>
        <label htmlFor="title" className='text-white'>
          Title
          <input
            type="text"
            name='title'
            value={hero.title}
            onChange={(event) => handleSetTitle(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <label htmlFor="subtitle" className='text-white'>
          Subtitle
          <input
            type="text"
            name='subtitle'
            value={hero.subtitle}
            onChange={(event) => handleSetSubTitle(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <label htmlFor="image" className='text-white'>
          Image
          <input
            type="text"
            name='image'
            value={hero.image}
            onChange={(event) => handleSetImage(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <button type='submit' className='w-full p-3 text-blue-900 bg-white rounded-sm '>Submit</button>
      </form>
    </div>
  )
}
