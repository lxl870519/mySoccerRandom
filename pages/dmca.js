import Head from 'next/head'

export default function DMCA() {
  return (
    <>
      <Head>
        <title>DMCA | SoccerRandom.me</title>
        <meta name="description" content="DMCA policy for SoccerRandom.me." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 px-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">DMCA Policy</h1>
          <p className="text-white/90 mb-4">
            SoccerRandom.me respects the intellectual property rights of others and complies with the provisions of the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been used on our site in a way that constitutes copyright infringement, please contact us with the following information:
          </p>
          <ul className="list-disc pl-6 text-white/80 mb-4">
            <li>Your name, address, phone number, and email address</li>
            <li>A description of the copyrighted work you claim has been infringed</li>
            <li>The exact URL or a description of where the alleged infringing material is located</li>
            <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law</li>
            <li>A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf</li>
            <li>Your electronic or physical signature</li>
          </ul>
          <p className="text-white/70">
            Please send DMCA notices to <a href="mailto:contact@soccerrandom.me" className="underline hover:text-blue-200">contact@soccerrandom.me</a>.
          </p>
        </div>
      </main>
    </>
  )
} 