import { useState } from "react";
import { questions } from "../data/questions";

const BULLETS = ["🍓", "🌸", "🍑", "🍬"];

function Quiz({ questionIndex, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);

  const question = questions[questionIndex];
  const progress = ((questionIndex + (selected !== null ? 1 : 0)) / 20) * 100;

  const handleSelect = (option, index) => {
    if (selected !== null) return; // one answer per question, so scores stay fair
    setSelected(index);
    onAnswer(option.type);
  };

  const handleNext = () => {
    setSelected(null);
    onNext();
  };

  return (
    <div className="space-y-6" style={{ animation: "pop .4s ease-out" }}>
      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-pink-600">
          <span>Question {questionIndex + 1} of 20</span>
          <span>{Math.round(progress)}% 💗</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-pink-100">
          <div
            className="h-full rounded-full bg-linear-to-br from-pink-400 to-fuchsia-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold leading-snug text-pink-900">{question.text}</h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isPicked = selected === index;
          const isDimmed = selected !== null && !isPicked;
          return (
            <button
              key={index}
              onClick={() => handleSelect(option, index)}
              disabled={selected !== null}
              className={`flex w-full items-center gap-3 rounded-3xl border-2 px-5 py-4 text-left font-medium transition-all duration-200 cursor-pointer disabled:cursor-default ${
                isPicked
                  ? "scale-[1.02] border-pink-400 bg-linear-to-br from-pink-400 to-rose-400 text-white shadow-lg shadow-pink-300/60"
                  : isDimmed
                  ? "border-pink-100 bg-white/50 text-pink-400 opacity-60"
                  : "border-pink-200 bg-white/80 text-pink-800 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50 hover:shadow-md"
              }`}
            >
              <span className="text-xl">{isPicked ? "💖" : BULLETS[index % BULLETS.length]}</span>
              <span>{option.text}</span>
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          onClick={handleNext}
          style={{ animation: "pop .35s ease-out" }}
          className="w-full rounded-full bg-linear-to-br from-fuchsia-400 to-pink-400 py-4 text-lg font-semibold text-white shadow-[0_6px_0_0_rgba(162,28,175,0.3)] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(162,28,175,0.3)] cursor-pointer"
        >
          {questionIndex === 19 ? "See my result 🎉" : "Next question 🌷"}
        </button>
      )}
    </div>
  );
}

export default Quiz;