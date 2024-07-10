import { db } from '@/db/intex'

export default async function Hero() {
  const hero = await db.hero.findMany()
  return (
    <div>{JSON.stringify(hero)}</div>
  )
}
