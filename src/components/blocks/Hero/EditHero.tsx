'use client'

import { editHero } from '@/actions/edit-hero'
import type { Hero } from '@prisma/client'
import React from 'react'

export default function EditHero({ hero }: { hero: Hero }) {
  const [title, setTitle] = React.useState(hero.title)
  const [subTitle, setSubTitle] = React.useState(hero.subtitle)
  const [image, setImage] = React.useState(hero.image)

  return (
    <form action={editHero} className='bg-blue-900 p-6'>
      <label htmlFor="title" className='text-white'>
        Title
        <input
          type="text"
          name='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className='text-white bg-transparent border p-3 rounded-md border-white w-full'
        />
      </label>
      <label htmlFor="subtitle" className='text-white'>
        Subtitle
        <input
          type="text"
          name='subtitle'
          value={subTitle}
          onChange={(event) => setSubTitle(event.target.value)}
          className='text-white bg-transparent border p-3 rounded-md border-white w-full'
        />
      </label>
      <label htmlFor="image" className='text-white'>
        Image
        <input
          type="text"
          name='image'
          value={image}
          onChange={(event) => setImage(event.target.value)}
          className='text-white bg-transparent border p-3 rounded-md border-white w-full'
        />
      </label>
      <button type='submit' className='w-full p-3 text-blue-900 bg-white rounded-sm '>Submit</button>
    </form>
  )
}
