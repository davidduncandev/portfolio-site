import React from 'react'
import { AnimateContainer, ScaleContainer } from './DemoContainers'

export function SidebarLayoutDemo() {
  return (
    <ScaleContainer name="Sidebar">
      <div className="flex flex-wrap gap-4 *:p-12">
        <div className="grid grow basis-[6em] place-content-center border-2 border-zinc-400 p-4 sm:basis-[10em] dark:text-white">
          Bar
        </div>
        <div className="grid min-w-[50%] grow-[999] basis-0 place-content-center border-2 border-zinc-400 p-4 dark:text-white">
          Principal
        </div>
      </div>
    </ScaleContainer>
  )
}

export function SidebarResizeDemo() {
  return (
    <AnimateContainer name="Sidebar">
      <div className="flex flex-wrap gap-4 *:p-12">
        <div className="grid grow basis-[6rem] place-content-center border-2 border-zinc-400 p-4 sm:basis-42 dark:text-white">
          Bar
        </div>
        <div className="grid min-w-[50%] grow-[999] basis-0 place-content-center border-2 border-zinc-400 p-4 dark:text-white">
          Principal
        </div>
      </div>
    </AnimateContainer>
  )
}

export function ComplexLayoutDemo() {
  return (
    <AnimateContainer name="Complex Layout">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--ui-grid-min,12rem),100%),1fr))] gap-4">
        <div className="border-2 border-zinc-400 p-4 dark:text-white">
          <p className="my-2">SideBar</p>
          <div className="flex flex-wrap gap-4">
            <div className="grid grow basis-12 place-content-center border-2 border-zinc-400 p-6 dark:text-white"></div>
            <div className="grid min-w-[60%] grow-[999] basis-0 border-2 border-zinc-400 p-4 dark:text-white">
              <p className="my-2">Cluster</p>
              <div className="flex flex-wrap gap-2">
                <div className="border border-zinc-400 p-4 px-2 dark:text-white"></div>
                <div className="border border-zinc-400 p-4 dark:text-white"></div>
                <div className="border border-zinc-400 p-4 px-6 dark:text-white"></div>
                <div className="border border-zinc-400 p-4 px-6 dark:text-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-zinc-400 p-4 dark:text-white">
          <p className="m-2">Grid</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--ui-grid-min,6rem),100%),1fr))] gap-4">
            <div className="border-2 border-zinc-400 p-2 dark:text-white">
              <p className="my-2">Switcher</p>
              <div className="flex flex-wrap gap-4 [&>*]:basis-[calc((var(--ui-switcher-threshold,8.5rem)-100%)*999)]">
                <div className="border border-zinc-400 p-4 dark:text-white"></div>
                <div className="border border-zinc-400 p-4 dark:text-white"></div>
                <div className="border border-zinc-400 p-4 dark:text-white"></div>
              </div>
            </div>
            <div className="border-2 border-zinc-400 p-6 dark:text-white">
              <p className="my-2">Grid</p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(var(--ui-grid-min,4rem),100%),1fr))] gap-4">
                <div className="border border-zinc-400 p-6 dark:text-white" />
                <div className="border border-zinc-400 p-6 dark:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateContainer>
  )
}
