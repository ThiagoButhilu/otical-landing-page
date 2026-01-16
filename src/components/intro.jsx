import middleImg from '../assets/images/Ultra Light S Round Trans Grey _ Grey - Default Title.jpg'
import firstColumn from '../assets/images/colum1.jpg'
import secondColumn from '../assets/images/column2.jpg'
import { motion } from 'framer-motion';

function Intro() {

  const left = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const right = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const center = {
    hidden: { opacity: 0, scale: 0.97 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25, margin: "-120px 0px" }}
      className="
        forty-bg-color
        grid
        grid-cols-1
        md:grid-cols-3
        gap-10 md:gap-4
        px-6 md:px-10
        py-16
        w-full
      "
    >

      {/* COLUNA ESQUERDA */}
      <motion.div
        variants={left}
        className="flex flex-col gap-10 md:justify-between items-center text-center md:text-left"
      >

        <div className="w-full md:w-80 clear-font-color">
          <span className="text-xs md:text-sm uppercase tracking-widest opacity-70">
            Nossa missão
          </span>

          <h2 className="font-bold mb-4 mt-2 text-2xl md:text-3xl">
            Cuidar da sua visão é o nosso foco
          </h2>

          <p className="mb-6 opacity-80 text-sm md:text-base">
            Na nossa ótica, acreditamos que enxergar bem é parte do bem-estar.
            Oferecemos óculos e lentes pensados para o seu conforto, estilo e saúde visual.
          </p>

          <a
            href="#servicos"
            className="
              inline-block
              border border-current
              px-6 py-2
              rounded-full
              text-sm
              hover:bg-white/10
              transition
            "
          >
            Conhecer serviços
          </a>
        </div>

        <div className="text-center">
          <img
            className="
              rounded-bl-4xl rounded-tr-4xl
              w-48 h-48 md:w-56 md:h-56
              object-cover shadow-xl
            "
            src={firstColumn}
            alt="Armações modernas"
          />
          <p className="text-xs mt-2 opacity-70">
            Armações leves e confortáveis
          </p>
        </div>

      </motion.div>

      {/* COLUNA CENTRAL */}
      <motion.div
        variants={center}
        className="flex items-center justify-center relative order-first md:order-none"
      >
        <img
          className="
            w-full
            max-w-sm md:max-w-none
            h-[320px] md:h-full
            object-cover
            rounded-xl
          "
          src={middleImg}
          alt="Modelo usando óculos"
        />

        <div className="
          absolute bottom-4 right-4
          bg-white/30 backdrop-blur-md
          px-4 py-2
          rounded-full
          text-xs md:text-sm
          text-emerald-100
          font-semibold
          border border-white/40
          shadow-sm
        ">
          Estilo & conforto
        </div>
      </motion.div>

      {/* COLUNA DIREITA */}
      <motion.div
        variants={right}
        className="flex flex-col gap-10 md:justify-between items-center text-center md:text-left"
      >

        <div className="text-center">
          <img
            className="
              rounded-br-4xl rounded-tl-4xl
              w-48 h-48 md:w-56 md:h-56
              object-cover shadow-xl
            "
            src={secondColumn}
            alt="Óculos em destaque"
          />
          <p className="text-xs mt-2 opacity-70">
            Design moderno e funcional
          </p>
        </div>

        <div className="w-full md:w-80 clear-font-color">
          <span className="text-xs md:text-sm uppercase tracking-widest opacity-70">
            Nossa coleção
          </span>

          <h2 className="font-bold mb-4 mt-2 text-2xl md:text-3xl">
            Óculos que combinam com você
          </h2>

          <p className="opacity-80 text-sm md:text-base">
            Trabalhamos com armações modernas, leves e funcionais,
            sempre priorizando qualidade e atendimento atencioso.
          </p>
        </div>

      </motion.div>

    </motion.section>
  );
}

export default Intro;

