'use server'

import { db } from '@/db/intex'

export async function editHero(formData: FormData) {
  await db.hero.update({
    where: { id: 'clygb3ssd0000s3j46fyhs0kd' },
    data: {
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      image: formData.get('image') as string,
    }
  })
}