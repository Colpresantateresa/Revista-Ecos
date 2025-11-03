import React from "react";

function NoticiasRecientes() {
  return (
       <section className="pt-20 bg-white dark:bg-slate-900 transition-colors duration-300">
     <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Una educación <span className="text-cyan-600 dark:text-cyan-400">con corazón</span> y mirada al futuro
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Alumnos de primaria cantando la piragua en el festival la abeja dorada.
            Espacios seguros, actividades innovadoras y una comunidad que inspira.
          </p>

          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow dark:shadow-slate-700/30 transition-color">
              <img src="Prom001.jpg" alt="students" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold dark:text-white">Memorias</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Recordemos la promoción 2024 y sus aportes a nuestra comunidad
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow dark:shadow-slate-700/30 transition-colors">
              <img src="grupda.jpeg" alt="awards" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold dark:text-white">Estudiantes destacados</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Grupo de danza luego de su exitosa presentación
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-700 transition-colors">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <img src="/festabdr.jpeg" alt="hero" className="w-full h-96 object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-300/40 blur-3xl"></div>
        </div>
      </div>

      <div className="w-full overflow-hidden -mt-6">
        <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-28" preserveAspectRatio="none">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
}

export default NoticiasRecientes;
