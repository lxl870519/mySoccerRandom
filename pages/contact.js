import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | SoccerRandom.me</title>
        <meta name="description" content="Contact SoccerRandom.me for support, feedback, or business inquiries." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-16 px-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Contact Us</h1>
          <p className="text-white/90 mb-6 text-center">
            Have questions, suggestions, or business inquiries? Reach out to us!
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none" disabled />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none" disabled />
            <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none" rows={4} disabled />
            <button type="submit" className="w-full py-2 rounded bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition" disabled>Send Message</button>
          </form>
          <p className="text-white/70 text-center mt-4">
            Or email us directly at <a href="mailto:contact@soccerrandom.me" className="underline hover:text-blue-200">contact@soccerrandom.me</a>
          </p>
        </div>
      </main>
    </>
  )
} 