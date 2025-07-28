import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header/Navigation */}
      <header className="bg-nav-dark text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 logo-container">
              <img src="/El_Resenador.png" alt="EL RESEÑADOR" className="h-12 w-auto rounded-full float-animation" />
              <span className="text-xl font-bold text-shadow-elegant">EL RESEÑADOR</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="hover:text-gray-300 transition-colors nav-link-elegant">Servicios</a>
              <a href="#nosotros" className="hover:text-gray-300 transition-colors nav-link-elegant">Nosotros</a>
              <a href="#contacto" className="hover:text-gray-300 transition-colors nav-link-elegant">Contacto</a>
            </div>
            <button className="btn-elegant px-6 py-2 font-semibold">
              Consulta Gratuita
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 pattern-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Reseñas Verificadas
              <span className="block text-secondary">que Transforman</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
              Mejoramos la reputación y posicionamiento de tu negocio local con reseñas auténticas en Google
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-elegant text-lg font-semibold">
                Empezar Ahora
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
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
              <p className="text-secondary mb-6">
                Generamos reseñas auténticas y verificadas que mejoran tu reputación y posicionamiento en Google Maps.
              </p>
              <ul className="text-secondary space-y-2">
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
              <p className="text-gray-600 mb-6">
                Mantenimiento continuo de tu reputación online con reseñas estratégicas y reportes mensuales.
              </p>
              <ul className="text-gray-600 space-y-2">
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
              <p className="text-gray-600 mb-6">
                Reseñas estratégicas que incluyen palabras clave específicas para mejorar tu posicionamiento local.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Keywords específicas</li>
                <li>• Nombres de productos/servicios</li>
                <li>• Mejora de SEO local</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section className="py-20 bg-card-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios Transparentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precios claros y sin sorpresas. Pagas solo por lo que necesitas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="price-card-elegant p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reseña Individual</h3>
                <div className="text-4xl font-bold text-black mb-2">4€</div>
                <p className="text-gray-600">por reseña verificada</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseña verificada en Google
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Usuario real verificado
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mejora de calificación
                </li>
              </ul>
              <button className="w-full btn-elegant py-3 rounded-lg font-semibold">
                Comenzar Ahora
              </button>
            </div>

            <div className="price-card-elegant p-8 rounded-xl shadow-elegant relative border-gradient">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">MÁS POPULAR</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Paquete Mensual</h3>
                <div className="text-4xl font-bold text-black mb-2">Desde 80€</div>
                <p className="text-gray-600">20 reseñas al mes</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  20 reseñas verificadas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reporte mensual incluido
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Seguimiento continuo
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con keywords
                </li>
              </ul>
              <button className="w-full btn-elegant py-3 rounded-lg font-semibold">
                Elegir Plan
              </button>
            </div>

            <div className="price-card-elegant p-8 rounded-xl shadow-elegant">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Premium</h3>
                <div className="text-4xl font-bold text-black mb-2">Desde 200€</div>
                <p className="text-gray-600">50 reseñas al mes</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  50 reseñas verificadas
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reporte detallado semanal
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Soporte prioritario
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Reseñas con fotos incluidas
                </li>
              </ul>
              <button className="w-full btn-elegant py-3 rounded-lg font-semibold">
                Elegir Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Resultados que Hablan</h2>
            <p className="text-xl text-gray-300">Nuestros números demuestran nuestro compromiso con el éxito</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-5xl font-bold stats-elegant mb-2">250+</div>
              <div className="text-gray-300">Reseñas al mes</div>
            </div>
            <div className="fade-in-up">
              <div className="text-5xl font-bold stats-elegant mb-2">200+</div>
              <div className="text-gray-300">Negocios atendidos</div>
            </div>
            <div className="fade-in-up">
              <div className="text-5xl font-bold stats-elegant mb-2">4.8★</div>
              <div className="text-gray-300">Calificación promedio</div>
            </div>
            <div className="fade-in-up">
              <div className="text-5xl font-bold stats-elegant mb-2">100%</div>
              <div className="text-gray-300">Reseñas verificadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-card-dark">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué EL RESEÑADOR?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos especialistas en reseñas verificadas para negocios locales. Ayudamos a restaurantes, 
                tiendas, peluquerías, gimnasios y otros negocios a destacar en Google con reseñas auténticas 
                que mejoran su reputación y posicionamiento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Reseñas verificadas en Google</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Usuarios reales verificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Mejora de reputación garantizada</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/El_Resenador.png" alt="EL RESEÑADOR" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Mejorar tu Reputación?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de negocios locales que ya destacan en Google con reseñas verificadas y auténticas
          </p>
          <button className="btn-elegant text-lg font-semibold px-8 py-4">
            Obtener Consulta Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-nav-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
                          <div className="flex items-center space-x-3 mb-4 logo-container">
              <img src="/El_Resenador.png" alt="EL RESEÑADOR" className="h-8 w-auto rounded-full" />
              <span className="text-xl font-bold">EL RESEÑADOR</span>
            </div>
              <p className="text-gray-300">
                Especialistas en reseñas verificadas para negocios locales que quieren destacar en Google.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Reseñas Verificadas</li>
                <li>Paquetes Mensuales</li>
                <li>Reseñas con Keywords</li>
                <li>Reportes Mensuales</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li>info@elresenador.com</li>
                <li>+52 (55) 1234-5678</li>
                <li>Ciudad de México, México</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2023 EL RESEÑADOR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
