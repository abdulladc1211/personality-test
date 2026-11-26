import { useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const EMPTY = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
const FLOATERS = ["💖", "✨", "🌸", "⭐", "🎀", "💗", "🦋", "☁️", "💫", "🍓"];

function App() {
  const [screen, setScreen] = useState("welcome"); // "welcome" | "quiz" | "result"
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(EMPTY);

  const startQuiz = () => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setScores(EMPTY);
  };

  const handleAnswer = (trait) => {
    setScores((prev) => ({ ...prev, [trait]: prev[trait] + 1 }));
  };

  const nextQuestion = () => {
    if (currentQuestion < 19) setCurrentQuestion((prev) => prev + 1);
    else setScreen("result");
  };

  const restart = () => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setScores(EMPTY);
  };

  return (
  <div className="cute-font relative min-h-screen overflow-hidden bg-linear-to-br from-pink-200 via-rose-100 to-fuchsia-200 flex items-center justify-center p-4">

      {/* Keyframes live here so no Tailwind config is needed */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
        .cute-font { font-family: 'Fredoka', ui-rounded, system-ui, sans-serif; }
        @keyframes rise { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: .9; } 90% { opacity: .9; } 100% { transform: translateY(-115vh) rotate(360deg); opacity: 0; } }
        @keyframes blob { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(40px,-30px) scale(1.15); } 66% { transform: translate(-30px,30px) scale(.9); } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pop { 0% { transform: scale(.6); opacity: 0; } 70% { transform: scale(1.08); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes wiggle { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
        @keyframes shine { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>

      {/* Soft glowing blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-400/40 blur-3xl" style={{ animation: "blob 14s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-300/50 blur-3xl" style={{ animation: "blob 18s ease-in-out infinite reverse" }} />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-60 w-60 rounded-full bg-rose-300/40 blur-3xl" style={{ animation: "blob 16s ease-in-out infinite" }} />

      {/* Floating emojis rising up */}
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute select-none"
          style={{
            left: `${(i * 37) % 100}%`,
            bottom: "-60px",
            fontSize: `${18 + ((i * 7) % 22)}px`,
            animation: `rise ${12 + ((i * 3) % 10)}s linear ${(i * 1.3) % 9}s infinite`,
          }}
        >
          {FLOATERS[i % FLOATERS.length]}
        </span>
      ))}

      {/* Main card */}
      <div className="relative z-10 w-full max-w-xl rounded-[2.5rem] border-4 border-white/80 bg-white/60 p-8 shadow-[0_20px_60px_-15px_rgba(236,72,153,0.5)] backdrop-blur-xl">
        <div className="absolute -top-5 -right-3 text-4xl" style={{ animation: "wiggle 2.5s ease-in-out infinite" }}>🎀</div>
        <div className="absolute -bottom-5 -left-3 text-4xl" style={{ animation: "bob 3s ease-in-out infinite" }}>🌸</div>

        {screen === "welcome" && <Welcome onStart={startQuiz} />}
        {screen === "quiz" && (
          <Quiz
            key={currentQuestion}
            questionIndex={currentQuestion}
            onAnswer={handleAnswer}
            onNext={nextQuestion}
          />
        )}
        {screen === "result" && <Result scores={scores} onRestart={restart} />}
      </div>
    </div>
  );
}

export default App;