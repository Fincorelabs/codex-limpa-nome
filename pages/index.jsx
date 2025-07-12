import Head from 'next/head'
import SeoHead from '../components/SeoHead'

export default function Home() {
  return (
    <>
      <SeoHead />
      <Head>
        <title>Códex Limpa Nome™</title>
        <meta name="description" content="Blindagem estratégica e restauração técnica de crédito para CPF e CNPJ." />
        <meta property="og:title" content="Códex Limpa Nome™" />
        <meta property="og:description" content="Serviço institucional de proteção e reabilitação de crédito, com base na LGPD e CDC." />
        <meta property="og:image" content="/og-image-codex.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 text-white bg-[#111111] relative">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Códex Limpa Nome™
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Solução técnica e estratégica para blindagem de CPF ou CNPJ, com reabilitação total do crédito e proteção institucional blindada.
          </p>
          <a
            href="https://wa.me/5524999579507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#c7a254] text-[#c7a254] hover:bg-[#c7a254] hover:text-black font-medium px-6 py-3 rounded-full transition duration-300"
          >
            Agendar Atendimento Confidencial
          </a>
        </div>

   {/* Seta animada apenas no mobile, 100% centralizada */}
<div className="absolute bottom-12 w-full flex justify-center md:hidden" aria-hidden="true">
  <svg
    className="w-10 h-10 text-[#c7a254] animate-bounce opacity-80"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>
      </section>

      {/* SOBRE */}
      <section className="bg-[#111111] text-gray-200 py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Sobre o Serviço</h2>
          <p className="text-lg leading-relaxed">
            O sistema de crédito brasileiro é implacável. Uma vez que CPF ou CNPJ estão com restrições, profissionais e empresas enfrentam bloqueios bancários, queda de score, perda de acesso a crédito e danos reputacionais.
            <br /><br />
            A <strong>Códex Limpa Nome™</strong> oferece uma abordagem institucional, fundamentada na LGPD e no Código de Defesa do Consumidor, com respaldo técnico e jurídico para a reabilitação de registros junto aos principais órgãos de proteção ao crédito.
          </p>
        </div>
      </section>

      {/* INCLUSO */}
      <section className="bg-[#111111] text-gray-200 py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">O que está incluso</h2>
          <ul className="space-y-4 text-lg list-disc list-inside">
            <li>Varredura técnica nos principais órgãos de crédito</li>
            <li>Contestação jurídica com base na LGPD e CDC</li>
            <li>Remoção de registros inconsistentes ou prescritos</li>
            <li>Blindagem de CPF/CNPJ</li>
            <li>Manual de conduta para manutenção da reabilitação</li>
          </ul>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-[#111111] text-gray-200 py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Para quem é</h2>
          <p className="text-lg leading-relaxed">
            O serviço é indicado para profissionais, empresários, investidores e empresas que desejam recuperar seu histórico de crédito, aumentar score, retomar acesso a financiamentos e reconstruir sua imagem financeira institucional.
          </p>
        </div>
      </section>

      {/* POLÍTICA */}
      <section className="bg-[#111111] text-gray-200 py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Política de Uso</h2>
          <p className="text-lg leading-relaxed">
            Ao contratar nossos serviços, o cliente concorda com os termos institucionais de uso, fornecendo informações verídicas e autorizando os procedimentos técnicos e jurídicos necessários. A confidencialidade é garantida em todas as etapas.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#111111] text-white py-24 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Agendamento Confidencial</h2>
        <p className="text-lg text-gray-300 mb-6">
          Nossa equipe explica o procedimento via Google Meet ou WhatsApp. Atendimento sigiloso e exclusivo.
        </p>
        <a
          href="https://wa.me/5524999579507"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#c7a254] text-[#c7a254] hover:bg-[#c7a254] hover:text-black font-medium px-8 py-4 rounded-full transition duration-300"
        >
          Iniciar Atendimento
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 py-6 text-center text-sm">
        © {new Date().getFullYear()} Códex Limpa Nome™. Todos os direitos reservados.
      </footer>
    </>
  )
}
