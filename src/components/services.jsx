import { motion } from 'framer-motion';

function Services() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 main-bg-color">

      <div className="max-w-7xl mx-auto font-color">

        {/* TÍTULO */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Cuidados Visuais Completos
          </h2>
          <p className="text-sm md:text-base clear-font-color leading-relaxed">
            Oferecemos uma ampla gama de serviços para cuidar da sua saúde visual.
            Desde exames completos até a escolha personalizada de armações e lentes.
          </p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6 md:gap-8
            max-w-4xl
            mx-auto
          "
        >

          <motion.div variants={item} className="p-6 md:p-7 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Exames Completos
            </h3>
            <p className="text-sm clear-font-color">
              Avaliação visual com tecnologia moderna para garantir precisão
              e conforto em cada consulta.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 md:p-7 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Armações Personalizadas
            </h3>
            <p className="text-sm clear-font-color">
              Seleção cuidadosa de armações que combinam com seu rosto,
              estilo e rotina.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 md:p-7 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Lentes de Alta Qualidade
            </h3>
            <p className="text-sm clear-font-color">
              Lentes com proteção UV e tecnologias que proporcionam
              conforto visual no dia a dia.
            </p>
          </motion.div>

          <motion.div variants={item} className="p-6 md:p-7 rounded-2xl shadow-md secondary-bg-color">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Ajustes e Manutenção
            </h3>
            <p className="text-sm clear-font-color">
              Ajustes rápidos para garantir encaixe perfeito
              e maior durabilidade dos seus óculos.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;

