'use server'

import { db } from '@/db/intex'

export async function createHero(formData: FormData) {
  await db.hero.create({
    data: {
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      image: formData.get('image') as string,
    }
  })
}