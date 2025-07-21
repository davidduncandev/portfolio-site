import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MastadonIcon,
  BlueSkyIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/profile.png'
import { HTMLAttributeAnchorTarget } from 'react'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  ...props
}: {
  className?: string
  href: string
  target?: HTMLAttributeAnchorTarget | undefined
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        {...props}
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m David Duncan. I live in Livingston, Scotland.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m David Duncan. I live in Livingston, Scotland, where I work as a
            front-end focused software engineer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I earned a Master&apos;s degree in Astrophysics from the
              University of St Andrews in 2001. After then training and working
              as a software developer, I returned to the field of Physics when I
              was accepted into a Medical Physics trainee programme. This path
              led me to a research position in Guildford following the
              completion of an MSc in Medical Physics from the University of
              Leeds. In that role, I worked in a hybrid capacity that combined
              research with software development. I would however relocate back
              to Scotland to focus on a career as a front-end software engineer.
            </p>
            <p>
              After a few years working in front-end development, I had the
              opportunity to engage directly with users with accessibility
              needs, following an audit of the systems we were building. This
              experience was a turning point in my career, as it highlighted a
              significant gap in my skill set—accessibility. From that moment
              on, my approach to UI development fundamentally changed.
              Accessibility became a core consideration in everything I built,
              and it has remained a central focus in my work ever since.
            </p>
            <p>
              I committed myself to learning accessibility in depth—studying
              WAI-ARIA guidelines, refining my use of semantic HTML, and
              applying ARIA roles and attributes effectively. At the same time,
              I continued to advance my CSS skills to build fully responsive,
              user-friendly designs. I began leading more impactful front-end
              initiatives, such as enabling font scaling through intrinsic
              layout techniques, developing custom dark and high-contrast modes,
              collaborating with UX/UI teams to build a component library, and
              integrating Tailwind CSS into our workflow.
            </p>
            <p>
              As a Senior Developer, I deepened my expertise in component
              authoring by exploring best practices for building highly
              composable React components. This work laid the foundation for my
              transition into a Tech Lead role, where I guided the strategic
              direction of a UI Platform team. In this role, I led the
              development of a new component library and a documentation site
              featuring live, interactive component examples powered by
              Sandpack. While many components follow defined structures and
              interaction patterns outlined by the WAI-ARIA specification, my
              background in accessibility allowed us to go further—tackling more
              complex challenges beyond the basic primitives. One such
              initiative involved researching accessible form patterns and
              helping develop a suite of inclusive form components to support
              teams in building more accessible forms.
            </p>
            <p>
              I&apos;m deeply passionate about leveraging my experience to build
              capabilities that enable teams to create more accessible and
              effective user interfaces. Over time, I&apos;ve developed a strong
              intuition for crafting the right abstractions with the appropriate
              level of composition. Through close collaboration with design
              teams, I&apos;ve learned how to embed complex behaviors and
              accessibility into flexible, reusable components. By keeping these
              solutions off the critical path, we can address common visual and
              UX challenges—delivering real value to both developers and end
              users through more accessible, user-friendly interfaces.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="space-y-6">
            <SocialLink
              target="_blank"
              href="https://github.com/davidduncandev"
              icon={GitHubIcon}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/david-duncan-54b08b154/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://mastodon.social/@daveduncan"
              aria-label="Follow on Mastadon"
              icon={MastadonIcon}
            >
              Follow on Mastadon
            </SocialLink>
            <SocialLink
              href="https://bsky.app/profile/david-duncan.bsky.social"
              aria-label="Follow on Bluesky"
              icon={BlueSkyIcon}
            >
              Follow on Bluesky
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
