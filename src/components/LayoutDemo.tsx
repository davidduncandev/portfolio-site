import React from 'react'
import { AnimateContainer } from './DemoContainers'

export function LayoutDemo() {
  return (
    <AnimateContainer name="Intrinsic Responsiveness">
      <div className="flex h-full flex-wrap gap-4">
        <div className="grow basis-12 border-2 border-zinc-400 p-4 dark:text-white">
          <div className="flex flex-wrap gap-2 *:grow">
            <div className="border-2 border-zinc-400 p-4 dark:text-white" />
            <div className="border-2 border-zinc-400 p-4 dark:text-white" />
            <div className="border-2 border-zinc-400 p-4 dark:text-white" />
            <div className="border-2 border-zinc-400 p-4 dark:text-white" />
          </div>
        </div>
        <div className="grid min-w-[60%] grow-[999] basis-0 border-2 border-zinc-400 p-4 dark:text-white">
          <div className="grid grid-cols-[repeat(var(--ui-grid-auto-place,auto-fill),minmax(min(var(--ui-grid-min,5rem),100%),1fr))] gap-4 *:border-2">
            <div className="border-2 border-zinc-400 p-6 dark:text-white" />
            <div className="border-2 border-zinc-400 p-6 dark:text-white" />
          </div>
        </div>
      </div>
    </AnimateContainer>
  )
}
