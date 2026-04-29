
export const Footer = () => (
    <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p className="text-sm">© {new Date().getFullYear()} Hernán Vásquez Araujo. Todos los derechos reservados. <br />
        <span className="text-accent">Desarrollador FullStack</span>
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
            <a href="mailto: vasquezaraujoh@gmail.com" className="hover:text-accent transition">
                vasquezaraujoh@gmail.com
            </a>
            <span>·</span>
            <a href="https://wa.me/573001234567?text=Hola%20Hernan,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte" target="_blank" className="hover:text-accent transition" >Whatsapp</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/" target="_blank" className="hover:text-accent transition">
                LinkedIn
            </a>
            <span>·</span>
            <a href="https://github.com/HernanVasquezDev" target="_blank" className="hover:text-accent transition">
                GitHub
            </a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/hernan-jose-vasquez-araujo-fullstack-java-developer/" target="_blank" className="hover:text-accent transition">
                LinkedIn
            </a>
        </div>
    </footer>
);