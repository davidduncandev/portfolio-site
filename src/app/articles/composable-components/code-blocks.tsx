import { z } from 'zod'
import { highlight } from 'codehike/code'
import { Block, CodeBlock, parseRoot } from 'codehike/blocks'

import { CodeSwitcher } from './code'
import CompositionDemo from '../../demos/composition-slideshow.mdx'
import ForwardRefDemo from './demos/forward-ref-slideshow.mdx'
import AsChildDemo from './demos/aschild-slideshow.mdx'
import ComposeClassNames from './demos/compose-classnames.mdx'
import ComposeRefDemo from './demos/compose-ref.mdx'
import ComposeEventHandlerDemo from './demos/compose-event-handlers.mdx'

export async function ComposableTabs() {
  const { code } = parseRoot(
    CompositionDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Composition" />
}

export async function ForwardRef() {
  const { code } = parseRoot(
    ForwardRefDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="forwardRef" className="min-h-80" />
}

export async function AsChild() {
  const { code } = parseRoot(
    AsChildDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="asChild" className="min-h-[33rem]" />
}

export async function ClassNames() {
  const { code } = parseRoot(
    ComposeClassNames,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="asChild" className="min-h-[30rem]" />
}

export async function ComposeRefs() {
  const { code } = parseRoot(
    ComposeRefDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return (
    <CodeSwitcher infos={infos} name="Compose refs" className="min-h-[32rem]" />
  )
}

export async function ComposeEventHandlers() {
  const { code } = parseRoot(
    ComposeEventHandlerDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return (
    <CodeSwitcher
      infos={infos}
      name="Compose Event Handlers"
      className="min-h-[29rem]"
    />
  )
}
