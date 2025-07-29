import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
              <a href="#servicios" className="hover:text-gray-300 transition-colors nav-link-elegant">Servicios</a>
              <a href="#precios" className="hover:text-gray-300 transition-colors nav-link-elegant">Precios</a>
              <a href="#nosotros" className="hover:text-gray-300 transition-colors nav-link-elegant">Nosotros</a>
              <a href="#contacto" className="hover:text-gray-300 transition-colors nav-link-elegant">Contacto</a>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20para%20mejorar%20mi%20reputación%20online" target="_blank" rel="noopener noreferrer" className="btn-elegant px-6 py-2 font-semibold">
                Consulta Gratuita
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
                Servicios
              </a>
              <a 
                href="#precios" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Precios
              </a>
              <a 
                href="#nosotros" 
                className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors nav-link-elegant"
                onClick={closeMenu}
              >
                Nosotros
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
                  href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20para%20mejorar%20mi%20reputación%20online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-elegant w-full text-center py-3 font-semibold block"
                  onClick={closeMenu}
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

                        {/* Hero Section */}
                  <section className="gradient-hero text-white pt-32 pb-20 pattern-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-headline">
              Reseñas Verificadas
              <span className="block highlight">que Transforman</span>
            </h1>
            <p className="text-xl md:text-2xl text-paragraph mb-8 max-w-3xl mx-auto">
              Mejoramos la reputación y posicionamiento de tu negocio local con reseñas auténticas en Google
            </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20para%20mejorar%20mi%20reputación%20online" target="_blank" rel="noopener noreferrer" className="btn-elegant text-lg font-semibold text-center flex items-center justify-center">
                            Empezar Ahora
                          </a>
                          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors hover-elegant">
                            Ver Casos de Éxito
                          </button>
                        </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-paragraph max-w-3xl mx-auto">
              Especialistas en reseñas verificadas para negocios locales que quieren destacar en Google
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl hover-elegant">
              <div className="w-16 h-16 icon-elegant rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Reseñas Verificadas en Google</h3>
              <p className="text-paragraph mb-6">
                Generamos reseñas auténticas y verificadas que mejoran tu reputación y posicionamiento en Google Maps.
              </p>
              <ul className="text-paragraph space-y-2">
                <li>• Reseñas de usuarios reales</li>
                <li>• Verificación completa en Google</li>
                <li>• Mejora de calificación promedio</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl hover-elegant">
              <div className="w-16 h-16 icon-elegant rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Paquetes Mensuales</h3>
              <p className="text-paragraph mb-6">
                Mantenimiento continuo de tu reputación online con reseñas estratégicas y reportes mensuales.
              </p>
              <ul className="text-paragraph space-y-2">
                <li>• Reseñas continuas</li>
                <li>• Reportes mensuales</li>
                <li>• Seguimiento de resultados</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl hover-elegant">
              <div className="w-16 h-16 icon-elegant rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m4 0V2a1 1 0 011-1h2a1 1 0 011 1v2m-7 0h.01M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Reseñas con Keywords</h3>
              <p className="text-paragraph mb-6">
                Reseñas estratégicas que incluyen palabras clave específicas para mejorar tu posicionamiento local.
              </p>
              <ul className="text-paragraph space-y-2">
                <li>• Keywords específicas</li>
                <li>• Nombres de productos/servicios</li>
                <li>• Mejora de SEO local</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section id="precios" className="py-20 bg-primary-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-headline mb-4">Nuestros Planes</h2>
            <p className="text-xl text-paragraph">Elige el plan perfecto para tu negocio</p>
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
                <div className="text-4xl font-bold highlight mb-2">35€</div>
                <p className="text-paragraph">10 reseñas</p>
                <p className="text-sm text-success font-semibold">(10% de descuento)</p>
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
              </ul>
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20el%20pack%20mini%20de%2010%20reseñas%20por%2035€%20con%2010%%20de%20descuento" target="_blank" rel="noopener noreferrer" className="w-full btn-elegant py-3 rounded-lg font-semibold block text-center">
                Elegir Plan
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
                <div className="text-4xl font-bold highlight mb-2">75€</div>
                <p className="text-paragraph">25 reseñas</p>
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
              </ul>
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20el%20pack%20pro%20de%2025%20reseñas%20por%2075€" target="_blank" rel="noopener noreferrer" className="w-full btn-elegant py-3 rounded-lg font-semibold block text-center">
                Elegir Plan
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
                <div className="text-4xl font-bold highlight mb-2">140€</div>
                <p className="text-paragraph">50 reseñas</p>
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
              </ul>
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20el%20pack%20avanzado%20de%2050%20reseñas%20por%20140€" target="_blank" rel="noopener noreferrer" className="w-full btn-elegant py-3 rounded-lg font-semibold block text-center">
                Elegir Plan
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
                <div className="text-4xl font-bold highlight mb-2">275€</div>
                <p className="text-paragraph">100 reseñas</p>
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
              </ul>
              <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20el%20pack%20premium%20de%20100%20reseñas%20por%20275€" target="_blank" rel="noopener noreferrer" className="w-full btn-elegant py-3 rounded-lg font-semibold block text-center">
                Elegir Plan
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-card-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-headline mb-6">¿Por qué elegir El Reseñador?</h2>
              <p className="text-lg text-paragraph mb-6">
                En un mundo donde la primera impresión sucede en Google, la reputación online lo es todo. En El Reseñador somos especialistas en generar reseñas verificadas y reales para negocios locales que quieren destacar frente a su competencia.
              </p>
              <p className="text-lg text-paragraph mb-6">
                Ayudamos a restaurantes, tiendas, peluquerías, gimnasios, clínicas y otros negocios físicos a fortalecer su presencia digital con reseñas auténticas que transmiten confianza y credibilidad a nuevos clientes.
              </p>
              <p className="text-lg text-paragraph mb-8">
                Nuestro objetivo es convertir tu perfil de Google en una herramienta de ventas activa, atrayendo más visitas, generando más llamadas y aumentando tu facturación.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 highlight-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-headline mb-2">Reseñas 100% verificadas</h3>
                    <p className="text-paragraph">Todas las reseñas provienen de usuarios reales, con cuentas activas y comportamiento natural, para garantizar autenticidad y evitar sanciones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 highlight-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-headline mb-2">Posicionamiento local mejorado</h3>
                    <p className="text-paragraph">Las reseñas ayudan a que tu negocio aparezca más arriba en las búsquedas locales de Google Maps y aumente su visibilidad.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 highlight-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-headline mb-2">Contenido estratégico</h3>
                    <p className="text-paragraph">Podemos incluir palabras clave, nombres de productos o servicios específicos para reforzar tu SEO local y captar al cliente ideal.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 highlight-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-headline mb-2">Resultados visibles</h3>
                    <p className="text-paragraph">Desde las primeras reseñas verás una mejora en tu puntuación promedio y más interacción en tu perfil.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 glass-card rounded-xl">
                <p className="text-lg font-semibold text-headline text-center">
                  Confía en nosotros para llevar tu negocio al siguiente nivel.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/logor.png" alt="EL RESEÑADOR" className="w-full max-w-md mx-auto" />
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl text-center hover-elegant">
              <div className="w-16 h-16 highlight-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Email</h3>
              <p className="text-paragraph mb-4">Envíanos un mensaje</p>
              <a href="mailto:info@elresenador.com" className="text-success hover:text-headline transition-colors">
                info@elresenador.com
              </a>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center hover-elegant">
              <div className="w-16 h-16 highlight-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Teléfono</h3>
              <p className="text-paragraph mb-4">Llámanos directamente</p>
              <a href="tel:+525512345678" className="text-success hover:text-headline transition-colors">
                +52 (55) 1234-5678
              </a>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center hover-elegant">
              <div className="w-16 h-16 highlight-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-headline mb-4">Ubicación</h3>
              <p className="text-paragraph mb-4">Visítanos</p>
              <p className="text-success">
                Ciudad de México, México
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-headline mb-6">Horarios de Atención</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-headline mb-4">Días Laborales</h4>
                <p className="text-paragraph">Lunes a Viernes</p>
                <p className="text-success font-semibold">9:00 AM - 6:00 PM</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-headline mb-4">Fin de Semana</h4>
                <p className="text-paragraph">Sábados</p>
                <p className="text-success font-semibold">10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-nav-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
                          <div className="flex items-center space-x-3 mb-4 logo-container">
                              <img src="/logor.png" alt="EL RESEÑADOR" className="h-8 w-auto rounded-full" />
              <span className="text-xl font-bold">EL RESEÑADOR</span>
            </div>
              <p className="text-paragraph">
                Especialistas en reseñas verificadas para negocios locales que quieren destacar en Google.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-paragraph">
                <li><a href="#servicios" className="hover:text-headline transition-colors">Reseñas Verificadas</a></li>
                <li><a href="#precios" className="hover:text-headline transition-colors">Paquetes Mensuales</a></li>
                <li><a href="#servicios" className="hover:text-headline transition-colors">Reseñas con Keywords</a></li>
                <li><a href="#servicios" className="hover:text-headline transition-colors">Reportes Mensuales</a></li>
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
                  info@elresenador.com
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +52 (55) 1234-5678
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Ciudad de México, México
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-paragraph hover:text-headline transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-paragraph hover:text-headline transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-paragraph hover:text-headline transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-subtle mt-8 pt-8 text-center text-paragraph">
            <p>&copy; 2024 EL RESEÑADOR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Bubble */}
      <a href="https://wa.me/34632425771?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20para%20mejorar%20mi%20reputación%20online" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  )
}

export default App
