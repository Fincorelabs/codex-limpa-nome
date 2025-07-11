import Head from 'next/head'

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Registro Institucional • Códex Limpa Nome™</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen bg-black text-gray-200 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-white">Registro Institucional • Confidencial</h1>
          <p className="text-sm text-gray-400 mb-8">
            Documento gerado automaticamente como registro técnico-simbólico da identidade e operação digital do projeto <strong>Códex Limpa Nome™</strong>.
            <br />
            <span className="block mt-2">Data de emissão: {new Date().toLocaleDateString('pt-BR')}</span>
          </p>

          <div className="text-sm bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p>Nome institucional: <strong>Códex Limpa Nome™</strong></p>
            <p>Domínio: https://codex-limpa-nome.vercel.app</p>
            <p>Responsável técnico: Otoniel Souza (ou sua razão social, se preferir)</p>
            <p>Camada de sigilo: Operação restrita | marca confidencial</p>
            <p className="mt-4">Identificador simbólico: <code>CLN-{new Date().getFullYear()}-{Math.random().toString(36).substring(2, 8).toUpperCase()}</code></p>
          </div>
        </div>
      </main>
    </>
  )
}
