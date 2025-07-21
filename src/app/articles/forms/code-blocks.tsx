import { z } from 'zod'
import { highlight } from 'codehike/code'
import { Block, CodeBlock, parseRoot } from 'codehike/blocks'

import { CodeSwitcher } from './code'
import FocusTransferDemo from './focus-transfer.mdx'
import DescendantsDemo from './descendants.mdx'
import FormAnatomyDemo from './form-anatomy.mdx'
import FormGroupAnatomyDemo from './form-group-anatomy.mdx'

export async function FocusTransfer() {
  const { code } = parseRoot(
    FocusTransferDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Focus stuff" />
}

export async function Descendants() {
  const { code } = parseRoot(
    DescendantsDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Descendants stuff" />
}

export async function FormAnatomy() {
  const { code } = parseRoot(
    FormAnatomyDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Form anatomy" />
}

export async function FormGroupAnatomy() {
  const { code } = parseRoot(
    FormGroupAnatomyDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Form anatomy" />
}
