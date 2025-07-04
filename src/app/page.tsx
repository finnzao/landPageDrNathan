"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Instagram, Phone, Calendar, Shield, Sparkles, Heart, Users, Award, Clock, Star, CheckCircle, Smile, Target, UserCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const DentalClinicLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentResultSlide, setCurrentResultSlide] = useState(0);

  const services = [
    {
      title: "Clareamento Dental",
      description: "Devolva o brilho natural do seu sorriso com técnicas avançadas e seguras que respeitam o esmalte dental.",
      icon: Sparkles,
      color: "from-amber-500 to-yellow-500",
      benefit: "Sorriso até 8 tons mais branco"
    },
    {
      title: "Implantes Dentários",
      description: "Recupere a função mastigatória e a autoestima com implantes de última geração que se integram perfeitamente.",
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      benefit: "Solução definitiva e natural"
    },
    {
      title: "Ortodontia Moderna",
      description: "Alinhe seus dentes com conforto usando aparelhos discretos e tecnologia de ponta para resultados rápidos.",
      icon: Smile,
      color: "from-teal-500 to-green-600",
      benefit: "Sorriso perfeito e alinhado"
    },
    {
      title: "Estética Dental",
      description: "Harmonize seu sorriso com lentes de contato dental e facetas que transformam completamente sua aparência.",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      benefit: "Transformação total do sorriso"
    },
    {
      title: "Prevenção Completa",
      description: "Mantenha sua saúde bucal em dia com check-ups regulares e tratamentos preventivos personalizados.",
      icon: Shield,
      color: "from-emerald-500 to-teal-600",
      benefit: "Saúde bucal garantida"
    },
    {
      title: "Odontopediatria",
      description: "Cuidado especial para os pequenos em ambiente lúdico e acolhedor, criando uma experiência positiva.",
      icon: Users,
      color: "from-purple-500 to-violet-600",
      benefit: "Crianças sem medo do dentista"
    }
  ];

  const testimonials = [
    {
      name: "Ana Carolina Santos",
      age: "32 anos",
      treatment: "Clareamento + Facetas",
      rating: 5,
      comment: "Nunca pensei que pudesse ter um sorriso tão bonito! Dr. Nathan transformou completamente minha autoestima. Agora sorrio sem medo e me sinto muito mais confiante no trabalho e na vida pessoal.",
      beforeAfter: "Ganhou 6 tons mais branco"
    },
    {
      name: "Roberto Mendes",
      age: "45 anos",
      treatment: "Implantes Dentários",
      rating: 5,
      comment: "Depois de anos evitando sorrir por causa dos dentes que perdi, finalmente posso comer e sorrir normalmente. O tratamento foi mais confortável do que imaginava e o resultado é incrível!",
      beforeAfter: "Recuperou 3 dentes perdidos"
    },
    {
      name: "Marina Oliveira",
      age: "28 anos",
      treatment: "Ortodontia Invisível",
      rating: 5,
      comment: "Sempre quis corrigir meus dentes, mas tinha vergonha do aparelho metálico. Com o tratamento invisível, ninguém percebeu que eu estava usando e o resultado ficou perfeito!",
      beforeAfter: "Sorriso alinhado em 8 meses"
    },
    {
      name: "Carlos Eduardo",
      age: "38 anos",
      treatment: "Harmonização Facial",
      rating: 5,
      comment: "Além de cuidar dos meus dentes, Dr. Nathan fez uma harmonização que rejuvenesceu meu rosto. Minha esposa diz que estou 10 anos mais novo!",
      beforeAfter: "Aparência rejuvenescida"
    },
    {
      name: "Juliana Costa",
      age: "26 anos",
      treatment: "Lentes de Contato Dental",
      rating: 5,
      comment: "Sempre tive complexo com meus dentes pequenos e desalinhados. As lentes mudaram minha vida! Agora tenho o sorriso dos meus sonhos e uma confiança que nunca tive.",
      beforeAfter: "Sorriso dos sonhos realizado"
    }
  ];

  const objections = [
    {
      icon: Heart,
      concern: "Tenho medo de dentista",
      solution: "Ambiente acolhedor e técnicas de sedação consciente para seu total conforto",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Clock,
      concern: "Não tenho tempo disponível",
      solution: "Horários flexíveis, inclusive aos sábados, para se adaptar à sua rotina",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      concern: "Medo de procedimentos dolorosos",
      solution: "Tecnologia moderna com anestesia localizada e procedimentos minimamente invasivos",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: UserCheck,
      concern: "Não sei se o resultado será bom",
      solution: "Mais de 500 sorrisos transformados e garantia de satisfação em todos os tratamentos",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "Especialista Certificado",
      description: "Formação em universidades renomadas com especializações em estética dental e implantodontia"
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos para diagnósticos precisos e tratamentos mais rápidos e eficazes"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado com foco no seu bem-estar e conforto durante todo o tratamento"
    },
    {
      icon: CheckCircle,
      title: "Resultados Garantidos",
      description: "Compromisso com a excelência e satisfação total dos nossos pacientes"
    }
  ];

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
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentResultSlide((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
                alt="Dr. Nathan Dantas - Odontologia"
                className="h-18 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Início', 'Tratamentos', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Início' ? 'hero' : item === 'Tratamentos' ? 'servicos' : item.toLowerCase())}
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
              {['Início', 'Tratamentos', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Início' ? 'hero' : item === 'Tratamentos' ? 'servicos' : item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/midia/banner.jpg"
          alt="Consultório Odontológico Dr. Nathan Dantas"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 z-10"></div>

        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-30 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Desperte sua
            <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              confiança
            </span>
            com o sorriso perfeito
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme sua vida com tratamentos odontológicos de excelência.
            Tecnologia avançada, cuidado humanizado e resultados que superam suas expectativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://wa.me/message/BMPNVWC4QTNTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Phone className="mr-2" size={20} />
              Agende Sua Consulta Agora
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              <Smile className="mr-2" size={20} />
              Conheça Nossos Tratamentos
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">300+</div>
              <div className="text-sm">Sorrisos Transformados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3+</div>
              <div className="text-sm">Anos de Excelência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Satisfação Garantida</div>
            </div>
          </div>
        </div>

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
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-teal-100 p-4">
                  <img
                    src="/midia/doctor_mobile_.png"
                    alt="Dr. Nathan Dantas - Especialista em Odontologia"
                    className="w-full h-full object-cover object-center rounded-2xl"
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="text-white" size={20} />
                </div>
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="text-white" size={16} />
                </div>
              </div>
            </div>

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Dr. Nathan Dantas
                </h2>
                <p className="text-xl text-blue-600 font-semibold">
                  Especialista em Transformar Sorrisos e Vidas
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-blue-600">Sua autoestima merece o melhor cuidado.</span>
                  Com mais de 5 anos dedicados à odontologia de excelência, transformo não apenas sorrisos,
                  mas vidas inteiras através do poder de um sorriso confiante.
                </p>
                <p>
                  Cada paciente é único, e por isso <span className="font-bold text-blue-600">personalizo cada tratamento</span>
                  para suas necessidades específicas, utilizando as mais avançadas tecnologias e técnicas minimamente invasivas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <p className="text-xl font-bold text-blue-700 italic">
                  "Minha missão é devolver sua confiança e fazer você sorrir sem medo.
                  Cada sorriso transformado é uma vida que ganha nova qualidade."
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-900">
                  Dr. Nathan Dantas
                </h2>
                <p className="text-2xl text-blue-600 font-semibold">
                  Especialista em Transformar Sorrisos e Vidas
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-blue-600">Sua autoestima merece o melhor cuidado.</span>
                  Com mais de 5 anos dedicados à odontologia de excelência, transformo não apenas sorrisos,
                  mas vidas inteiras através do poder de um sorriso confiante.
                </p>
                <p>
                  Cada paciente é único, e por isso <span className="font-bold text-blue-600">personalizo cada tratamento</span>
                  para suas necessidades específicas, utilizando as mais avançadas tecnologias e técnicas minimamente invasivas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl border-l-4 border-blue-500">
                <p className="text-xl font-bold text-blue-700 italic">
                  "Minha missão é devolver sua confiança e fazer você sorrir sem medo.
                  Cada sorriso transformado é uma vida que ganha nova qualidade."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {differentials.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-teal-100">
                <img
                  src="/midia/doctor_desktop.png"
                  alt="Dr. Nathan Dantas - Consultório Odontológico"
                  className="w-full h-full object-cover object-center"
                />
              </div>
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
              Tratamentos que <span className="text-blue-600">Transformam Vidas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como nossos tratamentos especializados podem devolver sua confiança e transformar seu sorriso em uma verdadeira obra de arte
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-semibold text-green-600">{service.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-center mb-4">{service.description}</p>
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-sm font-semibold text-green-600">{service.benefit}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
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

          <div className="text-center mt-12">
            <a
              href="https://wa.me/message/BMPNVWC4QTNTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Calendar className="mr-2" size={20} />
              Descubra Qual Tratamento é Ideal Para Você
            </a>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Suas <span className="text-blue-600">Preocupações</span> São Importantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entendemos suas preocupações e estamos aqui para oferece o cuidado e conforto que você merece
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objections.map((objection, index) => {
              const IconComponent = objection.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${objection.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">"{objection.concern}"</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-blue-600">Nossa solução:</span> {objection.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resultados <span className="text-blue-600">Comprovados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja a transformação real de nossos pacientes. Cada caso é único e merece um cuidado especial.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Restauração 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Restauração Completa</h3>
                <p className="text-gray-600">Transformação total do sorriso com técnicas avançadas</p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/midia/restauracao.JPG"
                  alt="Resultado de Restauração Dental - Antes e Depois"
                  className="w-full h-auto object-contain bg-white"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ✓ RESULTADO REAL
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Dor</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">1x</div>
                  <div className="text-sm text-gray-600">Sessão</div>
                </div>
              </div>
            </div>

            {/* Restauração 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Estética Avançada</h3>
                <p className="text-gray-600">Recuperação da função e beleza natural</p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/midia/restauracao2.jpg"
                  alt="Resultado de Restauração Estética - Transformação"
                  className="w-full h-auto object-contain bg-white"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ✓ SEM FILTROS
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">Natural</div>
                  <div className="text-sm text-gray-600">Aparência</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">Durável</div>
                  <div className="text-sm text-gray-600">Resultado</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">Rápido</div>
                  <div className="text-sm text-gray-600">Tratamento</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentResultSlide * 100}%)` }}
                >
                  {/* Slide 1 - Restauração 1 */}
                  <div className="w-full flex-shrink-0 px-2">
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 shadow-xl">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Restauração Completa</h3>
                        <p className="text-gray-600 text-sm">Transformação total do sorriso</p>
                      </div>

                      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4">
                        <img
                          src="/midia/restauracao.JPG"
                          alt="Resultado de Restauração Dental - Antes e Depois"
                          className="w-full h-64 sm:h-80 md:h-96 object-contain bg-white"
                        />
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ✓ RESULTADO REAL
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-blue-600">100%</div>
                          <div className="text-xs text-gray-600">Satisfação</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-green-600">0</div>
                          <div className="text-xs text-gray-600">Dor</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-purple-600">1x</div>
                          <div className="text-xs text-gray-600">Sessão</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - Restauração 2 */}
                  <div className="w-full flex-shrink-0 px-2">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 shadow-xl">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Estética Avançada</h3>
                        <p className="text-gray-600 text-sm">Recuperação da função e beleza</p>
                      </div>

                      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4">
                        <img
                          src="/midia/restauracao2.jpg"
                          alt="Resultado de Restauração Estética - Transformação"
                          className="w-full h-64 sm:h-80 md:h-96 object-contain bg-white"
                        />
                        <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ✓ SEM FILTROS
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-blue-600">Natural</div>
                          <div className="text-xs text-gray-600">Aparência</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-green-600">Durável</div>
                          <div className="text-xs text-gray-600">Resultado</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-lg">
                          <div className="text-lg font-bold text-purple-600">Rápido</div>
                          <div className="text-xs text-gray-600">Tratamento</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  onClick={() => setCurrentResultSlide(0)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentResultSlide === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
                <button
                  onClick={() => setCurrentResultSlide(1)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentResultSlide === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              </div>

              {/* Slide Indicators */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentResultSlide + 1} de 2 • Resultados Reais
                </span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Cada Caso é Único e Especial
              </h3>
              <p className="text-blue-100 mb-6">
                Nossos resultados são fruto de anos de experiência, tecnologia avançada e dedicação total ao seu bem-estar.
                Seu sorriso merece o melhor cuidado.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Técnicas Modernas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Materiais Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span className="font-semibold">Garantia de Qualidade</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/message/BMPNVWC4QTNTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Smile className="mr-2" size={20} />
              Quero Minha Transformação Também
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vidas <span className="text-blue-600">Transformadas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as histórias reais de quem teve sua vida transformada com nossos tratamentos
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].comment}"
                  </p>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].age}</p>
                      <p className="text-blue-600 font-semibold">{testimonials[currentTestimonial].treatment}</p>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full">
                    <CheckCircle className="mr-2" size={20} />
                    <span className="font-semibold">{testimonials[currentTestimonial].beforeAfter}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.comment.slice(0, 100)}..."
                </p>
                <div className="mt-4 text-xs text-blue-600 font-semibold">
                  {testimonial.treatment}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sua Transformação Começa Agora
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã o sorriso que você sempre sonhou. Agende sua consulta e descubra como podemos transformar sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/BMPNVWC4QTNTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone className="mr-2" size={20} />
              Agendar Consulta Gratuita
            </a>
            <a
              href="https://wa.me/message/BMPNVWC4QTNTM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <Instagram className="mr-2" size={20} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos prontos para atendê-lo com todo carinho e atenção que você merece
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Localização</h3>
                    <p className="text-gray-300">
                      Prime OdontoMed<br />
                      Rua Divina Pastora, 291 - Centro<br />
                      Aracaju - SE, 49010-580
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/message/BMPNVWC4QTNTM1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      Clique aqui para agendar
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <Instagram className="text-pink-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Instagram</h3>
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
                    <h3 className="text-white font-semibold mb-2">Horário de Atendimento</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Dr. Nathan Dantas - Todos os direitos reservados</p>
            <p className="mt-2">Transformando sorrisos, transformando vidas</p>
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