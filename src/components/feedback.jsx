import { useEffect, useState } from "react";

const feedbacks = [
  {
    text: "Adorei minhas novas armações! O atendimento foi excelente e a qualidade é incrível.",
    author: "Maria S."
  },
  {
    text: "Fui muito bem atendido e encontrei óculos perfeitos para o meu dia a dia.",
    author: "João P."
  },
  {
    text: "Ambiente agradável, profissionais atenciosos e ótimos preços.",
    author: "Ana L."
  }
];

function FeedBack() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // 🔁 Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % feedbacks.length);
        setAnimate(true);
      }, 150);
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
      setAnimate(true);
    }, 150);
  };

  const handleDotClick = (i) => {
    if (i === index) return;
    setAnimate(false);
    setTimeout(() => {
      setIndex(i);
      setAnimate(true);
    }, 150);
  };

  return (
    <div className="bg-emerald-50 py-14 px-8 text-center rounded-3xl shadow-md w-full">

      <h2 className="text-2xl font-semibold mb-8 font-header-font">
        O que nossos clientes dizem
      </h2>

      {/* CONTEÚDO */}
      <div
        className={`
          transition-all duration-500
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <p className="text-gray-700 mb-4 italic">
          "{feedbacks[index].text}"
        </p>

        <span className="text-gray-500 font-medium block">
          — {feedbacks[index].author}
        </span>
      </div>

      {/* INDICADORES */}
      <div className="flex justify-center gap-2 mt-8">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`
              w-2.5 h-2.5 rounded-full transition
              ${i === index ? "bg-emerald-600" : "bg-emerald-300"}
            `}
            aria-label={`Feedback ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default FeedBack;

