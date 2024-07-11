'use server'

import { db } from '@/db/intex'

export async function editHero(formData: FormData, id: string) {
  await db.hero.update({
    where: { id: id },
    data: {
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      image: formData.get('image') as string,
    }
  })
}