import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Droplets, 
  Cpu, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BarChart3,
  Zap,
  Leaf,
  MessageCircle,
  Download,
  Play,
  Star,
  Award,
  Settings
} from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Show WhatsApp after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">RaizTech</span>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('produto')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Produto
              </button>
              <button 
                onClick={() => scrollToSection('roi')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('case')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                Contato
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <motion.button 
                onClick={() => scrollToSection('cta')}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 shadow-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Cotação
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1655487827859-e7ac6491bf64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGlycmlnYXRpb258ZW58MHx8fGdyZWVufDE3NTM2MTgzMzF8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl floating" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl floating" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Irrigadores Inteligentes que
              <span className="block gradient-text bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Revolucionam sua Fazenda
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Reduza <strong>40% dos custos de água</strong> e aumente <strong>22% a produtividade</strong> 
              com nossa tecnologia de irrigação inteligente baseada em IA
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={() => scrollToSection('produto')}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 shadow-glow flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Nosso Produto <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('roi')}
                className="glass text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Calcular ROI
              </motion.button>

              <motion.button 
                onClick={() => scrollToSection('cta')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Cotação
              </motion.button>
            </div>

            <div className="flex justify-center mt-12">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="h-8 w-8 text-white/70" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Section - NOVA */}
      <section id="produto" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.produto ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Irrigador Inteligente</span> RaizTech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              O equipamento físico que você vai comprar. Tecnologia completa para revolucionar sua irrigação.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible.produto ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1506180064210-cfa64ed82c11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxzbWFydCUyMGlycmlnYXRpb258ZW58MHx8fGdyZWVufDE3NTM2MTgzMzF8MA&ixlib=rb-4.1.0&q=85"
                alt="Irrigador Inteligente RaizTech"
                className="rounded-2xl shadow-premium w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                <Award className="inline h-4 w-4 mr-1" />
                Produto Físico
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.produto ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Especificações Técnicas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700"><strong>6 Sensores integrados:</strong> Umidade, pH, temperatura, luz, chuva</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700"><strong>IA embarcada:</strong> Decisões automáticas por cultura</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700"><strong>Conectividade:</strong> 4G + WiFi + LoRa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700"><strong>Alimentação:</strong> Solar + bateria 48h</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700"><strong>Cobertura:</strong> Até 5 hectares por unidade</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  onClick={() => scrollToSection('cta')}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Cotação
                </motion.button>
                
                <motion.button 
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </motion.button>
              </div>

              <motion.button 
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Catálogo Técnico
              </motion.button>
            </motion.div>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.produto ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Economia de Água</h4>
              <p className="text-2xl font-bold text-green-600 mb-1">40%</p>
              <p className="text-sm text-gray-600">Redução no consumo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.produto ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Aumento Produtividade</h4>
              <p className="text-2xl font-bold text-blue-600 mb-1">22%</p>
              <p className="text-sm text-gray-600">Por hectare</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.produto ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-yellow-100"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Payback</h4>
              <p className="text-2xl font-bold text-yellow-600 mb-1">18</p>
              <p className="text-sm text-gray-600">Meses</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Problem + Solution Combined */}
      <section id="problema-solucao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible["problema-solucao"] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que Escolher a <span className="gradient-text">RaizTech?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traduzimos tecnologia complexa em resultados simples para sua fazenda
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible["problema-solucao"] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Irrigação Tradicional</h3>
                <img 
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fGdyZWVufDE3NTM2MTgzMzV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Irrigação tradicional"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Desperdício de 60% da água</h4>
                    <p className="text-gray-600 text-sm">Irrigação por tempo, sem dados do solo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Produtividade inconsistente</h4>
                    <p className="text-gray-600 text-sm">Sem adaptação às necessidades das plantas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custos operacionais altos</h4>
                    <p className="text-gray-600 text-sm">Mão de obra + energia + água desperdiçada</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible["problema-solucao"] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Irrigação Inteligente RaizTech</h3>
                <img 
                  src="https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fGdyZWVufDE3NTM2MTgzMzV8MA&ixlib=rb-4.1.0&q=85"
                  alt="Tecnologia RaizTech"
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-6"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Economia de 40% na água</h4>
                    <p className="text-gray-600 text-sm">IA decide quando e quanto irrigar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">22% mais produtividade</h4>
                    <p className="text-gray-600 text-sm">Irrigação precisa por tipo de cultura</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI em 18 meses</h4>
                    <p className="text-gray-600 text-sm">Investimento que se paga rapidamente</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-green-700 hover:to-blue-700 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero Fazer a Mudança Agora <ArrowRight className="ml-2 h-5 w-5 inline" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.roi ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados que
              <span className="gradient-text"> Impactam o Lucro</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dados reais de fazendas que já utilizam nossa tecnologia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.roi ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <div className="text-lg font-medium mb-2">Redução no Consumo de Água</div>
              <div className="text-gray-400">Economia média mensal</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.roi ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">22%</div>
              <div className="text-lg font-medium mb-2">Aumento da Produtividade</div>
              <div className="text-gray-400">Por hectare cultivado</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.roi ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass p-8 rounded-2xl text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">18</div>
              <div className="text-lg font-medium mb-2">Meses de Payback</div>
              <div className="text-gray-400">Retorno do investimento</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.roi ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Calculadora de ROI</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-sm text-gray-400 mb-2">Fazenda de 50 hectares</div>
                <div className="text-2xl font-bold text-green-400">R$ 45.000/mês</div>
                <div className="text-sm text-gray-400">Economia de água</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Aumento de produtividade</div>
                <div className="text-2xl font-bold text-blue-400">R$ 67.000/mês</div>
                <div className="text-sm text-gray-400">Receita adicional</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">ROI total anual</div>
                <div className="text-2xl font-bold text-yellow-400">R$ 1.344.000</div>
                <div className="text-sm text-gray-400">Benefício líquido</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.case ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case de Sucesso:
              <span className="gradient-text"> Fazenda Santa Clara</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              50 hectares, cultivo de soja e milho - Resultados em 12 meses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible.case ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1529313780224-1a12b68bed16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MHx8fGdyZWVufDE7NTM2MTgzMzV8MA&ixlib=rb-4.1.0&q=85"
                alt="Fazenda Santa Clara - Resultados"
                className="rounded-2xl shadow-premium w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.case ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Implementação</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> 12 irrigadores inteligentes instalados</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Treinamento da equipe técnica</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> Integração com sistema de gestão</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Resultados Alcançados</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">38%</div>
                    <div className="text-sm text-blue-700">Redução água</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">22%</div>
                    <div className="text-sm text-blue-700">↑ Produtividade</div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-green-500 bg-gray-50 p-6 rounded-r-2xl">
                <p className="text-gray-700 italic mb-4">
                  "Pela primeira vez conseguimos apresentar um relatório ambiental completo para nossos investidores internacionais. O ROI superou nossas expectativas."
                </p>
                <footer className="text-gray-600">
                  <strong>João Silva</strong> - Proprietário, Fazenda Santa Clara
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Revolucionar sua Fazenda?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Agende uma análise técnica gratuita e descubra como nossos irrigadores inteligentes podem transformar seus resultados
            </p>

            <motion.form 
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.cta ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="E-mail profissional"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                  <option>Tamanho da fazenda</option>
                  <option>10-50 hectares</option>
                  <option>50-100 hectares</option>
                  <option>100-500 hectares</option>
                  <option>500+ hectares</option>
                </select>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="inline mr-2 h-5 w-5" />
                Solicitar Cotação Agora
              </motion.button>

              <div className="text-center mt-4">
                <p className="text-green-100 text-sm">
                  📞 Ou ligue agora: <strong>(61) 99265-5144</strong>
                </p>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os irrigadores inteligentes da RaizTech.', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
          <div className="absolute -top-12 -left-20 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            Fale conosco!
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">RaizTech</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolucionando o agronegócio com irrigação inteligente e sustentável. 
                Tecnologia que gera resultados mensuráveis.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contato@raiztech.com.br</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Irrigadores Inteligentes</li>
                <li>Software de Gestão</li>
                <li>Análise de Dados</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Cases de Sucesso</li>
                <li>Parcerias</li>
                <li>Contato</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 RaizTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;