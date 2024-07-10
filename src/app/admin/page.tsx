import EditHero from '@/components/blocks/Hero/EditHero'
import { db } from '@/db/intex'

export default async function page() {
  const [hero] = await db.hero.findMany()

  return (
    <div>
      <EditHero hero={hero} />
    </div>
  )
}
