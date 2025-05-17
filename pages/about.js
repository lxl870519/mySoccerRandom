import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | SoccerRandom.me</title>
        <meta name="description" content="Learn more about SoccerRandom.me, our mission, and our team." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 px-4">
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">About Us</h1>
          <p className="text-white/90 mb-4 text-center">
            SoccerRandom.me is dedicated to bringing you the best free online soccer games. Our mission is to create a fun, safe, and engaging platform for players of all ages to enjoy high-quality browser games anytime, anywhere.
          </p>
          <p className="text-white/80 mb-4">
            We are a passionate team of game lovers and web developers. We believe in the power of play and community. Our goal is to continuously expand our game library and provide a seamless, enjoyable experience for everyone.
          </p>
          <p className="text-white/70 text-center">
            For business inquiries or feedback, please contact us at <a href="mailto:contact@soccerrandom.me" className="underline hover:text-blue-200">contact@soccerrandom.me</a>.
          </p>
        </div>
      </main>
    </>
  )
} 