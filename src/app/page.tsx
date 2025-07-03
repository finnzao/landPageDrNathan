"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Instagram, Phone, Calendar, Shield, Sparkles, Heart, Users, Award, Clock } from 'lucide-react';
import Image from 'next/image';

const DentalClinicLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Prevenção",
      description: "Acompanhamento completo para prevenir problemas odontológicos que podem se agravar com o tempo.",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Limpeza",
      description: "Procedimento profissional para remover impurezas e manter os dentes bonitos e bem cuidados.",
      icon: Sparkles,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Exodontia",
      description: "Extração de dentes com o melhor atendimento e praticidade. Resolva problemas com dentes do siso e outros.",
      icon: Heart,
      color: "from-rose-500 to-rose-600"
    },
    {
      title: "Restauração",
      description: "Reconstrução fundamental para manutenção dos dentes e saúde do corpo, garantindo uma ótima mastigação.",
      icon: Award,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Raspagem",
      description: "Tratamento para curar processos inflamatórios da gengiva, removendo tártaro e melhorando a saúde dos tecidos.",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Clareamento Dental",
      description: "Elimina pigmentos que mancham os dentes, renovando seu sorriso e entregando melhor qualidade de vida.",
      icon: Sparkles,
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const testimonials = [
    {
      name: "Jaine Oliveira",
      rating: 5,
      time: "3 semanas atrás",
      comment: "Excelente profissional, fui muito bem atendida!! Super indico e com certeza irei voltar sempre que precisar !!!"
    },
    {
      name: "Lucas Souza",
      rating: 5,
      time: "2 semanas atrás",
      comment: "Ótimo profissional! Minha primeira opção aqui em Aracaju. Recomendo!"
    },
    {
      name: "Ereni Argentina",
      rating: 5,
      time: "2 semanas atrás",
      comment: "Dentista calmo, atencioso. Pretendo retornar adorei o atendimento"
    },
    {
      name: "Marcos Alberto Mendonça",
      rating: 5,
      time: "3 semanas atrás",
      comment: "Gostei do Atendimento, Excelente, Sempre o procuro para cuidar da minha boca."
    },
    {
      name: "Ana Paula Santos",
      rating: 5,
      time: "1 semana atrás",
      comment: "Dr. Nathan é muito atencioso e profissional. Meu sorriso nunca esteve tão bonito!"
    },
    {
      name: "Carlos Eduardo",
      rating: 5,
      time: "4 semanas atrás",
      comment: "Ambiente limpo, moderno e atendimento excepcional. Recomendo a todos!"
    },
    {
      name: "Maria José",
      rating: 5,
      time: "2 semanas atrás",
      comment: "Procedimento de limpeza perfeito! Dr. Nathan explica tudo com muita paciência."
    },
    {
      name: "Roberto Silva",
      rating: 5,
      time: "1 semana atrás",
      comment: "Melhor dentista de Aracaju! Tratamento de excelência e preço justo."
    }
  ];

  // Duplicar os depoimentos para criar o efeito de loop infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [services.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/midia/LOGO.png"
                alt="Dr. Nathan Dantas Logo"
                className="h-18 w-auto"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c'))}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
              {['Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c'))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - CORRIGIDO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagem de fundo */}
        <Image
          src="/midia/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay com gradiente - z-index mais alto que a imagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/70 z-10"></div>

        {/* Fallback gradient - removido pois estava sobrepondo */}

        {/* Elementos animados de fundo */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Conteúdo principal - z-index mais alto */}
        <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            O melhor serviço
            <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              odontológico
            </span>
            para você
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transforme seu sorriso com tecnologia de ponta e atendimento humanizado
          </p>

          <a
            href="https://wa.me/message/BMPNVWC4QTNTM1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Calendar className="mr-2" size={20} />
            Agendar Consulta Agora
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <button
            onClick={() => scrollToSection('sobre')}
            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sobre <span className="text-blue-600">Dr. Nathan</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Estou aqui para <span className="font-semibold text-blue-600">ajudá-lo</span> a alcançar o{' '}
                  <span className="font-semibold text-blue-600">sorriso dos seus sonhos</span>.
                  Oferecendo uma ampla gama de serviços odontológicos, desde limpezas regulares
                  e check-ups até procedimentos mais complexos.
                </p>
                <p>
                  Meu compromisso é tornar a experiência odontológica o mais{' '}
                  <span className="font-semibold text-blue-600">confortável</span> e livre de estresse possível,
                  utilizando as mais modernas técnicas e tecnologias disponíveis.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: "500+", label: "Pacientes Atendidos" },
                  { number: "5+", label: "Anos de Experiência" },
                  { number: "98%", label: "Satisfação" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Desktop Version - Full Square */}
              <div className="hidden lg:block aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-teal-100">
                <img
                  src="/midia/doctor_desktop.png"
                  alt="Dr. Nathan Dantas"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Mobile/Tablet Version - Circular */}
              <div className="lg:hidden aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 p-8 flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl bg-white">
                  <img
                    src="/midia/doctor_mobile_.png"
                    alt="Dr. Nathan Dantas"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Award className="text-white" size={32} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-xl">
                <Heart className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Scroll */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que os <span className="text-blue-600">pacientes</span> dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de quem confia no melhor serviço de dentista
            </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite space-x-8">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100 shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400 text-sm">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm">{testimonial.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Agende sua consulta conosco hoje e descubra como podemos ajudá-lo a obter um sorriso saudável e bonito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <a
                  href="https://wa.me/message/BMPNVWC4QTNTM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Phone className="mr-2" size={20} />
                  Marcar Consulta via WhatsApp
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Localização</h3>
                    <p className="text-blue-100">
                      Prime OdontoMed<br />
                      Rua Divina Pastora, 291 - Centro<br />
                      Aracaju - SE, 49010-580
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <Instagram className="text-pink-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Redes Sociais</h3>
                    <a
                      href="https://www.instagram.com/dr.nathandantas/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-300 hover:text-pink-200 transition-colors"
                    >
                      @dr.nathandantas
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Horário de Funcionamento</h3>
                    <div className="text-blue-100 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.85728710112335!2d-37.05191774921855!3d-10.909129759242472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab36f913c154d%3A0x2f452953f3210b83!2sR.%20Divina%20Pastora%2C%20291%20-%20Centro%2C%20Aracaju%20-%20SE%2C%2049010-600!5e0!3m2!1spt-BR!2sbr!4v1688678143707!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dr. Nathan Dantas - Todos os direitos reservados</p>
            <p className="mt-2">Desenvolvido por <span className="text-blue-400">Vogl</span></p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 60s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default DentalClinicLanding;