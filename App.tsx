
import React, { useState } from 'react';
import { AppSection } from './types';
import { NAV_ITEMS, GLOSSARY_DATA, POLICIES_SUMMARY, INTERNSHIP_MODELS } from './constants';
import { 
  BookOpen, Scale, FileText, 
  MessageCircle, Heart, Star, ChevronRight, 
  ShieldCheck, MapPin, Award,
  ExternalLink, Menu, X, Briefcase, GraduationCap, ArrowLeft, Download,
  Gavel, Clock, Users, AlertTriangle, Layers, Target, Construction, BookMarked,
  Activity, Zap, History, Globe, Shield, Home, Settings, Eye, Waves, TrendingUp,
  Milestone, Navigation, Landmark, Fingerprint, Music, Wrench, Sparkles, Binary,
  Puzzle, Handshake, Shapes, Link2, Maximize2, Search, Brain, RefreshCw, Banknote,
  Stethoscope, Umbrella, Network, Share2, Link, BarChart3, 
  Compass, Building2,
  Table as Bridge
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const renderPrevidenciaSocialDetailedContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Políticas
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Previdência Social</h1>
        <p className="text-slate-500 font-medium italic">Seguro Social e Proteção à Renda - Lei nº 8.213/91</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          A <strong>Previdência Social</strong> é o sistema público responsável pela administração dos benefícios pagos pelo INSS, funcionando como um seguro controlado pelo governo que garante renda ao contribuinte e sua família em momentos de necessidade como velhice, doença ou maternidade.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <RefreshCw size={24} className="text-brand" />
            1. Natureza e Funcionamento
          </h2>
          <div className="bg-brand-light p-5 rounded-2xl border border-brand/20">
            <p className="text-sm text-brand-deep leading-relaxed">
              Baseia-se em um <strong>regime de repartição simples</strong> ou sistema solidário: as contribuições dos ativos custeiam os benefícios dos inativos. Compõe, com Saúde e Assistência, o tripé da Seguridade Social da CF/88.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Building2 size={24} className="text-brand" />
            2. Gestão e Regimes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-brand-deep text-sm mb-1">RGPS (Regime Geral)</h4>
              <p className="text-[10px] text-slate-500">Iniciativa privada e autônomos. Gestão pelo INSS.</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-brand-deep text-sm mb-1">RPPS (Regime Próprio)</h4>
              <p className="text-[10px] text-slate-500">Destinado exclusivamente a servidores públicos de cargo efetivo.</p>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic">Nota: A adesão é obrigatória para quem exerce atividade remunerada.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Users size={24} className="text-brand" />
            3. Quem pode ser segurado
          </h2>
          <p className="text-sm">
            Além dos trabalhadores automáticos (carteira assinada), qualquer cidadão a partir de 16 anos (estudantes, donas de casa) pode contribuir como <strong>segurado facultativo</strong> para garantir proteção.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Award size={24} className="text-brand" />
            4. Tipos de Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-bold text-brand-deep text-xs uppercase tracking-wider">Ao Segurado</h4>
              <ul className="text-[11px] space-y-1 text-slate-600 list-disc pl-4">
                <li>Aposentadorias (Idade, Invalidez, Especial)</li>
                <li>Auxílio-doença (Incapacidade Temporária)</li>
                <li>Auxílio-acidente</li>
                <li>Salário-família e Maternidade</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-brand-deep text-xs uppercase tracking-wider">Aos Dependentes</h4>
              <ul className="text-[11px] space-y-1 text-slate-600 list-disc pl-4">
                <li>Pensão por morte</li>
                <li>Auxílio-reclusão</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <History size={24} className="text-brand" />
            5. Histórico e Evolução
          </h2>
          <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-xs leading-relaxed text-slate-600">
              Marco inicial: <strong>Lei Eloy Chaves (1923)</strong>. Evoluiu dos IAPs (Era Vargas) para o INPS (1966) e o atual INSS (1990). Enfrenta reformas constantes (1998, 2003, 2019) devido ao envelhecimento populacional e busca por sustentabilidade.
            </p>
          </div>
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand">
              <Waves size={24} />
              O Reservatório Comunitário
            </h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">
              "Imagine a previdência como um grande reservatório de água: quem trabalha despeja um balde (contribuição) todo mês; essa água vai para quem não pode mais buscar por idade ou saúde. O pacto é que a próxima geração encherá o reservatório para você."
            </p>
          </div>
          <Banknote size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>

        <div className="pt-6">
          <a 
            href="https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg"
          >
            <ExternalLink size={20} /> Acessar Lei 8.213/91 (Planalto)
          </a>
        </div>
      </div>
    </div>
  );

  const renderAssistenciaSocialDetailedContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Políticas
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Assistência Social</h1>
        <p className="text-slate-500 font-medium italic">Direito do Cidadão e Dever do Estado - Lei nº 8.742/1993 (LOAS)</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          A política de <strong>Assistência Social</strong> no Brasil é definida como um direito do cidadão e um dever do Estado, constituindo-se em uma política de Seguridade Social <strong>não contributiva</strong>. Isso significa que o acesso não depende de contribuição financeira prévia.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Landmark size={24} className="text-brand" />
            1. Contexto Institucional e Legal
          </h2>
          <div className="bg-brand-light p-5 rounded-2xl border border-brand/20">
            <ul className="space-y-2 text-sm text-brand-deep">
              <li className="flex gap-2"><strong>Tripé da Seguridade:</strong> Forma, junto com a Saúde e a Previdência Social, a base da proteção social da CF/88.</li>
              <li className="flex gap-2"><strong>Regulamentação:</strong> Regida pela Lei Orgânica da Assistência Social (LOAS) e operacionalizada pelo SUAS.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Target size={24} className="text-brand" />
            2. Objetivos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Proteção à família, maternidade, infância, adolescência e velhice.",
              "Amparo a crianças e adolescentes em situação de vulnerabilidade.",
              "Promoção da integração ao mercado de trabalho.",
              "Habilitação e reabilitação de pessoas com deficiência.",
              "Garantia do Benefício de Prestação Continuada (BPC)."
            ].map((obj, i) => (
              <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm flex gap-2 items-start">
                <ShieldCheck size={16} className="text-brand flex-shrink-0 mt-0.5" />
                <span className="text-[11px] font-medium text-slate-600">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Layers size={24} className="text-brand" />
            3. Organização e Níveis de Proteção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm border-t-4 border-brand">
              <h4 className="font-bold text-brand-deep mb-2 flex items-center gap-2">
                <Home size={18} className="text-brand-dark" /> Proteção Básica (CRAS)
              </h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Prevenção de riscos via fortalecimento de vínculos familiares e comunitários. O CRAS é a unidade principal.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm border-t-4 border-rose-400">
              <h4 className="font-bold text-brand-deep mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-rose-500" /> Proteção Especial (CREAS)
              </h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Atua onde ocorreu violação de direitos ou rompimento de laços. Unidade principal: CREAS.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Scale size={24} className="text-brand" />
            4. Princípios e Diretrizes
          </h2>
          <p className="text-sm">
            Guiada pela supremacia do atendimento às necessidades sociais e pelo respeito à dignidade. Destaca-se a <strong>descentralização político-administrativa</strong> e a <strong>participação popular</strong>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Users size={24} className="text-brand" />
            5. Gestão e Controle Social
          </h2>
          <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-sm mb-3">Gestão compartilhada sob coordenação do Ministério do Desenvolvimento Social (MDS).</p>
            <div className="p-3 bg-white rounded-xl border border-slate-100 text-xs text-slate-600">
              <strong>Controle Social:</strong> Conselhos paritários (como o CNAS) deliberam e fiscalizam as ações entre governo e sociedade civil.
            </div>
          </div>
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand">
              <Umbrella size={24} />
              A Analogia da Rede
            </h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">
              "Imagine a Assistência Social como uma rede de proteção estendida sob todos os cidadãos: ela não exige o pagamento de um 'ingresso' (contribuição), mas está lá para garantir que ninguém atinja o chão em momentos de queda ou vulnerabilidade extrema."
            </p>
          </div>
          <Network size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>

        <div className="pt-6">
          <a 
            href="https://www.planalto.gov.br/ccivil_03/leis/l8742.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg"
          >
            <ExternalLink size={20} /> Acessar Lei 8.742/93 (LOAS)
          </a>
        </div>
      </div>
    </div>
  );

  const renderSaudeContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Políticas
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Saúde</h1>
        <p className="text-slate-500 font-medium italic">Direito de todos e dever do Estado - Leis 8.080/90 e 8.142/90</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          O <strong>Sistema Único de Saúde (SUS)</strong> é o sistema público de saúde brasileiro, instituído pela Constituição Federal de 1988, que o define como um direito de todos e dever do Estado. Ele operacionaliza o atendimento público de forma universal e gratuita por meio das Leis 8.080/90 e 8.142/90.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Heart size={24} className="text-brand" />
            1. Princípios Ético-Doutrinários
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand">
              <strong className="text-brand-deep text-xs block mb-1">Universalidade</strong>
              <p className="text-[10px] text-slate-500">Saúde como direito fundamental, 100% de cobertura populacional sem barreiras.</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand-dark">
              <strong className="text-brand-deep text-xs block mb-1">Integralidade</strong>
              <p className="text-[10px] text-slate-500">Considera o indivíduo como um todo em todos os níveis de complexidade.</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand-deep">
              <strong className="text-brand-deep text-xs block mb-1">Equidade</strong>
              <p className="text-[10px] text-slate-500">Tratar desigualmente os desiguais para priorizar os grupos mais vulneráveis.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Settings size={24} className="text-brand" />
            2. Princípios Organizativo-Operativos
          </h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand flex gap-3">
              <Navigation size={20} className="text-brand flex-shrink-0" />
              <div>
                <strong className="text-brand-deep text-sm block">Descentralização</strong>
                <p className="text-[11px] text-slate-600">Gestão redistribuída entre as três esferas de governo com comando único e municipalização.</p>
              </div>
            </li>
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-dark flex gap-3">
              <Layers size={20} className="text-brand-dark flex-shrink-0" />
              <div>
                <strong className="text-brand-deep text-sm block">Regionalização e Hierarquização</strong>
                <p className="text-[11px] text-slate-600">Serviços organizados em redes regionais e por níveis de complexidade crescente.</p>
              </div>
            </li>
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-deep flex gap-3">
              <Users size={20} className="text-brand-deep flex-shrink-0" />
              <div>
                <strong className="text-brand-deep text-sm block">Participação Popular</strong>
                <p className="text-[11px] text-slate-600">Controle social via Conferências de Saúde (4 em 4 anos) e Conselhos permanentes.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Activity size={24} className="text-brand" />
            3. Níveis de Atenção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-brand-deep mb-2 text-xs uppercase">Atenção Básica</h4>
              <p className="text-[10px] text-slate-500">Porta de entrada preferencial. Resolve +80% dos problemas (Saúde da Família).</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-brand-deep mb-2 text-xs uppercase">Média Complexidade</h4>
              <p className="text-[10px] text-slate-500">Consultas especializadas e exames diagnósticos (SADTs). Um dos maiores gargalos.</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <h4 className="font-bold text-brand-deep mb-2 text-xs uppercase">Alta Complexidade</h4>
              <p className="text-[10px] text-slate-500">Alta tecnologia e custo: transplantes, quimioterapia e cirurgias cardíacas.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Banknote size={24} className="text-brand" />
            4. Gestão, Planejamento e Financiamento
          </h2>
          <div className="p-5 bg-brand-light/30 border border-brand/20 rounded-3xl space-y-3">
            <p className="text-sm">Financiamento das 3 esferas: Estados (12%) e Municípios (15%). Orçamento da Seguridade.</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-2 py-1 rounded-lg text-[9px] font-bold text-brand-deep border border-brand/20">PAS (PLANEJAMENTO ANUAL)</span>
              <span className="bg-white px-2 py-1 rounded-lg text-[9px] font-bold text-brand-deep border border-brand/20">RELATÓRIO DE GESTÃO (RAG)</span>
              <span className="bg-white px-2 py-1 rounded-lg text-[9px] font-bold text-brand-deep border border-brand/20">DATASUS (SIM, SINASC)</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <AlertTriangle size={24} className="text-rose-500" />
            5. Desafios Estruturais
          </h2>
          <ul className="text-sm space-y-2 list-disc pl-5 text-slate-600">
            <li><strong>Subfinanciamento:</strong> Impacto da EC 95 (Teto de Gastos).</li>
            <li><strong>Dualidade Público-Privada:</strong> Renúncia fiscal para o setor privado suplementar.</li>
            <li><strong>Dificuldade de Acesso:</strong> Filas para especialidades e cirurgias.</li>
          </ul>
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand">
              <Waves size={24} />
              Metáfora: A Rede de Proteção
            </h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">
              "O SUS é como uma grande rede de proteção estendida: mesmo onde os fios estão gastos por falta de investimento, é ela que garante que nenhum cidadão caia no desamparo total."
            </p>
          </div>
          <Heart size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>

        <div className="pt-6">
          <a 
            href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg"
          >
            <ExternalLink size={20} /> Acessar Lei 8.080/90 (Planalto)
          </a>
        </div>
      </div>
    </div>
  );

  const renderDiretrizesCurricularesContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Biblioteca
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Diretrizes Curriculares</h1>
        <p className="text-slate-500 font-medium italic">Marco de 1996 (ABEPSS) - Fundamentos da Formação Crítica</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          As Diretrizes Curriculares de 1996, propostas pela <strong>ABEPSS</strong>, representam um marco na formação acadêmica brasileira, consolidando a ruptura com o conservadorismo e fundamentando-se no método materialista histórico-dialético. Elas buscam formar um profissional com sólida capacidade intelectual e compromisso com as demandas da classe trabalhadora.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Users size={24} className="text-brand" />
            1. Perfil Profissional e Capacitação
          </h2>
          <p className="text-sm">O objetivo é formar um profissional capaz de realizar uma leitura crítica da realidade social em três dimensões indissociáveis:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand">
              <strong className="text-brand-deep text-xs block mb-1">Teórico-metodológica</strong>
              <p className="text-[10px] text-slate-500">Para apreender os processos sociais em sua totalidade.</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand-dark">
              <strong className="text-brand-deep text-xs block mb-1">Ético-política</strong>
              <p className="text-[10px] text-slate-500">Comprometida com a democratização da sociedade.</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand-deep">
              <strong className="text-brand-deep text-xs block mb-1">Técnico-operativa</strong>
              <p className="text-[10px] text-slate-500">Instrumentalizando para a intervenção propositiva.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Layers size={24} className="text-brand" />
            2. A Lógica dos Núcleos de Fundamentação
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-brand">
              <h4 className="font-bold text-brand-deep text-sm mb-1">Fundamentos da Vida Social</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Analisa o ser social como totalidade, focando na dinâmica da sociedade burguesa e no trabalho como práxis.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-brand-dark">
              <h4 className="font-bold text-brand-deep text-sm mb-1">Formação Sócio-Histórica do Brasil</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Foca no desenvolvimento do capitalismo no Brasil, desigualdades regionais, étnico-raciais e de classe.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border-l-4 border-brand-deep">
              <h4 className="font-bold text-brand-deep text-sm mb-1">Trabalho Profissional</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">Compreende a trajetória histórica da profissão, seus métodos, técnicas, a ética e o planejamento.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Star size={24} className="text-brand" />
            3. Princípios Fundamentais
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
            {[
              "Indissociabilidade entre ensino, pesquisa e extensão.",
              "Interdisciplinaridade: articulação dos saberes.",
              "Ética como eixo transversal (em todos os conteúdos).",
              "Pluralismo: garantia do debate democrático teórico."
            ].map((p, i) => (
              <li key={i} className="bg-white p-3 rounded-xl border border-slate-100 text-xs font-medium flex gap-2 shadow-sm">
                <ShieldCheck size={14} className="text-brand-dark flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <BookMarked size={24} className="text-brand" />
            4. Componentes Obrigatórios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-brand-light/30 border border-brand/20 rounded-3xl">
              <h4 className="font-bold text-brand-deep text-sm mb-2 flex items-center gap-2"><Briefcase size={16}/> Estágio Supervisionado</h4>
              <p className="text-[10px] text-brand-deep opacity-80 leading-relaxed">Exige supervisão direta no campo e na universidade. Deve corresponder a pelo menos <strong>15% da carga horária total</strong> do curso.</p>
            </div>
            <div className="p-5 bg-brand-light/30 border border-brand/20 rounded-3xl">
              <h4 className="font-bold text-brand-deep text-sm mb-2 flex items-center gap-2"><FileText size={16}/> TCC</h4>
              <p className="text-[10px] text-brand-deep opacity-80 leading-relaxed">Entendido como um momento de síntese de toda a formação profissional.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand">
              <Building2 size={24} />
              O Esqueleto do Edifício
            </h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">
              "As diretrizes não determinam a decoração interna, mas garantem que a <strong>estrutura seja sólida</strong> o suficiente para suportar as pressões da realidade social sem desmoronar para o senso comum."
            </p>
          </div>
          <Building2 size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>

        <div className="pt-6">
          <a 
            href="https://www.abepss.org.br/arquivos/textos/documento_201603311138166377210.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg shadow-brand/20"
          >
            <Download size={20} /> Baixar Diretrizes ABEPSS (PDF)
          </a>
        </div>
      </div>
    </div>
  );

  const renderEticaContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Biblioteca
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Código de Ética</h1>
        <p className="text-slate-500 font-medium italic">Resolução CFESS nº 273/93 - Materialização do PEP</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          O Código de Ética do/a Assistente Social vincula o exercício profissional à defesa dos interesses da classe trabalhadora e à construção de uma sociedade mais justa e democrática.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Star size={24} className="text-brand" />
            1. Princípios Fundamentais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Liberdade", desc: "Valor ético central, visando a autonomia e emancipação plena." },
              { title: "Direitos Humanos", desc: "Defesa intransigente e recusa a qualquer forma de arbítrio." },
              { title: "Democracia", desc: "Único padrão capaz de assegurar a liberdade e a equidade." },
              { title: "Diversidade", desc: "Eliminação de preconceitos e respeito às diferenças." },
              { title: "Nova Ordem", desc: "Opção por uma sociedade sem dominação ou exploração." }
            ].map((p, i) => (
              <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <strong className="text-brand-deep block text-sm">{p.title}</strong>
                <p className="text-[11px] text-slate-500 leading-tight mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Handshake size={24} className="text-brand" />
            2. Direitos e Deveres
          </h2>
          <div className="space-y-3">
            <div className="bg-brand-light/50 p-4 rounded-2xl border-l-4 border-brand">
              <h4 className="font-bold text-brand-deep text-sm flex items-center gap-2"><ShieldCheck size={16} /> Autonomia Profissional</h4>
              <p className="text-xs text-brand-deep/80 mt-1">Direito à ampla autonomia e inviolabilidade do local de trabalho.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-slate-400">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2"><Users size={16} /> Relação com Usuários</h4>
              <p className="text-xs text-slate-600 mt-1">Dever de democratizar informações e garantir a participação.</p>
            </div>
          </div>
        </section>

        <div className="bg-brand-deep text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12 text-center">
           <Compass size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
           <p className="relative z-10 text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6 text-left">
             "O Código funciona como uma bússola ética: aponta para a dignidade humana em um mar de pressões institucionais."
           </p>
        </div>

        <div className="pt-6">
          <a 
            href="https://www.cfess.org.br/arquivos/CEP_CFESS-SITE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg"
          >
            <Download size={20} /> Baixar Código Completo (PDF)
          </a>
        </div>
      </div>
    </div>
  );

  const renderLeiContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button 
        onClick={() => setSelectedDoc(null)}
        className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"
      >
        <ArrowLeft size={20} /> Voltar para Biblioteca
      </button>

      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Lei nº 8.662/93</h1>
        <p className="text-slate-500 font-medium italic">Regulamentação da Profissão</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>
          A Lei nº 8.662/93 regulamenta a profissão, estabelecendo requisitos de exercício, competências e atribuições privativas.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Layers size={24} className="text-brand" />
            1. Competências vs. Atribuições Privativas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <h4 className="font-bold text-brand-deep text-sm mb-1 flex items-center gap-2"><Globe size={14}/> Competências (Art. 4º)</h4>
              <p className="text-[10px] text-slate-500">Atividades que o profissional está apto, mas compartilháveis (ex: planejamento social).</p>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-l-4 border-brand">
              <h4 className="font-bold text-brand-deep text-sm mb-1 flex items-center gap-2"><Award size={14}/> Atribuições (Art. 5º)</h4>
              <p className="text-[10px] text-slate-500">Exclusivas: supervisão de estágio, perícias e laudos sociais.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Clock size={24} className="text-brand" />
            2. Jornada de 30 Horas
          </h2>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm">
              A <strong>Lei nº 12.317/2010</strong> estabeleceu a duração do trabalho em <strong>30 horas semanais</strong>, sem redução salarial.
            </p>
          </div>
        </section>

        <div className="bg-brand-deep text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand"><Home size={24} /> Os Alicerces</h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">
              "As competências são as janelas de uma casa; as atribuições privativas são os cômodos onde apenas o assistente social entra com sua chave técnica."
            </p>
          </div>
        </div>

        <div className="pt-6">
          <a 
            href="https://www.planalto.gov.br/ccivil_03/leis/l8662.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all shadow-lg"
          >
            <ExternalLink size={20} /> Acessar Lei no Planalto
          </a>
        </div>
      </div>
    </div>
  );

  const renderGlossaryItem = (term: string) => {
    return (
       <div className="space-y-8 animate-in fade-in duration-500">
          <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold"><ArrowLeft size={20}/> Voltar</button>
          <h1 className="text-3xl font-black text-slate-800">{term}</h1>
          <p className="text-slate-600 leading-relaxed">Informações básicas do glossário estão disponíveis na lista anterior. Conteúdos estendidos sendo preparados.</p>
       </div>
    );
  };

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="py-12 px-8 bg-gradient-to-r from-brand to-brand-dark text-slate-900 rounded-3xl shadow-xl mb-8 relative overflow-hidden text-center lg:text-left">
              <div className="relative z-10">
                <h1 className="text-4xl font-black mb-3 text-brand-deep">Ser Social</h1>
                <p className="text-lg opacity-90 max-w-2xl font-medium">
                  Sua jornada ética e política começa aqui. Explore a base documental e os materiais de apoio para sua graduação.
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: AppSection.ACADEMIC, title: "Biblioteca Acadêmica", icon: <BookOpen size={28}/>, desc: "Código de Ética, leis fundamentais e diretrizes curriculares." },
                { id: AppSection.POLICIES, title: "Políticas Públicas", icon: <Scale size={28}/>, desc: "Resumos técnicos do SUS, Assistência Social e Previdência." },
                { id: AppSection.INTERNSHIP, title: "Apoio ao Estágio", icon: <FileText size={28}/>, desc: "Modelos de relatórios e postura ética no campo." },
                { id: AppSection.SELFCARE, title: "Saúde Mental", icon: <Heart size={28}/>, desc: "Estratégias de autocuidado e reflexões sobre resistência." }
              ].map(card => (
                <div 
                  key={card.id}
                  onClick={() => { setCurrentSection(card.id); setSelectedDoc(null); }}
                  className="group cursor-pointer bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-dark transition-all hover:shadow-md"
                >
                  <div className="bg-brand-light text-brand-deep w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-slate-900 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{card.title}</h3>
                  <p className="text-slate-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case AppSection.ACADEMIC:
        if (selectedDoc === 'etica') return renderEticaContent();
        if (selectedDoc === 'lei8662') return renderLeiContent();
        if (selectedDoc === 'diretrizes-curriculares') return renderDiretrizesCurricularesContent();
        if (selectedDoc) return renderGlossaryItem(selectedDoc);
        
        return (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-300">
            <header>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <BookOpen className="text-brand-dark" /> Conteúdos Acadêmicos
              </h2>
            </header>
            
            <section className="space-y-4">
              <h3 className="text-lg font-black text-brand-deep uppercase">Biblioteca Básica</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                   { label: 'Lei nº 8.662/93', id: 'lei8662', icon: <Scale size={18}/> },
                   { label: 'Código de Ética', id: 'etica', icon: <ShieldCheck size={18}/> },
                   { label: 'Diretrizes Curriculares', id: 'diretrizes-curriculares', icon: <GraduationCap size={18}/> }
                ].map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedDoc(item.id)}
                    className="p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition cursor-pointer hover:border-brand-dark group"
                  >
                    <div className="bg-brand-light text-brand-deep w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-brand transition-colors mb-3">
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-black text-brand-deep uppercase">Glossário Técnico</h3>
              <div className="space-y-3">
                {GLOSSARY_DATA.map((item) => (
                  <div key={item.term} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-brand-deep mb-1">{item.term}</h4>
                    <p className="text-slate-600 text-sm">{item.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case AppSection.POLICIES:
        if (selectedDoc === 'sus-detalhado') return renderSaudeContent();
        if (selectedDoc === 'suas-detalhado') return renderAssistenciaSocialDetailedContent();
        if (selectedDoc === 'prev-detalhado') return renderPrevidenciaSocialDetailedContent();

        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Scale className="text-brand-dark" /> Políticas Públicas e Legislação
            </h2>

            <div className="space-y-6">
              {POLICIES_SUMMARY.map(policy => (
                <div key={policy.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{policy.title}</h3>
                    <span className="px-3 py-1 bg-brand-light text-brand-deep rounded-full text-xs font-bold">ESSENCIAL</span>
                  </div>
                  <p className="text-slate-600 mb-6">{policy.desc}</p>
                  <button 
                    onClick={() => { 
                      if(policy.id === 'sus') {
                        setSelectedDoc('sus-detalhado');
                      } else if(policy.id === 'suas') {
                        setSelectedDoc('suas-detalhado');
                      } else if(policy.id === 'prev') {
                        setSelectedDoc('prev-detalhado');
                      }
                    }}
                    className="w-full py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 transition"
                  >
                    Ver Detalhes
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case AppSection.INTERNSHIP:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Briefcase className="text-brand-dark" /> Apoio ao Estágio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INTERNSHIP_MODELS.map((model) => (
                <div key={model.title} className="p-5 bg-white rounded-3xl border border-slate-100 hover:shadow-md transition cursor-pointer">
                  <h3 className="font-bold text-slate-800 mb-2">{model.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{model.desc}</p>
                  <button className="w-full py-2 border border-brand/30 text-brand-deep rounded-xl text-xs font-bold hover:bg-brand transition uppercase">Acessar Documento</button>
                </div>
              ))}
            </div>
          </div>
        );

      case AppSection.SELFCARE:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Heart className="text-rose-500" /> Saúde Mental e Autocuidado
            </h2>
            <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
              <h3 className="text-rose-900 font-bold mb-2">Resistência e Cuidado</h3>
              <p className="text-rose-800 text-sm leading-relaxed">
                Reconhecer a sobrecarga estrutural é o primeiro passo para preservar sua saúde mental no cotidiano profissional.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Construction size={48} className="mb-4 opacity-20" />
            <p className="font-medium">Esta seção está em desenvolvimento.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pb-24 lg:pb-8 flex flex-col lg:flex-row max-w-6xl mx-auto">
      <nav className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-100 h-screen sticky top-0 p-6">
        <div className="flex items-center gap-2 mb-10 text-brand-dark">
          <BookOpen size={32} className="fill-brand/20" />
          <span className="text-xl font-black text-brand-deep">Ser Social</span>
        </div>
        <div className="flex-1 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                currentSection === item.id 
                  ? 'bg-brand text-slate-900 shadow-lg font-bold' 
                  : 'text-slate-500 hover:bg-brand-light hover:text-brand-deep'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 p-4 lg:p-10">
        <div className="max-w-4xl mx-auto">
          {renderSection()}
        </div>
      </main>

      <nav className="lg:hidden fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200 px-6 py-3 flex justify-between items-center z-50 rounded-3xl shadow-2xl">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }}
            className={`flex flex-col items-center gap-1 transition-all ${
              currentSection === item.id ? 'text-brand-deep scale-110' : 'text-slate-400 opacity-60'
            }`}
          >
            {item.icon}
            <span className="text-[9px] font-black uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
