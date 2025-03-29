import { redirect } from 'next/navigation'

export default function Article({ params }) {
  const { slug } = params
  redirect(`/proiecte/${slug}`)
}

export async function generateStaticParams() {
  return []
} 