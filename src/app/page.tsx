import Link from 'next/link'
import clsx from 'clsx'

import { highlight } from 'codehike/code'
import { Block, CodeBlock, parseRoot } from 'codehike/blocks'
import { z } from 'zod'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { LayoutDemo } from '@/components/LayoutDemo'
import { AspectRatioDemo } from '@/components/AspectRatioDemo'
import {
  GitHubIcon,
  LinkedInIcon,
  MastadonIcon,
  BlueSkyIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import CompositionDemo from './demos/composition-slideshow.mdx'
import { CodeSwitcher } from './code'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Sky',
      title: 'Technical Lead',
      start: 'Jan 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Sky',
      title: 'Senior Developer',
      start: '2021',
      end: '2024',
    },
    {
      company: 'Sky',
      title: 'Developer',
      start: '2013',
      end: '2021',
    },
    {
      company: 'NHS',
      title: 'Research Physicist',
      start: '2012',
      end: '2013',
    },
    {
      company: 'NHS',
      title: 'Trainee Clinical Scientist',
      start: '2009',
      end: '2012',
    },
    {
      company: 'Sky',
      title: 'Application Support Developer',
      start: '2004',
      end: '2009',
    },
    {
      company: 'FDM Group',
      title: 'Developer',
      start: '2002',
      end: '2004',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  const { code } = parseRoot(
    CompositionDemo,
    Block.extend({ code: z.array(CodeBlock) }),
  )

  const infos = await Promise.all(
    code.map((codeblock: any) => highlight(codeblock, 'github-dark-dimmed')),
  )

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            David Duncan
          </h1>
          <p className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400">
            <span className="block">
              I’m David, a front-end software engineer with a deep commitment to
              web accessibility. I work to solve common visual, UX, and
              technical challenges in ways that enhance accessibility for all
              users.
            </span>
            <small className="text-zinc-800 dark:text-zinc-300">
              ‹ HTML • CSS • Design&nbsp;Systems • JS • Typescript • React •
              a11y ›
            </small>
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              target="_blank"
              href="https://github.com/davidduncandev"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/david-duncan-54b08b154/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://mastodon.social/@daveduncan"
              aria-label="Follow on Mastadon"
              icon={MastadonIcon}
            />
            <SocialLink
              href="https://bsky.app/profile/david-duncan.bsky.social"
              aria-label="Follow on Bluesky"
              icon={BlueSkyIcon}
            />
          </div>
        </div>
      </Container>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20">
        <div className="-my-4 grid grid-cols-[repeat(var(--ui-grid-auto-place,auto-fill),minmax(min(var(--ui-grid-min,20rem),100%),1fr))] gap-5 py-4 *:min-h-[23rem]">
          <div
            className={clsx(
              'relative w-full flex-none rounded-xl bg-zinc-800 p-4 sm:rounded-2xl',
              'rotate-2',
            )}
          >
            <CodeSwitcher infos={infos} name="Composition" />
          </div>
          <div
            className={clsx(
              'relative w-full flex-none rounded-xl bg-zinc-800 p-4 sm:rounded-2xl',
              '-rotate-2',
            )}
          >
            <LayoutDemo />
          </div>
          <div
            className={clsx(
              'relative w-full flex-none rounded-xl bg-zinc-800 p-4 sm:rounded-2xl',
              'rotate-2',
            )}
          >
            <AspectRatioDemo />
          </div>
        </div>
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
