import Head from 'next/head'

export default function SoccerRandomGame() {
  return (
    <>
      <Head>
        <title>Soccer Random - Free Online Soccer Game | SoccerRandom.me</title>
        <meta name="description" content="Play Soccer Random for free on SoccerRandom.me. Enjoy fun, fast-paced soccer matches with friends or AI. No registration required!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-x-hidden">
        {/* Brand Logo + Name - now fixed to top left */}
        <div className="fixed top-6 left-8 flex items-center z-20 select-none">
          <img src="/logo.svg" alt="SoccerRandom.me Logo" className="w-14 h-14 drop-shadow-lg" />
          <span className="ml-3 text-2xl font-bold text-white tracking-widest drop-shadow-lg">SoccerRandom.me</span>
        </div>
        {/* Glassmorphism Card */}
        <div className="z-10 w-full max-w-3xl rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 p-8 mt-4 mb-8 animate-fade-in-scale">
          <h1 className="text-5xl font-extrabold text-white drop-shadow mb-4 text-center tracking-tight">Soccer Random</h1>
          <p className="text-lg text-white/90 mb-6 text-center max-w-2xl mx-auto">
            Soccer Random is a fun and unpredictable online soccer game. Play against your friends or AI, experience random fields, characters, and weather, and enjoy every exciting match!
          </p>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20 mb-6 bg-black/40">
            <iframe
              src="https://www.crazygames.com/embed/soccer-random"
              style={{ width: '100%', height: '100%' }}
              frameBorder="0"
              allow="gamepad *; fullscreen"
              title="Soccer Random Online Game"
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
          <section className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-2xl bg-white/20 p-6 shadow-lg border border-white/10 animate-fade-in-scale">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <svg className="h-6 w-6 text-green-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4" /></svg>
                How to Play
              </h2>
              <ul className="list-disc pl-6 text-white/90 space-y-1">
                <li>Play solo or with a friend. Simple controls, easy to start.</li>
                <li>Each match features random fields, characters, and weather.</li>
                <li>Control your player with keyboard or touch to move and shoot.</li>
                <li>The first player to score wins. Fast-paced and full of fun!</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/20 p-6 shadow-lg border border-white/10 animate-fade-in-scale delay-100">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <svg className="h-6 w-6 text-yellow-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8s4.03-8 9-8s9 3.582 9 8z" /></svg>
                FAQ
              </h2>
              <ul className="list-disc pl-6 text-white/90 space-y-1">
                <li>No registration needed. Just click and play above.</li>
                <li>If the game doesn't load, refresh the page or try another browser.</li>
                <li>Fully playable on mobile, tablet, and desktop.</li>
              </ul>
            </div>
          </section>
        </div>
        {/* Animated background shapes */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-blue-400/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/30 to-pink-400/40 rounded-full blur-2xl animate-pulse-slow delay-200" />
        </div>
        {/* Footer */}
        <footer className="z-10 w-full text-center text-white/60 py-6 text-sm mt-8 flex flex-col items-center gap-2">
          <div className="flex flex-wrap justify-center gap-4 mb-2 text-white/80">
            <a href="/about" className="hover:underline hover:text-blue-200 transition">About Us</a>
            <a href="/contact" className="hover:underline hover:text-blue-200 transition">Contact Us</a>
            <a href="/dmca" className="hover:underline hover:text-blue-200 transition">DMCA</a>
            <a href="/privacy" className="hover:underline hover:text-blue-200 transition">Privacy Policy</a>
            <a href="/terms" className="hover:underline hover:text-blue-200 transition">Terms of Service</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} SoccerRandom.me &mdash; Enjoy the game!
          </div>
        </footer>
      </main>
      <style jsx global>{`
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite cubic-bezier(0.8,0,1,1);
        }
      `}</style>
    </>
  )
} 