'use client'

import React from 'react'
import { HighlightedCode } from 'codehike/code'
import { Pre } from 'codehike/code'
import { tokenTransitions } from '@/components/annotations/token-transitions'
import { HeadlessSwitch as Switch } from '@/components/HeadlessSwitch'
import * as Headless from '@headlessui/react'
import { HeadlessLabel as Label } from '@/components/HeadlessFieldset'

export function CodeSwitcher({
  infos,
  name,
}: {
  readonly infos: readonly HighlightedCode[]
  readonly name: string
}) {
  const [index, setIndex] = React.useState(0)
  const next = () => setIndex((index + 1) % infos.length)

  return (
    <div className="grid-rows-[1fr auto] grid h-full gap-4">
      <CodeClient highlighted={infos[index]} />
      <div className="mt-auto text-center font-light text-white">
        <Headless.Field className="flex items-center justify-center gap-4">
          <Switch onChange={next} aria-label={name} className="bg-zinc-500" />
          <Label className="!text-white">{name}</Label>
        </Headless.Field>
      </div>
    </div>
  )
}

export function CodeClient(props: Readonly<{ highlighted: HighlightedCode }>) {
  const { highlighted } = props
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions]}
      style={highlighted.style}
      className="!bg-zinc-800"
    />
  )
}
