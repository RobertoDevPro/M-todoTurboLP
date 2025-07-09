import {
  Heart,
  Clock,
  DollarSign,
  Users,
  Star,
  Gift,
  Rocket,
  Target,
  CheckCircle,
  Baby,
  Home,
  TrendingUp,
  Play,
  Crown,
  Shield,
  Award,
  Lock,
  Timer,
  Flame,
  Trophy,
  Diamond,
  ArrowRight,
  Zap,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react"
import Image from "next/image"

export default function MetodoTurboLanding() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Botão Flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/556292251634"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
          title="WhatsApp: +55 62 9225-1634"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515" />
          </svg>
        </a>
      </div>

      {/* Seção 1 - Hero com VSL */}
      <section className="relative py-16 px-4 text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Efeito dourado de fundo */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-yellow-300/50 to-yellow-500/50 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-2xl animate-pulse delay-3000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-3xl animate-pulse delay-4000"></div>
        </div>

        {/* Overlay para suavizar o efeito */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>

        {/* Conteúdo da seção (manter todo o conteúdo existente) */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge de Urgência */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-bounce">
            <Flame className="w-4 h-4 mr-2" />
            Últimas 24 vagas disponíveis
          </div>

          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full mb-4 shadow-xl">
              <Rocket className="w-10 h-10 text-black" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Método Turbo</h1>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full inline-block mb-6 shadow-xl">
            <p className="text-lg md:text-xl font-semibold">Acelere seus sonhos em 30 dias</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            <span className="text-yellow-400 font-semibold">Liberdade financeira</span> •
            <span className="text-yellow-300 font-semibold"> Tempo com os filhos</span> •
            <span className="text-yellow-200 font-semibold"> Vida dos sonhos</span>
          </p>

          {/* VSL */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gray-800 rounded-2xl p-2 shadow-2xl border border-yellow-500/20">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/nsl3jI7ggKA"
                  title="Método Turbo - VSL Original"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="https://pay.kiwify.com.br/HUitB6V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold text-xl px-10 py-5 rounded-full hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Quero acelerar meus sonhos agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300 text-sm">
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-md border border-yellow-500/20">
                <Shield className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="font-medium">Garantia 7 dias</span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-md border border-yellow-500/20">
                <Lock className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="font-medium">Pagamento seguro</span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-md border border-yellow-500/20">
                <Award className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="font-medium">Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Dor */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-12">
            Você está vivendo uma vida que não escolheu?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-2xl border border-red-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sempre cansada</h3>
              <p className="text-gray-300 leading-relaxed">
                Sem tempo nem para respirar, correndo atrás do prejuízo todo dia?
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-red-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dinheiro nunca sobra</h3>
              <p className="text-gray-300 leading-relaxed">
                Trabalha muito mas no final do mês está sempre no vermelho?
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-red-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Baby className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Perdendo os filhos</h3>
              <p className="text-gray-300 leading-relaxed">
                Vê seus filhos crescerem à distância enquanto trabalha para sobreviver?
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-red-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Medo de mudar</h3>
              <p className="text-gray-300 leading-relaxed">
                Sabe que precisa mudar mas tem medo de dar o primeiro passo?
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-500/20 shadow-lg">
            <p className="text-2xl font-bold text-white mb-3">Essa era a realidade de milhares de mulheres...</p>
            <p className="text-xl text-gray-300">
              Até elas descobrirem o <span className="text-yellow-400 font-bold">Método Turbo</span>
            </p>
          </div>
        </div>
      </section>

      {/* Nova Seção - Urgência */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-black mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Atenção!</h2>
          </div>

          <p className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
            Enquanto você hesita, outras mulheres estão construindo
            <span className="text-black font-bold"> a vida dos sonhos</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-black mb-2">24h</div>
              <p className="text-sm text-black">Primeira venda média</p>
            </div>
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-black mb-2">7 dias</div>
              <p className="text-sm text-black">Para ver resultados</p>
            </div>
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-black mb-2">30 dias</div>
              <p className="text-sm text-black">Vida transformada</p>
            </div>
          </div>

          <a
            href="https://pay.kiwify.com.br/HUitB6V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-yellow-400 font-bold text-xl px-10 py-5 rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Zap className="w-6 h-6 mr-3" />
            Não quero ficar para trás
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </section>

      {/* Seção 3 - Storytelling */}
      <section className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Uma história que pode ser a sua
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-yellow-500/20 h-full hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-8 overflow-hidden">
                <Image
                  src="/caren.jpg"
                  alt="Caren - Especialista Método Turbo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Caren</h3>
              <div className="bg-yellow-500/10 p-6 rounded-xl mb-6 border border-yellow-500/20">
                <p className="font-bold text-white mb-3">15 anos no CLT</p>
                <p className="text-gray-300">Rotina pesada, sem tempo com o filho, vivendo no automático...</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-6 rounded-xl border border-yellow-500/20">
                <p className="font-bold text-yellow-400 mb-3">Hoje: Liberdade total!</p>
                <p className="text-gray-300">Trabalha de casa, vê o filho crescer, vive seus sonhos!</p>
              </div>
            </div>

            <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-yellow-500/20 h-full hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-8 overflow-hidden">
                <Image
                  src="/cecilia.jpg"
                  alt="Cecília - Especialista Método Turbo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-3xl font-bold text-yellow-500 mb-6 text-center">Cecília</h3>
              <div className="bg-yellow-500/10 p-6 rounded-xl mb-6 border border-yellow-500/20">
                <p className="font-bold text-white mb-3">Batalhou muito, mas...</p>
                <p className="text-gray-300">Loja, faculdade, garra... mas faltava qualidade de vida</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-6 rounded-xl border border-yellow-500/20">
                <p className="font-bold text-yellow-400 mb-3">Hoje: Vida dos sonhos!</p>
                <p className="text-gray-300">Liberdade, propósito e tempo para o que importa!</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-10 rounded-2xl shadow-2xl">
              <Rocket className="w-16 h-16 text-black mx-auto mb-6" />
              <p className="text-2xl font-bold text-black mb-4">Juntas, elas criaram o Método Turbo</p>
              <p className="text-xl text-black/80">E já ajudaram mais de 1.247 mulheres a transformarem suas vidas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - O Método */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-12">
            O que é o Método Turbo?
          </h2>

          <div className="bg-gray-800 p-12 rounded-2xl border-2 border-yellow-500/20 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
              <Rocket className="w-12 h-12 text-black" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-400 font-bold text-2xl">1</span>
                </div>
                <p className="font-bold text-white text-lg mb-2">Simples</p>
                <p className="text-gray-300">Passo a passo mastigado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-400 font-bold text-2xl">2</span>
                </div>
                <p className="font-bold text-white text-lg mb-2">Prático</p>
                <p className="text-gray-300">Aplica no mesmo dia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-400 font-bold text-2xl">3</span>
                </div>
                <p className="font-bold text-white text-lg mb-2">Realista</p>
                <p className="text-gray-300">Para mulheres reais</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Construa uma <span className="text-yellow-400 font-bold">nova fonte de renda</span> no digital, mesmo
              <span className="text-yellow-300 font-bold"> sem experiência</span>, sem precisar aparecer, com
              estratégias
              <span className="text-orange-400 font-bold"> validadas</span> por quem vive o que ensina!
            </p>
          </div>
        </div>
      </section>

      {/* Nova Seção - Prova Social Rápida */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Resultados que falam por si</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm border border-black/20">
              <div className="text-4xl font-bold text-black mb-2">1.247</div>
              <p className="text-sm text-black">Mulheres transformadas</p>
            </div>
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm border border-black/20">
              <div className="text-4xl font-bold text-black mb-2">97%</div>
              <p className="text-sm text-black">Taxa de sucesso</p>
            </div>
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm border border-black/20">
              <div className="text-4xl font-bold text-black mb-2">R$ 3.2k</div>
              <p className="text-sm text-black">Média primeiro mês</p>
            </div>
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm border border-black/20">
              <div className="text-4xl font-bold text-black mb-2">30 dias</div>
              <p className="text-sm text-black">Para ver mudanças</p>
            </div>
          </div>

          <a
            href="https://pay.kiwify.com.br/HUitB6V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-yellow-400 font-bold text-xl px-10 py-5 rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Trophy className="w-6 h-6 mr-3" />
            Quero fazer parte dessas estatísticas
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </section>

      {/* Seção 5 - Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              O que você vai desbloquear
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Liberdade financeira</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">
                Saia do CLT ou complemente sua renda com segurança total
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comece do zero</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">Entre no digital mesmo sem experiência nenhuma</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Transforme habilidades</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">
                Suas experiências viram um negócio online lucrativo
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vendas consistentes</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">Venda com consistência e leveza, sem pressão</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tempo de qualidade</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">
                Rotina com tempo para os filhos, para você e para sua casa
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Suporte exclusivo</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">
                Acesso direto com Caren e Cecília para tirar suas dúvidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção - Comparação */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Método Turbo vs Outros Cursos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-8 rounded-2xl border-2 border-red-500/20">
              <div className="flex items-center mb-6">
                <X className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-red-400">Outros cursos</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Teoria sem prática</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Promessas irreais</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Sem suporte real</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Estratégias ultrapassadas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-8 rounded-2xl border-2 border-yellow-500/20">
              <div className="flex items-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-yellow-400">Método Turbo</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Estratégias testadas e aprovadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Resultados em 30 dias</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Mentoria direta das criadoras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Comunidade ativa e acolhedora</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 - Para quem é */}
      <section className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Para quem é o Método Turbo?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mr-6">
                  <Heart className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Liberdade total</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Mulheres que querem liberdade financeira e emocional</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mr-6">
                  <Baby className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Mães guerreiras</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Que não aceitam mais abrir mão do tempo com seus filhos</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mr-6">
                  <Rocket className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Empreendedoras</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Que querem acelerar resultados no digital</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mr-6">
                  <Crown className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Nasceram para mais</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">Mulheres que sentem que nasceram para mais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7 - Prova Social */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Histórias de transformação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-500/20 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-3 py-1 rounded-full border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-xs">RESULTADO</span>
                  </div>
                </div>
                <Image
                  src="/depoimento1.jpg"
                  alt="Depoimento de vendas - Andressa"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-yellow-400 font-bold">Primeira venda em dias!</p>
                <p className="text-gray-400 text-sm">Andressa - Afiliada</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-500/20 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-3 py-1 rounded-full border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-xs">APOIO</span>
                  </div>
                </div>
                <Image
                  src="/depoimento2.jpg"
                  alt="Depoimento Simone - Suporte Método Turbo"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-yellow-400 font-bold">Mentoras incríveis!</p>
                <p className="text-gray-400 text-sm">Simone - Comunidade</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-500/20 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-3 py-1 rounded-full border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-xs">SUCESSO</span>
                  </div>
                </div>
                <Image
                  src="/depoimento3.jpg"
                  alt="Depoimento Rose - Primeira venda"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-yellow-400 font-bold">R$ 140 em 7 dias!</p>
                <p className="text-gray-400 text-sm">Rose - Mentoria</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-500/20 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-3 py-1 rounded-full border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-xs">EVOLUÇÃO</span>
                  </div>
                </div>
                <Image
                  src="/depoimento4.jpg"
                  alt="Depoimento Graziele - Aprendizado"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-yellow-400 font-bold">Aprendizado real!</p>
                <p className="text-gray-400 text-sm">Graziele - Aluna</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-500/20 h-full md:col-span-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-3 py-1 rounded-full border border-yellow-500/20">
                    <span className="text-yellow-400 font-bold text-xs">TOP</span>
                  </div>
                </div>
                <Image
                  src="/depoimento5.jpg"
                  alt="Depoimentos múltiplos - Suporte Turbo"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <p className="text-yellow-400 font-bold">Melhor mentoria!</p>
                <p className="text-gray-400 text-sm">Comunidade Turbo</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-8 rounded-2xl border-2 border-yellow-500/20 inline-block shadow-lg">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-2">Mais de 1.247 transformações</p>
              <p className="text-gray-300">E você pode ser a próxima história de sucesso!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 8 - Bônus */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              Bônus exclusivos (Valor: R$ 2.497)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Acesso anual</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">Método Turbo para sempre na sua vida!</p>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">VALOR: R$ 497</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Planos semanais</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">Passo a passo detalhado toda semana</p>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">VALOR: R$ 397</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comunidade VIP</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">Rede exclusiva de apoio feminino</p>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">VALOR: R$ 697</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mentoria ao vivo</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">Direto com Caren e Cecília</p>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">VALOR: R$ 597</span>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-yellow-500/20 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ferramentas prontas</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                Roteiros e templates para aplicar hoje mesmo
              </p>
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-500/20">
                <span className="text-yellow-400 font-bold">VALOR: R$ 297</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-8 rounded-2xl border-2 border-yellow-500/30 h-full text-center flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Total em bônus</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-3">R$ 2.497</p>
              <p className="text-gray-300 mb-6 flex-grow font-medium">Grátis para você!</p>
              <div className="bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 px-4 py-2 rounded-full border border-yellow-500/30">
                <span className="text-yellow-400 font-bold">100% GRÁTIS</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://pay.kiwify.com.br/HUitB6V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-xl px-12 py-6 rounded-full hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Gift className="w-6 h-6 mr-3" />
              Garantir meus bônus agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Nova Seção - Escassez Temporal */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Timer className="w-12 h-12 text-yellow-300 mr-4 animate-spin" />
            <h2 className="text-3xl md:text-4xl font-bold">Tempo esgotando!</h2>
          </div>

          <p className="text-xl md:text-2xl font-semibold mb-8">
            Esta oferta expira em <span className="text-yellow-300 font-bold">24 horas</span>
          </p>

          <div className="bg-black/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">00</div>
                <div className="text-xs md:text-sm">Horas</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">23</div>
                <div className="text-xs md:text-sm">Minutos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">45</div>
                <div className="text-xs md:text-sm">Segundos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">24</div>
                <div className="text-xs md:text-sm">Vagas</div>
              </div>
            </div>
          </div>

          <a
            href="https://pay.kiwify.com.br/HUitB6V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-yellow-400 font-bold text-xl px-12 py-6 rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <Zap className="w-6 h-6 mr-3" />
            Garantir minha vaga AGORA
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </section>

      {/* Seção 9 - Escassez */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-8">
            Apenas 24 vagas restantes
          </h2>

          <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border-2 border-red-500/20">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Timer className="w-10 h-10 text-red-500" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">1.247</div>
                <p className="text-gray-300">Mulheres transformadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">24</div>
                <p className="text-gray-300">Vagas restantes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-300">Taxa de sucesso</p>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Acreditamos na <span className="text-red-500 font-bold">proximidade</span>, no
              <span className="text-yellow-500 font-bold"> suporte real</span> e na
              <span className="text-yellow-400 font-bold"> transformação verdadeira</span>.
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              Esse não é mais um curso online. É um caminho guiado por quem vive o que ensina.
            </p>

            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 p-6 rounded-xl border-2 border-yellow-500/20">
              <p className="text-xl font-bold text-white">Quando as vagas acabarem, você terá que esperar 6 meses!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 10 - Chamada Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent mb-12">
            Você tem dois caminhos
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-black/10 p-6 md:p-10 rounded-2xl backdrop-blur-sm border-2 border-black/20 h-full">
              <div className="text-4xl md:text-8xl mb-6 md:mb-8">❌</div>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4 md:mb-6">Caminho da dor</h3>
              <ul className="text-left space-y-3 md:space-y-4">
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-red-600 mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Continuar cansada e sem tempo
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-red-600 mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Dinheiro sempre apertado
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-red-600 mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Perdendo momentos com os filhos
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-red-600 mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Sonhos sempre adiados
                </li>
              </ul>
            </div>

            <div className="bg-black/10 p-6 md:p-10 rounded-2xl backdrop-blur-sm border-2 border-black/20 h-full">
              <div className="text-4xl md:text-8xl mb-6 md:mb-8">✅</div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">Caminho do sucesso</h3>
              <ul className="text-left space-y-3 md:space-y-4">
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-black mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Liberdade financeira e emocional
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-black mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Tempo de qualidade com a família
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-black mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Trabalhar de casa com propósito
                </li>
                <li className="flex items-center text-base md:text-lg">
                  <span className="text-black mr-2 md:mr-3 text-lg md:text-xl">•</span>
                  Viver a vida dos seus sonhos
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="bg-black p-6 md:p-10 rounded-3xl shadow-2xl max-w-lg w-full border-4 border-yellow-300">
              <p className="text-lg md:text-2xl font-bold text-white mb-4">De R$ 2.497 por apenas:</p>
              <div className="flex items-center justify-center space-x-3 md:space-x-6 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-red-500 line-through">R$ 497</span>
                <span className="text-4xl md:text-6xl font-bold text-yellow-400">R$ 97</span>
              </div>
              <p className="text-gray-300 text-lg md:text-xl">ou 12x de R$ 19,70</p>
            </div>

            <a
              href="https://pay.kiwify.com.br/HUitB6V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-yellow-400 font-bold text-lg md:text-2xl px-8 md:px-16 py-4 md:py-6 rounded-full hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-black"
            >
              <Rocket className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4" />
              Quero acelerar meus sonhos agora
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-4" />
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-black/90">
              <div className="flex items-center bg-black/10 px-3 md:px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-black mr-2" />
                <span className="font-medium text-sm md:text-base">Garantia 7 dias</span>
              </div>
              <div className="flex items-center bg-black/10 px-3 md:px-4 py-2 rounded-full">
                <Lock className="w-4 h-4 md:w-5 md:h-5 text-black mr-2" />
                <span className="font-medium text-sm md:text-base">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center bg-black/10 px-3 md:px-4 py-2 rounded-full">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-black mr-2" />
                <span className="font-medium text-sm md:text-base">Suporte vitalício</span>
              </div>
            </div>

            <div className="bg-red-600 p-4 md:p-6 rounded-2xl border-4 border-red-500 animate-pulse">
              <p className="text-lg md:text-2xl font-bold text-white">🔥 Últimas 24 vagas - Oferta expira em breve!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm">Desenvolvido por</span>
              <a
                href="https://www.devpro.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 font-semibold text-sm transition-colors duration-300"
              >
                DevPro
              </a>
            </div>
            <div className="text-xs text-gray-500">
              © 2025 Método Turbo. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
