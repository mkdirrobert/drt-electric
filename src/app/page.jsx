import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { MdOutlineHomeWork } from 'react-icons/md'
import { GiFactory, GiElectric, GiSmartphone } from 'react-icons/gi'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/first-page/photo1.jpeg'
import image2 from '@/images/first-page/photo2.jpeg'
import image3 from '@/images/first-page/photo3.jpeg'
import image4 from '@/images/first-page/photo4.jpeg'
import image5 from '@/images/first-page/photo5.jpeg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
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

function ArrowDownIcon(props) {
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

function Project({ project }) {
  return (
    <Card as="article">
      <Card.Eyebrow as="time" dateTime={project.date} decorate>
        {project.date}
      </Card.Eyebrow>
      <Card.Title href="#">
        {project.title}
      </Card.Title>
      <Card.Description>{project.description}</Card.Description>
      <Card.Cta>Vezi proiectul</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  // Helper function to get bg color based on icon color
  const getBgColor = (iconColor) => {
    if (iconColor?.includes('blue')) return 'bg-blue-100 dark:bg-blue-900/20'
    if (iconColor?.includes('amber')) return 'bg-amber-100 dark:bg-amber-900/20'
    if (iconColor?.includes('red')) return 'bg-red-100 dark:bg-red-900/20'
    if (iconColor?.includes('purple')) return 'bg-purple-100 dark:bg-purple-900/20'
    return 'bg-teal-100 dark:bg-teal-900/20'
  }

  return (
    <li className="flex gap-5">
      <div className={clsx(
        "relative mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0",
        getBgColor(role.iconColor)
      )}>
        {role.icon && (
          <role.icon className={clsx(
            "h-7 w-7",
            role.iconColor || "text-teal-500 dark:text-teal-400"
          )} />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-sm text-zinc-500 dark:text-zinc-400">
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
  let services = [
    {
      company: 'Servicii Rezidențiale',
      title: 'Soluții electrice pentru locuințe',
      icon: MdOutlineHomeWork,
      iconColor: "text-blue-500 dark:text-blue-400",
      start: '',
      end: {
        label: '',
        dateTime: '',
      },
    },
    {
      company: 'Proiecte Comerciale',
      title: 'Sisteme electrice pentru afaceri',
      icon: GiFactory,
      iconColor: "text-amber-500 dark:text-amber-400",
      start: '',
      end: '',
    },
    {
      company: 'Mentenanță și Reparații',
      title: 'Depanare și rezolvarea problemelor',
      icon: GiElectric,
      iconColor: "text-red-500 dark:text-red-400",
      start: '',
      end: '',
    },
    {
      company: 'Integrare Smart Home',
      title: 'Soluții moderne de automatizare',
      icon: GiSmartphone,
      iconColor: "text-purple-500 dark:text-purple-400",
      start: '',
      end: '',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40 w-full">
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-7 w-7 flex-none" />
        <span className="ml-3">Servicii</span>
      </h2>
      <ol className="mt-8 space-y-6">
        {services.map((service, serviceIndex) => (
          <Role key={serviceIndex} role={service} />
        ))}
      </ol>
      <Button href="/despre" variant="secondary" className="group mt-8 w-full text-base">
        Contactați-ne
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let projects = [
    {
      title: 'Pepsi-Cola',
      date: 'Decembrie 2023',
      description: 'Instalație electrică completă pentru fabrica Pepsi-Cola. Proiectul a inclus sisteme industriale de mare putere, automatizare avansată și soluții de eficiență energetică pentru întreaga unitate de producție.',
    },
    {
      title: 'Maternitatea Bega din Timișoara',
      date: 'Martie 2023',
      description: 'Modernizarea completă a instalațiilor electrice pentru Maternitatea Bega. Am implementat sisteme de siguranță critică pentru mediul medical, iluminat specializat și infrastructură electrică de înaltă fiabilitate pentru echipamentele medicale.',
    },
    {
      title: 'Zuba Construct',
      date: 'Iunie 2022',
      description: 'Proiectare și implementare a instalațiilor electrice pentru noul sediu Zuba Construct. Soluții inteligente de automatizare a clădirii, sistem de securitate integrat și infrastructură electrică eficientă pentru birouri și spații de producție.',
    },
  ]

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Soluții electrice profesionale pentru casa și afacerea dumneavoastră.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Bine ați venit la DRT Electric, partenerul dumneavoastră de încredere pentru servicii electrice profesionale. Oferim instalații electrice, mentenanță și reparații de înaltă calitate, cu accent pe siguranță, fiabilitate și satisfacția clienților. Echipa noastră de electricieni certificați aduce expertiză și inovație în fiecare proiect, fie el mare sau mic.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Proiecte de referință
            </h2>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
          <div className="lg:pl-10">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
