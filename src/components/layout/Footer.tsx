import { Github, Linkedin, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/5 bg-[#08080B]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('footer.heading')}
          </h3>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            {t('footer.paragraph')}
          </p>

          <a
            href="mailto:vasquezaraujoh@gmail.com"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-cyan-300 text-black font-medium hover:opacity-90 transition"
          >
            <Mail size={18} />
            {t('footer.letsTalk')}
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            {
              icon: <Github size={20} />,
              href: "https://github.com/HernanVasquezDev",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/",
            },
            {
              icon: <BsWhatsapp size={20} />,
              href: "https://wa.me/573043132152",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-300 hover:border-cyan-300/30 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white font-medium">
            {t('footer.name')}
          </p>

          <p className="text-sm text-cyan-300 mt-1">
            {t('footer.role')}
          </p>

          <p className="text-sm text-gray-500 mt-4">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};