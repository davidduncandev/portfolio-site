import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'
import type { AnnotationHandler, RawCode } from 'codehike/code'
import { InlineAnnotation, Pre, highlight } from 'codehike/code'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    Code: async function Code({ codeblock }: { codeblock: RawCode }) {
      const highlighted = await highlight(codeblock, 'github-light')
      return (
        <Pre code={highlighted} handlers={[callout]}>
          {codeblock.value}
        </Pre>
      )
    },
  }
}

const borderHandler: AnnotationHandler = {
  name: 'border',
  Block: ({ annotation, children }) => (
    <div style={{ border: '1px solid red' }}>{children}</div>
  ),
}

const bgHandler: AnnotationHandler = {
  name: 'bg',
  Inline: ({ annotation, children }) => (
    <span style={{ background: '#2d26' }}>{children}</span>
  ),
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
