import banner from '../assets/images/daniil-zameshaev-zu8wQicxbDs-unsplash.jpg'
import { motion } from 'framer-motion';

function CarroselBanner() {

  const title = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const subtitle = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.12 }
    }
  };

  const cta = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.25 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      className="
        relative
        w-full
        min-h-[90vh]
        md:min-h-screen
        main-bg-color
        overflow-hidden
      "
    >

      {/* IMAGEM */}
      <img
        src={banner}
        alt="Vista Clara"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTEÚDO */}
      <div className="
        relative z-10
        h-full
        flex flex-col
        justify-center
        items-center md:items-start
         md:px-24
        py-74 md:py-84
        max-w-2xl
        space-y-4
        text-center md:text-left
      ">

        {/* TÍTULO */}
        <motion.h1
          variants={title}
          className="
            text-4xl
            md:text-6xl
            font-semibold
            tracking-wide
            font-serif
            text-[#F4F8F6]
          "
        >
          Vista Clara
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.h2
          variants={subtitle}
          className="
            text-xl
            md:text-3xl
            text-[#EEF5F2]
          "
        >
          Ótica & cuidado visual
        </motion.h2>

        {/* CTA */}
        <motion.a
          variants={cta}
          href="#contato"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            mt-6
            mx-auto md:mx-0
            px-7 md:px-8
            py-3
            rounded-full
            bg-white
            text-[#2F5E4E]
            text-sm
            font-medium
            hover:bg-white/90
            transition
          "
        >
          Agendar exame
        </motion.a>

      </div>

    </motion.section>
  );
}

export default CarroselBanner;

