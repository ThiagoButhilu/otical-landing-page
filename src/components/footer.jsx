function Footer() {
  return (
    <footer className="fifty-bg-color text-white/80">

      {/* BLOCO PRINCIPAL */}
      <div className="
        max-w-7xl mx-auto
        px-10 py-16
        flex flex-col md:flex-row
        justify-between gap-12
      ">

        {/* NEWSLETTER */}
        <div className="max-w-md">
          <h2 className="text-2xl font-medium mb-3 text-white">
            Esteja informado com nossos e-mails
          </h2>

          <p className="text-sm opacity-80 mb-6">
            Cadastre seu e-mail e receba novidades, além de 15% de desconto.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="
                flex-1 px-4 py-2
                rounded-full
                bg-white/10
                border border-white/20
                placeholder-white/50
                text-sm
                focus:outline-none
                focus:border-white/40
              "
            />
            <button
              className="
                px-6 py-2
                rounded-full
                bg-white text-[#1F3D2B]
                text-sm font-medium
                hover:bg-white/90
                transition
              "
            >
              Inscrever-se
            </button>
          </div>
        </div>

        {/* REDES SOCIAIS */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="group">
            <svg
              className="w-9 h-9 text-white/70 group-hover:text-white transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="group">
            <svg
              className="w-9 h-9 text-white/70 group-hover:text-white transition"

              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="#" aria-label="WhatsApp" className="group">
            <svg
              className="w-9 h-9 text-white/70 group-hover:text-white transition"

              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M20 11.5a8.38 8.38 0 0 1-1.9 5.4l1.2 4.1-4.2-1.1a8.5 8.5 0 1 1 4.9-8.4z" />
              <path d="M9.5 10.5c.5 1 1.5 2 2.5 2.5l1-1a.7.7 0 0 1 .7-.2l1.5.5a.7.7 0 0 1 .5.8c-.1.9-.8 1.6-1.7 1.6A6 6 0 0 1 8 9.7c0-.9.7-1.6 1.6-1.7a.7.7 0 0 1 .8.5l.5 1.5a.7.7 0 0 1-.2.7z" />
            </svg>
          </a>
        </div>

      </div>

      {/* RODAPÉ FINAL */}
      <div className="border-t border-white/20 py-6 text-center text-xs text-white/60">
        © 2025 Vista Clara — Ótica & cuidado visual
      </div>

    </footer>
  );
}

export default Footer;

