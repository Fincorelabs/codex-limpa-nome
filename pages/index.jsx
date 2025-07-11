import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Códex Limpa Nome™</title>
        <meta name="description" content="Limpeza de Nome e Blindagem Estratégica de CPF ou CNPJ por 12 meses." />
        <meta property="og:title" content="Códex Limpa Nome™" />
        <meta property="og:description" content="Serviço técnico e confidencial de reabilitação de crédito e proteção do CPF/CNPJ." />
        <meta property="og:image" content="/og-image-codex.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <main
        <main
  className="min-h-screen bg-black text-white flex items-center justify-center bg-cover bg-center md:bg-top bg-no-repeat"
  style={{
    backgroundImage: "url('/og-image-codex.jpg')"
  }}
>

        }}
      >
        <div className="bg-black/70 p-8 rounded-2xl max-w-xl text-center shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Códex Limpa Nome™
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
            Limpeza de Nome e Blindagem Estratégica de CPF/CNPJ.
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

      {/* SOBRE */}
      <section className="bg-gray-100 text-black py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre o Serviço</h2>
          <p className="text-lg leading-relaxed mb-4">
            O sistema de crédito não perdoa. Se o seu CPF ou CNPJ está com restrições, você já enfrentou: empréstimos recusados, contratos bloqueados, limite de crédito reduzido e imagem comprometida.
          </p>
          <p className="text-lg leading-relaxed">
            A <strong>Códex Limpa Nome™</strong> oferece um serviço confidencial e técnico, atuando nos bastidores dos principais órgãos de proteção ao crédito, promovendo a reabilitação total do seu nome com blindagem de até 12 meses.
          </p>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="bg-white text-black py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">O Que Está Incluso</h2>
          <ul className="text-lg space-y-4 text-left max-w-xl mx-auto list-disc list-inside">
            <li>🔎 Varredura profunda nos principais órgãos de proteção ao crédito</li>
            <li>📑 Contestação técnica com base na LGPD e no Código de Defesa do Consumidor</li>
            <li>🧹 Remoção de registros prescritos ou inconsistentes</li>
            <li>🛡️ Blindagem contra recontaminação</li>
            <li>📘 Manual de conduta para manter seu nome limpo</li>
          </ul>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-gray-100 text-black py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Para Quem É</h2>
          <p className="text-lg leading-relaxed">
            Ideal para pessoas físicas e empresas que precisam limpar seu nome, aumentar o score, recuperar crédito ou voltar a operar legalmente com segurança e respaldo técnico.
          </p>
        </div>
      </section>

      {/* POLÍTICA DE USO */}
      <section className="bg-white text-black py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Política de Uso</h2>
          <p className="text-lg leading-relaxed">
            Ao contratar nossos serviços, o cliente concorda com os termos de uso estabelecidos, incluindo a veracidade das informações fornecidas, o compromisso com o cumprimento dos prazos e a aceitação dos processos técnicos utilizados. Garantimos total sigilo e conformidade legal em todas as etapas.
          </p>
        </div>
      </section>

      {/* CHAMADA PARA AÇÃO */}
      <section className="bg-black text-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Agende Agora</h2>
        <p className="text-lg mb-6">
          Explicamos tudo em até 5 minutos via Google Meet ou WhatsApp, com total sigilo.
        </p>
        <a
          href="https://wa.me/5524999579507"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition duration-300"
        >
          Agendar Atendimento
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Códex Limpa Nome™. Todos os direitos reservados.
      </footer>
    </>
  )
}
