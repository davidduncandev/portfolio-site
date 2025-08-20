import { z } from 'zod'
import { highlight } from 'codehike/code'
import { Block, CodeBlock, parseRoot } from 'codehike/blocks'

import { CodeSwitcher } from './code'
import AnnounceDemo from './announce.mdx'
import PortalDemo from './portal.mdx'
import UseAnnounceDemo from './useannounce.mdx'

export async function Announce() {
  const { code } = parseRoot(
    AnnounceDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Announce" />
}

export async function Portal() {
  const { code } = parseRoot(
    PortalDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Portal" />
}

export async function UseAnnounce() {
  const { code } = parseRoot(
    UseAnnounceDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )
  return <CodeSwitcher infos={infos} name="Use Announce" />
}
