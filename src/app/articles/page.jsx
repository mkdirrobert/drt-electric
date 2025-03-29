import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

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

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  
  // Proiectele principale
  let featuredProjects = [
    {
      title: 'Pepsi-Cola',
      slug: 'pepsi-cola',
      date: 'Decembrie 2023',
      description: 'Instalație electrică completă pentru fabrica Pepsi-Cola. Proiectul a inclus sisteme industriale de mare putere, automatizare avansată și soluții de eficiență energetică pentru întreaga unitate de producție.',
    },
    {
      title: 'Maternitatea Bega din Timișoara',
      slug: 'maternitatea-bega',
      date: 'Martie 2023',
      description: 'Modernizarea completă a instalațiilor electrice pentru Maternitatea Bega. Am implementat sisteme de siguranță critică pentru mediul medical, iluminat specializat și infrastructură electrică de înaltă fiabilitate pentru echipamentele medicale.',
    },
    {
      title: 'Zuba Construct',
      slug: 'zuba-construct',
      date: 'Iunie 2022',
      description: 'Proiectare și implementare a instalațiilor electrice pentru noul sediu Zuba Construct. Soluții inteligente de automatizare a clădirii, sistem de securitate integrat și infrastructură electrică eficientă pentru birouri și spații de producție.',
    },
  ]

  return (
    <SimpleLayout
      title="Expertiza tehnică demonstrată prin proiecte de referință"
      intro="Vă prezentăm o selecție din proiectele noastre reprezentative, care ilustrează capacitatea DRT Electric de a livra soluții electrice complexe, fiabile și eficiente energetic pentru clienți din sectorul industrial, medical, comercial și rezidențial."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={`featured-${index}`} project={project} />
          ))}
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
