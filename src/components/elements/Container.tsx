import { cn } from '@/lib/utils'
import type { PropsWithChildren } from 'react'

export default function Container({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('max-w-[1200px] mx-auto', className)}>{children}</div>
}
