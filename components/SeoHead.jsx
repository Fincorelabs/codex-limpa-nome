import Head from 'next/head'

export default function SeoHead({
  title = 'Códex Limpa Nome™',
  description = 'Blindagem técnica de CPF/CNPJ com restauração de crédito e proteção institucional.',
  image = '/og-image-codex.jpg',
  url = 'https://codex-limpa-nome.vercel.app',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* SEO Básico */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

