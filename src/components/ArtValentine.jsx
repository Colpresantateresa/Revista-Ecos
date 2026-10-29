import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ArtValentine() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* TÍTULO GRANDE DE ENCABEZADO */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-slate-900 dark:text-slate-100 leading-tight">
        Saint Valentine’s Day at School
      </h1>

      {/* IMAGEN PRINCIPAL DE ENCABEZADO (Sv01.jpg) */}
      <div className="mb-8" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <img
          src="/images/ImaArti/Sv01.jpg"
          alt="Saint Valentine's Day Celebration"
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
        />
      </div>

      <div>
        <p className="text-justify leading-relaxed mb-4">
          In order to promote integration among students, the English Department organized the celebration of Saint Valentine’s Day as an opportunity to strengthen values such as friendship, respect, and positive interaction within the school community. With this objective in mind, the planning of this meaningful event was carried out.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          From the outset, teachers actively engaged students in the proposed activities. Students were invited to design and create a Valentine’s Day–themed box to be used during the celebration. In addition, they were encouraged to write a letter to a classmate as a gesture of appreciation and friendship.
        </p>

        {/* SEGUNDA IMAGEN INTEGRADA (Sv02.jpg) */}
        <div className="my-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img
            src="/images/ImaArti/Sv02.jpg"
            alt="Students with Valentine crafts"
            className="md:float-right md:ml-6 md:mb-4 w-full md:w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>

        <p className="text-justify leading-relaxed mb-4">
          As part of the creative process, students designed and crafted their own envelopes using origami techniques. This activity not only fostered artistic expression but also provided a meaningful space to present their messages.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Throughout the experience, students practiced their English skills in a dynamic and enjoyable context. Subsequently, the main objective focused on composing a letter addressed to someone special. Students were guided to express their ideas with creativity, sincerity, and respect.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          During the writing process, particular attention was given to symbolic elements, such as the use of the color red to represent love and affection. Students thoughtfully expressed the importance of their chosen recipient, highlighting personal qualities and the positive impact of their presence in everyday life.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Once the letters were completed, students decorated them with hearts and other symbols associated with love and friendship, thereby enhancing the emotional value of their messages.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          The celebration of Saint Valentine’s Day became a meaningful experience for all participants. The exchange of letters generated an atmosphere of joy, enthusiasm, and appreciation. Each message represented a sincere expression of friendship, contributing to a memorable and enriching school experience.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          Moreover, this activity highlighted the importance of face-to-face interaction in an increasingly digital world. Sharing moments in person allows students to build authentic relationships, express their emotions, and feel genuinely valued within their community.
        </p>

        <p className="text-justify leading-relaxed mb-4">
          In conclusion, celebrating Saint Valentine’s Day at school reinforces the significance of interpersonal relationships and shared experiences. Such initiatives contribute to the development of social and emotional skills, reminding us that friendship and affection are best expressed through direct human connection.
        </p>

        <p className="text-right font-semibold mt-6">
          Author: English Department
        </p>
      </div>

      {/* Botón de regreso centrado */}
      <div className="flex justify-center mt-12 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg shadow transition duration-200 cursor-pointer"
        >
          <img src="/images/Recursos26/flechaB.png" alt="Volver" className="w-6 h-6" />
          <span className="font-medium"></span>
        </button>
      </div>
      
    </div>
  );
}

