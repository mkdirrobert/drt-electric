import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { redirect } from 'next/navigation'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Citește detalii</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${project.slug}`}>
          {project.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={project.date}
          className="md:hidden"
          decorate
        >
          {project.date}
        </Card.Eyebrow>
        <Card.Description>{project.description}</Card.Description>
        <Card.Cta>Vezi proiectul</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={project.date}
        className="mt-1 max-md:hidden"
      >
        {project.date}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Portofoliu de Proiecte',
  description:
    'Descoperiți proiectele de referință realizate de DRT Electric pentru clienți din diverse sectoare industriale și comerciale.',
}

export default function Articles() {
  redirect('/proiecte')
}
