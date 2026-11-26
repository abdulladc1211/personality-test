function Welcome({ onStart }) {
  return (
    <div className="text-center space-y-6" style={{ animation: "pop .5s ease-out" }}>
      <div className="text-7xl" style={{ animation: "bob 2.5s ease-in-out infinite" }}>🧸</div>

      <h1
        className="text-4xl sm:text-5xl font-bold bg-linear-to-br from-pink-500 via-fuchsia-500 to-rose-400 bg-clip-text text-transparent"
        style={{ backgroundSize: "200% auto", animation: "shine 4s linear infinite" }}
      >
        Discover Your True Self
      </h1>

      <p className="text-pink-700/80 text-lg">
        Answer 20 little situations and meet your personality type 💕
      </p>

      <button
        onClick={onStart}
        className="group rounded-full bg-linear-to-br from-pink-400 to-rose-400 px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_0_0_rgba(190,24,93,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_0_0_rgba(190,24,93,0.35)] active:translate-y-1.5 active:shadow-[0_2px_0_0_rgba(190,24,93,0.35)] cursor-pointer"
      >
        Start Test <span className="inline-block transition-transform group-hover:rotate-12">✨</span>
      </button>

      <p className="text-sm text-pink-500/70">Takes about 3 minutes 🌷</p>
    </div>
  );
}

export default Welcome;