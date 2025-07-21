import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Skunkworks UI',
    description:
      'Still at the initial stage, Skunkworks UI will be a collection of insights, experiments, and practical solutions tackling common challenges of UI development—from nuanced UX patterns and technical implementation hurdles.',
    link: {
      href: 'https://github.com/davidduncandev/skunkworks-ui',
      label: 'github.com',
    },
  },
  {
    name: 'ResizeContainer',
    description:
      'A component which track changes in an elements dimensions via ResizeObserver API.',
    link: {
      href: 'https://github.com/davidduncandev/skunkworks-ui/tree/develop/packages/resize-container',
      label: 'github.com',
    },
  },
  {
    name: 'Extended Click Area Component',
    description:
      'Using a redundant click handler technique to extend the click area of a component.',
    link: { href: '#', label: 'github.com' },
    status: 'Coming Soon',
  },
  {
    name: 'CSS Subgrid - cross-card alignment',
    description:
      'A tailwind play to demonstrate using subgrid where the definition of its rows are deferred to the parent grid.',
    link: { href: '#', label: 'github.com' },
    status: 'Coming Soon',
  },
  {
    name: 'Toggle View component',
    description:
      'A React component which allows a section of UI to transition from read-only to editable mode, with correct focus management.',
    link: {
      href: 'https://github.com/davidduncandev/skunkworks-ui/tree/develop/packages/toggle-view',
      label: 'github.com',
    },
  },
  {
    name: 'useToggleView hook',
    description:
      'A React hook to facilitate the toggling of two views with correct management of focus.',
    link: {
      href: 'https://github.com/davidduncandev/skunkworks-ui/blob/develop/packages/hooks/src/use-toggle-view.ts',
      label: 'github.com',
    },
  },
  {
    name: 'Priority + Navigation pattern',
    description:
      'A React implementation of a priority + navigation pattern where navigation items responsively "drop" into an overflow menu.',
    link: { href: '#', label: 'github.com' },
    status: 'Coming Soon',
  },
  {
    name: 'Grid dividers',
    description:
      'A tailwind play investigating how to add dividers to a grid layout. Slightly unusual use case where a divider was needed between second and third grid item, and with center alignment when 3rd item wraps.',
    link: {
      href: 'https://play.tailwindcss.com/wiGic5A0YR',
      label: 'tailwind play',
    },
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Things I’ve made as I strive to solve common visual, UX and technical challenges.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects"
      intro="Things I’ve made as I strive to solve common visual, UX and technical challenges and drive accessibility standards."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className="gap-2">
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            {project?.status && (
              <span className="rounded-lg bg-emerald-50/50 px-1.5 font-mono text-[0.625rem] leading-6 font-semibold text-emerald-900 ring-1 ring-emerald-500 ring-inset dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30">
                {project.status}
              </span>
            )}
            <Card.Description className="grow">
              {project.description}
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
