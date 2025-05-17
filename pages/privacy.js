import Head from 'next/head'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | SoccerRandom.me</title>
        <meta name="description" content="Privacy Policy for SoccerRandom.me." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 px-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Privacy Policy</h1>
          <p className="text-white/90 mb-4">
            At SoccerRandom.me, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
          </p>
          <ul className="list-disc pl-6 text-white/80 mb-4">
            <li>We do not require registration or collect personal information to play games.</li>
            <li>We may use cookies and analytics tools to improve user experience and analyze site traffic.</li>
            <li>We do not sell, trade, or transfer your information to outside parties.</li>
            <li>Links to third-party sites are provided for your convenience; we are not responsible for their content or privacy practices.</li>
            <li>For any privacy-related questions, contact us at <a href="mailto:lixiaoliang870519@gmail.com" className="underline hover:text-blue-200">lixiaoliang870519@gmail.com</a>.</li>
          </ul>
          <p className="text-white/70">
            By using SoccerRandom.me, you consent to this Privacy Policy. We may update this policy from time to time. Please review it periodically.
          </p>
        </div>
      </main>
    </>
  )
} 