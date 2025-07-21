'use client'

import React from 'react'
import {
  InlineAnnotation,
  AnnotationHandler,
  HighlightedCode,
} from 'codehike/code'
import clsx from 'clsx'
import { Pre } from 'codehike/code'
import { tokenTransitions } from '@/components/annotations/token-transitions'
import { Switch } from '@/components/switch'
import * as Headless from '@headlessui/react'
import { Label } from '@/components/fieldset'

export function CodeSwitcher({
  infos,
  name,
  className,
}: {
  readonly infos: readonly HighlightedCode[]
  readonly name: string
  readonly className?: string
}) {
  const [index, setIndex] = React.useState(0)
  const next = () => setIndex((index + 1) % infos.length)

  return (
    // <div className="grid-rows-[1fr auto] grid h-full gap-4">
    <CodeClient highlighted={infos[index]} className={className} />
    // <div className="mt-auto text-center font-light text-white">
    // <Headless.Field className="flex items-center justify-center gap-4">
    // <Switch onChange={next} aria-label={name} className="bg-zinc-500" />
    // <Label>{name}</Label>
    // </Headless.Field>
    // </div>
    // </div>
  )
}

type CodeClientProps = Readonly<{
  highlighted: HighlightedCode
  className?: string
}>

export function CodeClient(props: Readonly<CodeClientProps>) {
  const { highlighted, className } = props
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions, callout]}
      style={highlighted.style}
      className={clsx('!bg-zinc-800', className)}
    />
  )
}

const callout: AnnotationHandler = {
  name: 'callout',
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    }
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className="relative mt-1 -ml-[1ch] w-fit rounded border border-current bg-zinc-800 px-2 whitespace-break-spaces"
        >
          <div
            style={{ left: `${column}ch` }}
            className="absolute -top-[1px] h-2 w-2 -translate-y-1/2 rotate-45 border-t border-l border-current bg-zinc-800"
          />
          {annotation.query}
        </div>
      </>
    )
  },
}
