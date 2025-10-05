import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Contador animado
  useEffect(() => {
    const counters = document.querySelectorAll('.counter')
    const speed = 600

    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const count = parseInt(counter.textContent || '0')
      const increment = target / speed

      if (count < target) {
        counter.textContent = Math.ceil(count + increment).toString()
        setTimeout(() => animateCounter(counter), 10)
      } else {
        counter.textContent = target.toString()
      }
    }

    // Intersection Observer para animar cuando el elemento sea visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          animateCounter(counter)
          observer.unobserve(counter)
        }
      })
    }, { threshold: 0.5 })

    counters.forEach(counter => {
      observer.observe(counter)
    })

    return () => {
      counters.forEach(counter => {
        observer.unobserve(counter)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-nav-dark/95 backdrop-blur-md text-white border-b border-subtle">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 logo-container">
              <img src="/logor.png" alt="EL RESEÑADOR" className="h-8 md:h-12 w-auto rounded-full float-animation" />
              <span className="text-lg md:text-xl font-bold text-shadow-elegant">EL RESEÑADOR</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="hover:text-gray-300 transition-colors nav-link-elegant">Servicio</a>
              <a href="#nosotros" className="hover:text-gray-300 transition-colors nav-link-elegant">Nosotros</a>
              <a href="#precios" className="hover:text-gray-300 transition-colors nav-link-elegant">Precios</a>
              <a href="#faq" className="hover:text-gray-300 transition-colors nav-link-elegant">FAQ</a>
              <a href="#contacto" className="hover:text-gray-300 transition-colors nav-link-elegant">Contacto</a>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20reseña%20gratuita%20para%20mejorar%20mi%20reputación%20online%20en%20Google.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios?" target="_blank" rel="noopener noreferrer" className="btn-elegant px-6 py-2 font-semibold">
              Reseña Gratuita
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4 border-t border-subtle mt-4">
              <a 
                href="#servicios" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Servicio
              </a>
              <a 
                href="#nosotros" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Nosotros
              </a>
              <a 
                href="#precios" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Precios
              </a>
              <a 
                href="#faq" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a 
                href="#contacto" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Contacto
              </a>
              <div className="pt-4 border-t border-subtle">
                <a 
                  href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20reseña%20gratuita%20para%20mejorar%20mi%20reputación%20online%20en%20Google.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios?" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-elegant w-full text-center py-3 font-semibold block"
                  onClick={closeMenu}
                >
                  Reseña Gratuita
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

                        {/* Hero Section */}
                  <section className="gradient-hero text-white pt-32 pb-20 pattern-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texto a la izquierda */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-headline">
                Reseñas Verificadas
                <span className="block highlight">que Transforman</span>
              </h1>
              <p className="text-xl md:text-2xl text-paragraph mb-8">
                Mejora tu reputación online con reseñas auténticas
              </p>
              <div className="flex justify-center lg:justify-start">
                <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20reseña%20gratuita%20para%20mejorar%20mi%20reputación%20online%20en%20Google.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios?" target="_blank" rel="noopener noreferrer" className="btn-elegant text-lg font-semibold text-center flex items-center justify-center">
                Reseña gratuita
                </a>
              </div>
            </div>
            
            {/* Características a la derecha */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 highlight-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-headline mb-1">Reseñas 100% verificadas</h4>
                  <p className="text-paragraph">Usuarios reales con cuentas activas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 highlight-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-headline mb-1">Posicionamiento local</h4>
                  <p className="text-paragraph">Aparece más arriba en Google Maps</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 highlight-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-headline mb-1">Contenido estratégico</h4>
                  <p className="text-paragraph">Palabras clave para mejorar tu SEO</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 highlight-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-headline mb-1">Resultados garantizados</h4>
                  <p className="text-paragraph">Desde el primer día</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 highlight-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-headline mb-1">Soporte especializado</h4>
                  <p className="text-paragraph">Acompañamiento personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Nuestro Servicio</h2>
            <p className="text-xl text-paragraph max-w-4xl mx-auto leading-relaxed">
              Especialistas en reseñas verificadas para negocios locales
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-headline mb-8">¿Qué incluye nuestro servicio?</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 highlight-bg rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Reseñas Verificadas</h3>
              <p className="text-paragraph leading-relaxed flex-grow">
                Reseñas de usuarios reales verificadas en Google
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 highlight-bg rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Paquetes Estratégicos de Reseñas</h3>
              <p className="text-paragraph leading-relaxed flex-grow">
                Paquetes únicos adaptados a tu negocio
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="w-16 h-16 highlight-bg rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Reseñas con Palabras Clave Locales</h3>
              <p className="text-paragraph leading-relaxed flex-grow">
                Reseñas con palabras clave para mejorar tu SEO local
              </p>
            </div>
          </div>
          
          {/* Características Destacadas */}
          <div className="flex justify-center">
            <div className="glass-card p-8 rounded-2xl hover-elegant transform hover:-translate-y-2 transition-all duration-300 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 highlight-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-headline">100% Confidencial</h4>
                    <p className="text-paragraph text-xs">Tu información segura</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 highlight-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-headline">Resultados Garantizados</h4>
                    <p className="text-paragraph text-xs">Desde el primer día</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 highlight-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
      <div>
                    <h4 className="text-sm font-bold text-headline">Negocios Locales</h4>
                    <p className="text-paragraph text-xs">Enfoque especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-br from-primary-dark via-card-dark to-primary-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-headline mb-6">¿Por qué elegir El Reseñador?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-highlight to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-paragraph max-w-4xl mx-auto leading-relaxed">
              Especialistas en reseñas verificadas para negocios locales
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-headline mb-6">Nosotros</h3>
                <p className="text-lg text-paragraph leading-relaxed">
                  En El Reseñador, nos especializamos en reseñas verificadas para negocios locales, asegurando que cada opinión sea genuina y de usuarios reales. Transformamos tu perfil de Google en una herramienta de ventas activa, con paquetes personalizados que incluyen palabras clave locales para mejorar tu SEO. Garantizamos resultados inmediatos y un aumento en tu facturación desde el primer día. Además, ofrecemos 100% confidencialidad y un enfoque especializado, asegurando que tu información esté segura. Elige El Reseñador para elevar tu presencia digital y convertir más visitas en ventas.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img src="/logor.png" alt="EL RESEÑADOR" className="w-full max-w-lg mx-auto drop-shadow-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-purple-500/20 rounded-full blur-3xl transform scale-150"></div>
            </div>
          </div>
          
          {/* Estadísticas Animadas */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
              <div className="glass-card p-6 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 min-w-[280px]">
                <div className="w-14 h-14 highlight-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-headline">
                    <span className="counter" data-target="300">0</span>+
                  </div>
                  <h3 className="text-lg font-semibold text-headline">Clientes Satisfechos</h3>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl hover-elegant transform hover:scale-105 transition-all duration-300 flex items-center space-x-4 min-w-[280px]">
                <div className="w-14 h-14 highlight-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-headline">
                    <span className="counter" data-target="98">0</span>%
                  </div>
                  <h3 className="text-lg font-semibold text-headline">Tasa de Éxito</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Precios Section */}
      <section id="precios" className="py-0 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Nuestros Planes</h2>
            <p className="text-xl text-paragraph">Elige el plan perfecto para tu negocio</p>
            <p className="text-lg text-paragraph mt-2 font-medium">Precios con IVA incluido</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pack Mini */}
            <div className="price-card-elegant p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-headline mb-2">Pack Mini</h3>
                <div className="text-4xl font-bold highlight mb-2">49,99€</div>
                <p className="text-paragraph">10 Reseñas</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mejora de SEO para tu posicionamiento
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Informe de resultados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas reales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Privacidad garantizada
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entrega en un máximo de 7 días
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantía de 15 días después de que complete el pedido
                </li>
              </ul>
              <a href="https://wa.me/34632425771?text=Hola! Me interesa el Pack Mini de 10 reseñas por 49,99€. ¿Podrías darme más información?" className="btn-elegant w-full text-center block">
                Seleccionar Pack Mini
              </a>
            </div>

            {/* Pack Pro */}
            <div className="price-card-elegant p-8 rounded-xl shadow-elegant relative border-gradient">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">MÁS POPULAR</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-headline mb-2">Pack Pro</h3>
                <div className="text-4xl font-bold highlight mb-2">112,99€</div>
                <p className="text-paragraph">25 Reseñas</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mejora de SEO para tu posicionamiento
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Informe de resultados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas reales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Privacidad garantizada
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entrega en un máximo de 7 días
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantía de 15 días después de que complete el pedido
                </li>
              </ul>
              <a href="https://wa.me/34632425771?text=Hola! Me interesa el Pack Pro de 25 reseñas por 112,99€. ¿Podrías darme más información?" className="btn-elegant w-full text-center block">
                Seleccionar Pack Pro
              </a>
            </div>

            {/* Pack Avanzado */}
            <div className="price-card-elegant p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-headline mb-2">Pack Avanzado</h3>
                <div className="text-4xl font-bold highlight mb-2">199,99€</div>
                <p className="text-paragraph">50 Reseñas</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mejora de SEO para tu posicionamiento
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Informe de resultados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas reales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Privacidad garantizada
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entrega en un máximo de 7 días
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantía de 15 días después de que complete el pedido
                </li>
              </ul>
              <a href="https://wa.me/34632425771?text=Hola! Me interesa el Pack Avanzado de 50 reseñas por 199,99€. ¿Podrías darme más información?" className="btn-elegant w-full text-center block">
                Seleccionar Pack Avanzado
              </a>
            </div>

            {/* Pack Premium */}
            <div className="price-card-elegant p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-headline mb-2">Pack Premium</h3>
                <div className="text-4xl font-bold highlight mb-2">349,99€</div>
                <p className="text-paragraph">100 Reseñas</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con keywords
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mejora de SEO para tu posicionamiento
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Informe de resultados
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas reales
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Privacidad garantizada
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Entrega en un máximo de 7 días
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantía de 15 días después de que complete el pedido
                </li>
              </ul>
              <a href="https://wa.me/34632425771?text=Hola! Me interesa el Pack Premium de 100 reseñas por 349,99€. ¿Podrías darme más información?" className="btn-elegant w-full text-center block">
                Seleccionar Pack Premium
        </a>
      </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-card-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-paragraph max-w-3xl mx-auto">
              Aquí resolvemos algunas dudas que son comunes en todos los clientes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full p-6 text-left flex justify-between items-center hover-elegant transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
              >
                <h3 className="text-lg font-semibold text-headline">
                  ¿Son las reseñas genuinas y cumplen con la legalidad de Google?
                </h3>
                <svg 
                  className={`w-5 h-5 text-headline transition-all duration-500 ease-in-out ${openFAQ === 0 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-paragraph leading-relaxed transform transition-all duration-300 delay-100">
                    Sí. Garantizamos la autenticidad y legalidad. Todas las reseñas son publicadas por usuarios reales con perfiles verificados y respetan estrictamente todas las políticas y directrices de Google.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full p-6 text-left flex justify-between items-center hover-elegant transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
              >
                <h3 className="text-lg font-semibold text-headline">
                  ¿Qué información se requiere para crear reseñas hechas a mi medida?
                </h3>
                <svg 
                  className={`w-5 h-5 text-headline transition-all duration-500 ease-in-out ${openFAQ === 1 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-paragraph leading-relaxed transform transition-all duration-300 delay-100">
                    Solo necesitamos dos cosas: la dirección física del negocio y una descripción detallada de cómo es (sus puntos fuertes, sector, ambiente, etc.). Con esta información, redactamos reseñas totalmente personalizadas.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full p-6 text-left flex justify-between items-center hover-elegant transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
              >
                <h3 className="text-lg font-semibold text-headline">
                  ¿Puedo revisar y aprobar el contenido antes de la publicación?
                </h3>
                <svg 
                  className={`w-5 h-5 text-headline transition-all duration-500 ease-in-out ${openFAQ === 2 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-paragraph leading-relaxed transform transition-all duration-300 delay-100">
                    Por supuesto. Te enviaremos ejemplos de las reseñas basadas en tu descripción para que las revises. Podrás sugerir ajustes para garantizar que el tono sea natural y refleje fielmente tu negocio.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full p-6 text-left flex justify-between items-center hover-elegant transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
              >
                <h3 className="text-lg font-semibold text-headline">
                  ¿Existe algún riesgo de penalización o sanción por parte de Google?
                </h3>
                <svg 
                  className={`w-5 h-5 text-headline transition-all duration-500 ease-in-out ${openFAQ === 3 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-paragraph leading-relaxed transform transition-all duration-300 delay-100">
                    No, el riesgo es nulo. Empleamos una estrategia 100% orgánica y segura, utilizando perfiles legítimos y publicando las reseñas de forma escalonada para imitar el comportamiento natural de los clientes, cumpliendo siempre con la normativa.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full p-6 text-left flex justify-between items-center hover-elegant transition-all duration-300 hover:bg-white/5 active:scale-[0.98]"
              >
                <h3 className="text-lg font-semibold text-headline">
                  ¿Qué incluye el pago y cuáles son los métodos de pago?
                </h3>
                <svg 
                  className={`w-5 h-5 text-headline transition-all duration-500 ease-in-out ${openFAQ === 4 ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
        </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-paragraph leading-relaxed transform transition-all duration-300 delay-100">
                    El pago se realiza de forma segura mediante Bizum o tarjeta bancaria. El coste cubre la gestión integral del servicio: desde la redacción personalizada del contenido hasta la planificación y publicación estratégica de las reseñas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Contáctanos</h2>
            <p className="text-xl text-paragraph max-w-3xl mx-auto">
              Estamos aquí para ayudarte a mejorar la reputación de tu negocio. Contáctanos para una consulta gratuita.
        </p>
      </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20reseña%20gratuita%20para%20mejorar%20mi%20reputación%20online%20en%20Google.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios?" target="_blank" rel="noopener noreferrer" className="glass-card p-8 rounded-xl text-center hover-elegant block">
              <div className="w-16 h-16 highlight-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">WhatsApp</h3>
              <p className="text-paragraph mb-4">Chatea con nosotros</p>
              <span className="text-success hover:text-headline transition-colors font-semibold">
                +34 632 42 57 71
              </span>
            </a>
            
            <div className="glass-card p-8 rounded-xl text-center hover-elegant">
              <div className="w-16 h-16 highlight-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Email</h3>
              <p className="text-paragraph mb-4">Envíanos un mensaje</p>
              <a href="mailto:elresenador2024@gmail.com" className="text-success hover:text-headline transition-colors">
                elresenador2024@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-nav-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
                          <div className="flex items-center space-x-3 mb-4 logo-container">
                              <img src="/logor.png" alt="EL RESEÑADOR" className="h-8 w-auto rounded-full" />
              <span className="text-xl font-bold">EL RESEÑADOR</span>
            </div>
              <p className="text-paragraph">
                Especialistas en reseñas verificadas para negocios locales
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-paragraph">
                <li><a href="#servicios" className="hover:text-headline transition-colors">Nuestro Servicios</a></li>
                <li><a href="#nosotros" className="hover:text-headline transition-colors">¿Por qué elegirnos?</a></li>
                <li><a href="#precios" className="hover:text-headline transition-colors">Precios</a></li>
                <li><a href="#faq" className="hover:text-headline transition-colors">FAQ</a></li>
                <li><a href="#contacto" className="hover:text-headline transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-paragraph">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:elresenador2024@gmail.com" className="hover:text-headline transition-colors">
                    elresenador2024@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +34 632 42 57 71
                </li>
                
              </ul>
            </div>
            

          </div>
          
          <div className="border-t border-subtle mt-8 pt-8 text-center text-paragraph">
            <p className="mb-4">&copy; 2023 EL RESEÑADOR. Todos los derechos reservados.</p>
            
            {/* Documentos Legales */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="/POLÍTICADEPRIVACIDAD.pdf" 
                download="Politica_Privacidad_EL_RESENADOR.pdf"
                className="hover:text-headline transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Política de Privacidad
              </a>
              
              <a 
                href="/AVISOLEGAL.pdf" 
                download="Aviso_Legal_EL_RESENADOR.pdf"
                className="hover:text-headline transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Aviso Legal
              </a>
              
              <a 
                href="/ TÉRMINOSyCONDICIONES.pdf" 
                download="Terminos_Condiciones_EL_RESENADOR.pdf"
                className="hover:text-headline transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Bubble */}
      <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20reseña%20gratuita%20para%20mejorar%20mi%20reputación%20online%20en%20Google.%20¿Podrían%20ayudarme%20con%20más%20información%20sobre%20sus%20servicios?" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  )
}

export default App
