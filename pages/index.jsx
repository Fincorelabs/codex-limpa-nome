import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Códex Limpa Nome™</title>
        <meta name="description" content="Recupere seu crédito com blindagem de CPF ou CNPJ por 12 meses." />
        <meta property="og:title" content="Códex Limpa Nome™" />
        <meta property="og:description" content="Solução estratégica de blindagem de CPF/CNPJ com recuperação de crédito." />
        <meta property="og:image" content="/og-image-codex.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main
        className="min-h-screen bg-black text-white flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/og-image-codex.jpg')"
        }}
      >
        <div className="bg-black/70 p-8 rounded-2xl max-w-xl text-center shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Códex Limpa Nome™
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            Blindagem estratégica de CPF ou CNPJ com proteção e restauração de crédito.
          </p>
          <a
            href="https://wa.me/5524999579507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Quero Limpar Meu Nome
          </a>
        </div>
      </main>
    </>
  )
}
