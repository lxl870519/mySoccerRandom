import Head from 'next/head'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | SoccerRandom.me</title>
        <meta name="description" content="Terms of Service for SoccerRandom.me." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 px-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Terms of Service</h1>
          <p className="text-white/90 mb-4">
            By accessing and using SoccerRandom.me, you agree to comply with and be bound by the following terms and conditions:
          </p>
          <ul className="list-disc pl-6 text-white/80 mb-4">
            <li>All games and content are provided for entertainment purposes only.</li>
            <li>You may not use the site for any unlawful or prohibited activities.</li>
            <li>We reserve the right to modify or discontinue any part of the site at any time.</li>
            <li>We are not responsible for any damages or losses resulting from your use of the site.</li>
            <li>These terms may be updated at any time. Continued use of the site constitutes acceptance of the new terms.</li>
          </ul>
          <p className="text-white/70">
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:contact@soccerrandom.me" className="underline hover:text-blue-200">contact@soccerrandom.me</a>.
          </p>
        </div>
      </main>
    </>
  )
} 