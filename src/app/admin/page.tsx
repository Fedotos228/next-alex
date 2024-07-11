import CreateHero from '@/components/blocks/Hero/CreateHero'
import EditHero from '@/components/blocks/Hero/EditHero'
import { db } from '@/db/intex'

export default async function page() {
  const [hero] = await db.hero.findMany()

  return (
    <div>
      {hero ? <EditHero hero={hero} /> : <CreateHero />}
    </div>
  )
}