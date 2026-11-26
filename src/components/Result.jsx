import { personalityData } from "../data/personality";

const CONFETTI = ["🎉", "💖", "✨", "🌸", "⭐", "🎀"];

function Result({ scores, onRestart }) {
  const getType = () => {
    let type = "";
    type += scores.E >= scores.I ? "E" : "I";
    type += scores.S >= scores.N ? "S" : "N";
    type += scores.T >= scores.F ? "T" : "F";
    type += scores.J >= scores.P ? "J" : "P";
    return type;
  };

  const type = getType();
  const data = personalityData[type];

  return (
    <div className="relative text-center space-y-6" style={{ animation: "pop .6s ease-out" }}>
      {/* Little celebration row */}
      <div className="flex justify-center gap-3 text-3xl">
        {CONFETTI.map((c, i) => (
          <span key={i} style={{ animation: `bob 2s ease-in-out ${i * 0.2}s infinite` }}>
            {c}
          </span>
        ))}
      </div>

      <h1 className="text-xl font-semibold text-pink-600">Your personality type is</h1>

      <div className="mx-auto w-fit rounded-4xl bg-linear-to-br from-pink-400 via-rose-400 to-fuchsia-400 px-10 py-4 shadow-[0_10px_0_0_rgba(190,24,93,0.25)]">
        <h2 className="text-6xl font-bold tracking-widest text-white drop-shadow">{type}</h2>
      </div>

      <p className="text-2xl font-semibold text-pink-900">{data?.title}</p>

      <p className="rounded-3xl bg-white/70 p-5 leading-relaxed text-pink-800/90">
        {data?.desc}
      </p>

      <button
        onClick={onRestart}
        className="rounded-full bg-linear-to-br from-amber-300 to-pink-400 px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_0_0_rgba(190,24,93,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-1.5 active:shadow-[0_2px_0_0_rgba(190,24,93,0.3)] cursor-pointer"
      >
        Take again 🔄
      </button>
    </div>
  );
}

export default Result;