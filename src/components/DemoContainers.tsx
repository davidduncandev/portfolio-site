'use client'
import React, { ReactNode, useState } from 'react'
import { Switch } from '@/components/switch'
import { Label } from '@/components/fieldset'
import * as Headless from '@headlessui/react'

export const AnimateContainer = ({
  children,
  name,
}: {
  children: ReactNode
  name: string
}) => {
  const [playing, setPlaying] = useState(false)
  const togglePlaying = () => setPlaying(!playing)
  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-4">
      <div
        className={`relative animate-wiggle ${
          playing
            ? '[animation-play-state:running]'
            : '![animation-play-state:paused]'
        }`}
      >
        {children}
      </div>
      <div className="grid place-content-center">
        <Headless.Field className="flex items-center justify-center gap-4">
          <Switch
            onChange={togglePlaying}
            aria-label={'Play Animation'}
            className="bg-zinc-500"
          />
          <Label className="!text-white">{name}</Label>
        </Headless.Field>
      </div>
    </div>
  )
}

export const ResizeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative resize-x overflow-auto px-2 py-6">
      <span className="text-emerald-500 after:absolute after:right-4 after:bottom-0 after:content-['Resize_me']" />
      {children}
    </div>
  )
}
