import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from "@/images/first-page/photo6.jpeg"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Despre noi',
  description:
    "DRT Electric - Furnizor de servicii electrice profesionale în România",
}

export default function Despre() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Echipa DRT Electric"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            DRT Electric - Expertiza și profesionalism în instalații electrice
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Cu o experiență de peste 15 ani în domeniul instalațiilor electrice, DRT Electric a devenit un nume de referință pe piața din România. Echipa noastră de electricieni certificați este dedicată furnizării unor servicii de cea mai înaltă calitate pentru clienții noștri.
            </p>
            <p>
              Am început ca o mică afacere locală, dar prin seriozitate, profesionalism și respectarea promisiunilor față de clienți, am crescut constant, dezvoltându-ne atât în sectorul rezidențial cât și în cel industrial și comercial.
            </p>
            <p>
              Proiectele noastre de succes includ colaborări cu mari companii precum Pepsi-Cola, instituții medicale ca Maternitatea Bega din Timișoara și numeroase afaceri locale. Ne mândrim cu instalațiile electrice durabile, sigure și eficiente pe care le-am realizat de-a lungul anilor.
            </p>
            <p>
              La DRT Electric, credem că fiecare proiect, indiferent de dimensiune, merită aceeași atenție la detalii și dedicare pentru excelență. Ne străduim constant să ne perfecționăm tehnicile și să rămânem la curent cu cele mai noi tehnologii din domeniu pentru a oferi cele mai bune soluții clienților noștri.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Urmăriți-ne pe X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Urmăriți-ne pe Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Urmăriți-ne pe GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Urmăriți-ne pe LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@drtelectric.ro"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@drtelectric.ro
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
} 