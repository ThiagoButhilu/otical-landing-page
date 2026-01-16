import Store from '../assets/images/cuidados-basicos-com-a-otica.jpg';
import { motion } from 'framer-motion';

function Location() {

  const title = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const left = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const rightContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const rightItem = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const image = {
    hidden: { opacity: 0, scale: 0.97 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.15 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2, margin: "-120px 0px" }}
      className="py-16 md:py-20 px-6 md:px-8 forty-bg-color"
    >

      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <motion.div
          variants={title}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-location font-semibold mb-4">
            Venha nos visitar
          </h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Estamos prontos para receber você com conforto, atenção e cuidado
            em um ambiente acolhedor.
          </p>
        </motion.div>

        {/* CONTEÚDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* MAPA */}
          <motion.div
            variants={left}
            className="w-full h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=Avenida%20Paulista%2C%201000%20-%20São%20Paulo&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
              title="Localização da ótica"
            />
          </motion.div>

          {/* INFORMAÇÕES */}
          <motion.div
            variants={rightContainer}
            className="flex flex-col text-center gap-5 md:gap-6"
          >

            <motion.div variants={rightItem}>
              <h3 className="text-lg md:text-xl font-location font-medium mb-1 md:mb-2">
                Endereço
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Avenida Paulista, 1000<br />
                Bela Vista — São Paulo, SP
              </p>
            </motion.div>

            <motion.div variants={rightItem}>
              <h3 className="text-lg md:text-xl font-location font-medium mb-1 md:mb-2">
                Horário de funcionamento
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo: fechado
              </p>
            </motion.div>

            <motion.div variants={rightItem}>
              <h3 className="text-lg md:text-xl font-location font-medium mb-1 md:mb-2">
                Contato
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                (11) 99999-9999<br />
                contato@vistaclara.com.br
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={rightItem} className="pt-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  inline-block
                  bg-white/30
                  backdrop-blur-md
                  px-5 py-2
                  rounded-full
                  text-sm
                  text-emerald-100
                  font-semibold
                  border border-white/40
                  shadow-sm
                "
              >
                Fale conosco
              </motion.a>
            </motion.div>

          </motion.div>

        </div>

        {/* IMAGEM DA LOJA */}
        <motion.div
          variants={image}
          className="mt-14 md:mt-20 flex justify-center"
        >
          <img
            src={Store}
            alt="Interior da loja Vista Clara"
            className="w-full max-w-4xl rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Location;

