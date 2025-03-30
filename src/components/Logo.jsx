import { useId } from 'react'
import Link from 'next/link'

export function Logo(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 140 32" fill="none" aria-hidden="true" className="w-full h-full" {...props}>
      <title>DRT Electric</title>
      <mask id={`${id}-m`} fill="#fff">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
        fill={`url(#${id}-g)`}
      />
      <path
        d="M31.75 18l1 .12.13-1.12h-1.13v1zm-8.13 0v-1h-.77l-.2.75.97.25zm-15.5 0l.98-.25-.2-.75h-.77v1zM0 18v-1h-1.13l.14 1.12L0 18zm23.62-4l-.96.25.19.75h.77v-1zm8.13 0v1h1.13l-.14-1.12-.99.12zM8.13 14v1h.77l.2-.75-.97-.25zM0 14l-1-.12-.13 1.12H0v-1zm31.75 3h-8.13v2h8.13v-2zm-9.1.75A7 7 0 0115.89 23v2a9 9 0 008.71-6.75l-1.93-.5zM15.89 23a7 7 0 01-6.78-5.25l-1.94.5A9 9 0 0015.88 25v-2zm-7.75-6H0v2h8.13v-2zm7.75 14A15 15 0 01.99 17.88l-1.98.24A17 17 0 0015.88 33v-2zm14.88-13.12A15 15 0 0115.88 31v2a17 17 0 0016.86-14.88l-1.98-.24zM23.62 15h8.13v-2h-8.13v2zm-7.74-6a7 7 0 016.78 5.25l1.93-.5A9 9 0 0015.88 7v2zM9.1 14.25A7 7 0 0115.88 9V7a9 9 0 00-8.72 6.75l1.94.5zM0 15h8.13v-2H0v2zm1-.88A15 15 0 0115.87 1v-2A17 17 0 00-1 13.88l1.98.24zM15.87 1a15 15 0 0114.88 13.12l1.98-.24A17 17 0 0015.88-1v2z"
        fill="#fff"
        fillOpacity={0.2}
        mask={`url(#${id}-m)`}
      />
      <path
        d="M42 24h4.7c5.9 0 9.4-3.3 9.4-8.8 0-5.4-3.5-8.8-9.4-8.8H42V24zm4.5-14.2c3.7 0 5.7 2.1 5.7 5.4 0 3.3-2 5.4-5.7 5.4h-1V9.8h1zm10.2 14.2h3.4V11h-3.4v13zm1.7-15.2c1.1 0 2-.8 2-1.8 0-1-.9-1.8-2-1.8-1.1 0-2 .8-2 1.8 0 1 .9 1.8 2 1.8zm5.7 15.2h3.4v-7.5c0-2.3 1.2-3.7 3-3.7s2.8 1.3 2.8 3.5V24h3.4v-8.4c0-3.7-1.9-5-4.6-5-2 0-3.7 1-4.5 2.7h-.1V11h-3.4v13z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id={`${id}-g`}
          x1={15.88}
          y1={0}
          x2={15.88}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4ADE80" />
          <stop offset={1} stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function LogoFull(props) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex items-center pointer-events-auto"
      {...props}
    >
      <div className="w-14 h-14 bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10 flex items-center justify-center">
        <Logo className="w-12 h-12" />
      </div>
      <span className="ml-5 text-2xl font-bold text-zinc-900 dark:text-zinc-100">DRT Electric</span>
    </Link>
  )
}
