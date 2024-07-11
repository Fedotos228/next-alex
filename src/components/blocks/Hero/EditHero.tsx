'use client'

import { editHero } from '@/actions/edit-hero'
import type { Hero } from '@prisma/client'
import React from 'react'

export default function EditHero({ hero }: { hero: Hero }) {
  const [heroData, setHeroData] = React.useState<Hero>(hero)

  const handleSetTitle = (title: string) => {
    if (heroData) {
      setHeroData({ ...heroData, title })
    }
  }
  const handleSetSubTitle = (subtitle: string) => {
    if (heroData) {
      setHeroData({ ...heroData, subtitle })
    }
  }
  const handleSetImage = (image: string) => {
    if (heroData) {
      setHeroData({ ...heroData, image })
    }
  }

  return (
    <div>
      <h1>Edit Hero</h1>
      <form action={(formData) => editHero(formData, hero.id)} className='bg-blue-900 p-6'>
        <label htmlFor="title" className='text-white'>
          Title
          <input
            type="text"
            name='title'
            value={heroData.title ? heroData.title : ''}
            onChange={(event) => handleSetTitle(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <label htmlFor="subtitle" className='text-white'>
          Subtitle
          <input
            type="text"
            name='subtitle'
            value={heroData.subtitle ? heroData.subtitle : ''}
            onChange={(event) => handleSetSubTitle(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <label htmlFor="image" className='text-white'>
          Image
          <input
            type="text"
            name='image'
            value={heroData.image ? heroData.image : ''}
            onChange={(event) => handleSetImage(event.target.value)}
            className='text-white bg-transparent border p-3 rounded-md border-white w-full'
          />
        </label>
        <button type='submit' className='w-full p-3 text-blue-900 bg-white rounded-sm '>Submit</button>
      </form>
    </div>
  )
}
