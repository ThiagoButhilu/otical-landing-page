import imgHeader from '../assets/images/ChatGPT Image 11 de dez. de 2025, 21_45_08.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          fixed top-0 w-full z-50
          bg-white/30 backdrop-blur-md
          border-b border-white/40
          shadow-sm
        "
      >
        <nav className="
          container mx-auto
          flex items-center justify-between
          px-6 py-4
        ">

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {["Início", "Serviços", "Depoimentos"].map((item) => (
              <li key={item}>
                <motion.a
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  href={`#${item.toLowerCase()}`}
                  className="font-color relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* LOGO */}
          <div className="flex justify-center">
            <img
              src={imgHeader}
              alt="Vista Clara"
              className="w-10 h-10 object-contain cursor-pointer hover:scale-105 transition"
            />
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden md:flex">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="#contato"
              className="
                px-5 py-2
                rounded-full
                tertiary-bg-color
                text-white
                text-sm font-medium
                hover:opacity-90
                transition
              "
            >
              Fale conosco
            </motion.a>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-sm font-medium font-color"
          >
            Menu
          </button>

        </nav>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="
                absolute top-20 left-1/2 -translate-x-1/2
                bg-white
                rounded-2xl
                shadow-xl
                px-8 py-6
                flex flex-col gap-4
                text-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              {["Início", "Serviços", "Depoimentos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-color text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

