import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Revalidar™</title>
        <meta name="description" content="Seu nome, sua empresa, sua credibilidade — reativada." />
        <meta property="og:title" content="Revalidar™" />
        <meta property="og:description" content="Serviço técnico e estratégico para reabilitação de crédito de CPF e CNPJ, com proteção institucional." />
        <meta property="og:image" content="/og-image-revalidar.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* HERO */}
<section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 text-[#111] bg-[#f9f9f9]">
  <div className="max-w-4xl text-center">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#0c3c78]">
      Revalidar™
    </h1>
    <p className="text-lg md:text-xl text-[#555] leading-relaxed mb-8">
      Seu nome, sua empresa, sua credibilidade — reativada.
    </p>
    <a
      href="https://wa.me/5524999579507"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#0c3c78] text-white hover:bg-[#092d5c] font-medium px-6 py-3 rounded-full transition duration-300"
    >
      Falar com um Especialista
    </a>
  </div>

  {/* SETA SVG EM "V" GROSSO – SOMENTE MOBILE */}
  <div className="block md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2">
    <svg
      className="animate-bounce"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0c3c78"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
</section>

      {/* SERVIÇOS */}
      <section className="bg-white text-[#111] py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">O que oferecemos</h2>
          <ul className="space-y-4 text-lg list-disc list-inside text-[#444]">
            <li>Remoção de dívidas e registros vencidos junto ao Bacen, Serasa, Boa Vista e SPC</li>
            <li>Melhoria de score e reputação junto ao sistema bancário</li>
            <li>Blindagem institucional de CPF e CNPJ</li>
            <li>Atuação com respaldo técnico e jurídico</li>
            <li>Reabilitação completa de crédito com orientação contínua</li>
          </ul>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-[#f1f1f1] text-[#111] py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Quem atendemos</h2>
          <p className="text-lg leading-relaxed text-[#444]">
            Pessoas físicas, autônomos, empresários e empresas que precisam restaurar seu acesso ao crédito, aumentar score, limpar registros e retomar a confiança institucional no mercado.
          </p>
        </div>
      </section>

      {/* POLÍTICA */}
      <section className="bg-white text-[#111] py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Política de Atendimento</h2>
          <p className="text-lg leading-relaxed text-[#555]">
            Todas as etapas são conduzidas com absoluto sigilo. O cliente fornece documentos e autorizações para iniciarmos a atuação técnica e jurídica junto aos órgãos competentes. A confidencialidade é assegurada por contrato.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f9f9f9] text-center py-24 px-6 md:px-24">
        <h2 className="text-3xl font-bold mb-4 text-[#0c3c78]">Agende sua análise gratuita</h2>
        <p className="text-lg text-[#555] mb-6">
          Fale com um consultor especializado. Atendimento via Google Meet ou WhatsApp com total sigilo institucional.
        </p>
        <a
          href="https://wa.me/5524999579507"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0c3c78] text-white hover:bg-[#092d5c] font-medium px-8 py-4 rounded-full transition duration-300"
        >
          Iniciar Atendimento Confidencial
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#eaeaea] text-[#555] py-6 text-center text-sm">
        © {new Date().getFullYear()} Revalidar™. Todos os direitos reservados.
      </footer>
    </>
  )
}
