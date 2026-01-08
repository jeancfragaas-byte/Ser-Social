
import React, { useState } from 'react';
import { AppSection } from './types';
import { NAV_ITEMS, GLOSSARY_DATA, POLICIES_SUMMARY, INTERNSHIP_MODELS } from './constants';
import { 
  BookOpen, Scale, FileText, 
  Heart, Star, 
  ShieldCheck, Award,
  ExternalLink, Briefcase, GraduationCap, ArrowLeft, Download,
  Clock, Users, AlertTriangle, Layers, Target, Construction, BookMarked,
  Activity, History, Globe, Home, Settings, Waves,
  Navigation, Landmark, 
  Handshake, RefreshCw, Banknote,
  Umbrella, Network, 
  Compass, Building2,
  Table as Bridge
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

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
        <p className="text-slate-500 font-medium italic">Resolução CFESS nº 273/93 - O Marco do Projeto Ético-Político</p>
      </header>

      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2">
            <Star size={24} className="text-brand" />
            Princípios Fundamentais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Liberdade", desc: "Valor ético central, visando a autonomia e emancipação plena." },
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
            Direitos e Deveres
          </h2>
          <div className="bg-brand-light/50 p-4 rounded-2xl border-l-4 border-brand">
            <h4 className="font-bold text-brand-deep text-sm flex items-center gap-2"><ShieldCheck size={16} /> Autonomia Profissional</h4>
            <p className="text-xs text-brand-deep/80 mt-1">Garantia de inviolabilidade do local e independência técnica.</p>
          </div>
        </section>

        <div className="pt-6">
          <a href="https://www.cfess.org.br/arquivos/CEP_CFESS-SITE.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all">
            <Download size={20} /> Baixar Código Completo (PDF)
          </a>
        </div>
      </div>
    </div>
  );

  const renderLeiContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold mb-6"><ArrowLeft size={20} /> Voltar</button>
      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Lei nº 8.662/93</h1>
        <p className="text-slate-500 font-medium italic">Regulamentação da Profissão de Assistente Social</p>
      </header>
      <div className="space-y-6 text-slate-700">
        <section className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h2 className="font-bold text-brand-deep mb-3 flex items-center gap-2"><Award size={20}/> Atribuições Privativas (Art. 5º)</h2>
          <p className="text-sm">São exclusivas do assistente social: supervisão de estágio, perícias, laudos e pareceres sociais.</p>
        </section>
        <section className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h2 className="font-bold text-brand-deep mb-3 flex items-center gap-2"><Clock size={20}/> Jornada de Trabalho</h2>
          <p className="text-sm">Conforme a Lei 12.317/2010, a jornada é de 30 horas semanais sem redução salarial.</p>
        </section>
        <a href="https://www.planalto.gov.br/ccivil_03/leis/l8662.htm" target="_blank" rel="noopener noreferrer" className="block text-center py-4 bg-slate-100 rounded-2xl font-bold text-slate-700 hover:bg-slate-200 transition">Ver no Planalto</a>
      </div>
    </div>
  );

  const renderDiretrizesCurricularesContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold mb-6"><ArrowLeft size={20} /> Voltar</button>
      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Diretrizes ABEPSS</h1>
        <p className="text-slate-500 font-medium italic">Base da Formação Profissional Crítica</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Núcleo de Fundamentos", "Núcleo de Formação Sócio-Histórica", "Núcleo de Trabalho Profissional"].map((n, i) => (
          <div key={i} className="p-4 bg-brand-light/30 border border-brand/20 rounded-2xl">
            <h3 className="font-bold text-brand-deep text-xs uppercase mb-2">{n}</h3>
            <p className="text-[10px] text-slate-600">Essencial para a compreensão da totalidade social e intervenção técnica.</p>
          </div>
        ))}
      </div>
      <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
        <p className="relative z-10 text-lg italic border-l-4 border-brand pl-6">"As diretrizes garantem que a estrutura da formação seja sólida o suficiente para suportar as pressões da realidade."</p>
        <Building2 size={120} className="absolute -right-10 -bottom-10 opacity-10" />
      </div>
    </div>
  );

  const renderPrevidenciaSocialDetailedContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"><ArrowLeft size={20} /> Voltar</button>
      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Previdência Social</h1>
        <p className="text-slate-500 font-medium italic">Seguro Social e Proteção à Renda - Lei nº 8.213/91</p>
      </header>
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>A <strong>Previdência Social</strong> funciona como um seguro controlado pelo governo que garante renda em momentos de necessidade como velhice, doença ou maternidade.</p>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><RefreshCw size={24} className="text-brand" /> 1. Natureza e Funcionamento</h2>
          <div className="bg-brand-light p-5 rounded-2xl border border-brand/20 text-sm text-brand-deep leading-relaxed">
            Baseia-se em um <strong>regime de repartição simples</strong> ou sistema solidário: ativos custeiam inativos.
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><Building2 size={24} className="text-brand" /> 2. Gestão e Regimes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"><h4 className="font-bold text-brand-deep text-sm mb-1">RGPS (Geral)</h4><p className="text-[10px] text-slate-500">Iniciativa privada e autônomos via INSS.</p></div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"><h4 className="font-bold text-brand-deep text-sm mb-1">RPPS (Próprio)</h4><p className="text-[10px] text-slate-500">Servidores públicos de cargo efetivo.</p></div>
          </div>
        </section>
        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand"><Waves size={24} /> O Reservatório Comunitário</h3>
            <p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">"Todos despejam um balde de água (contribuição) todo mês para que quem não pode mais buscar água tenha acesso imediato via canos de distribuição."</p>
          </div>
          <Banknote size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>
        <div className="pt-6">
          <a href="https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all"><ExternalLink size={20} /> Acessar Lei 8.213/91</a>
        </div>
      </div>
    </div>
  );

  const renderAssistenciaSocialDetailedContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"><ArrowLeft size={20} /> Voltar</button>
      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Assistência Social</h1>
        <p className="text-slate-500 font-medium italic">Direito do Cidadão e Dever do Estado - Lei nº 8.742/1993 (LOAS)</p>
      </header>
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>A política de <strong>Assistência Social</strong> é uma política de Seguridade Social <strong>não contributiva</strong>, garantindo proteção a quem dela precisar.</p>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><Landmark size={24} className="text-brand" /> 1. Contexto Institucional</h2>
          <div className="bg-brand-light p-5 rounded-2xl border border-brand/20"><ul className="space-y-2 text-sm text-brand-deep"><li><strong>Tripé:</strong> Saúde, Previdência e Assistência Social.</li><li><strong>Regulamentação:</strong> LOAS operacionalizada pelo SUAS.</li></ul></div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><Layers size={24} className="text-brand" /> 2. Organização (SUAS)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm border-t-4 border-brand"><h4 className="font-bold text-brand-deep mb-2 flex items-center gap-2"><Home size={18} /> Básica (CRAS)</h4><p className="text-[10px] text-slate-500">Fortalecimento de vínculos e prevenção de riscos.</p></div>
            <div className="p-5 bg-white border border-slate-100 rounded-3xl shadow-sm border-t-4 border-rose-400"><h4 className="font-bold text-brand-deep mb-2 flex items-center gap-2"><AlertTriangle size={18} /> Especial (CREAS)</h4><p className="text-[10px] text-slate-500">Onde ocorreu violação de direitos ou rompimento de laços.</p></div>
          </div>
        </section>
        <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden my-12">
          <div className="relative z-10"><h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-brand"><Umbrella size={24} /> A Analogia da Rede</h3><p className="text-lg italic leading-relaxed opacity-90 border-l-4 border-brand pl-6">"Uma rede de proteção estendida: não exige ingresso (contribuição), mas está lá para garantir que ninguém atinja o chão em momentos de queda."</p></div>
          <Network size={150} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>
        <div className="pt-6">
          <a href="https://www.planalto.gov.br/ccivil_03/leis/l8742.htm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all"><ExternalLink size={20} /> Acessar Lei 8.742/93</a>
        </div>
      </div>
    </div>
  );

  const renderSaudeContent = () => (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold mb-6 hover:translate-x-1 transition-transform"><ArrowLeft size={20} /> Voltar</button>
      <header className="border-b border-brand-light pb-6">
        <h1 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">Saúde</h1>
        <p className="text-slate-500 font-medium italic">Direito de todos e dever do Estado - Leis 8.080/90 e 8.142/90</p>
      </header>
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
        <p>O <strong>Sistema Único de Saúde (SUS)</strong> operacionaliza o atendimento público de forma universal e gratuita por meio das Leis Orgânicas 8.080/90 e 8.142/90.</p>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><Heart size={24} className="text-brand" /> 1. Princípios Éticos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["Universalidade", "Integralidade", "Equidade"].map((p, i) => (
              <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm border-b-4 border-brand"><strong className="text-brand-deep text-xs block mb-1">{p}</strong><p className="text-[10px] text-slate-500">Garantia fundamental do sistema público.</p></div>
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-brand-deep flex items-center gap-2"><Settings size={24} className="text-brand" /> 2. Princípios Organizativos</h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand flex gap-3"><Navigation size={20} className="text-brand flex-shrink-0" /><div><strong className="text-brand-deep text-sm block">Descentralização</strong><p className="text-[11px] text-slate-600">Comando único e municipalização da gestão.</p></div></li>
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-dark flex gap-3"><Layers size={20} className="text-brand-dark flex-shrink-0" /><div><strong className="text-brand-deep text-sm block">Regionalização e Hierarquização</strong><p className="text-[11px] text-slate-600">Organização em redes por complexidade.</p></div></li>
            <li className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-deep flex gap-3"><Users size={20} className="text-brand-deep flex-shrink-0" /><div><strong className="text-brand-deep text-sm block">Participação Popular</strong><p className="text-[11px] text-slate-600">Conferências e Conselhos com controle social.</p></div></li>
          </ul>
        </section>
        <div className="pt-6">
          <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-brand text-slate-900 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all"><ExternalLink size={20} /> Acessar Lei 8.080/90</a>
        </div>
      </div>
    </div>
  );

  const renderGlossaryItem = (term: string) => {
    return (
       <div className="space-y-8 animate-in fade-in duration-500">
          <button onClick={() => setSelectedDoc(null)} className="flex items-center gap-2 text-brand-dark font-bold"><ArrowLeft size={20}/> Voltar</button>
          <h1 className="text-3xl font-black text-slate-800">{term}</h1>
          <p className="text-slate-600 leading-relaxed">Informações básicas do glossário estão disponíveis na lista anterior. Conteúdos estendidos sendo preparados para a próxima atualização.</p>
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
                <p className="text-lg opacity-90 max-w-2xl font-medium">Sua jornada ética e política começa aqui. Explore a base documental e os materiais de apoio para sua graduação.</p>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: AppSection.ACADEMIC, title: "Biblioteca Acadêmica", icon: <BookOpen size={28}/>, desc: "Código de Ética, leis fundamentais e diretrizes curriculares." },
                { id: AppSection.POLICIES, title: "Políticas Públicas", icon: <Scale size={28}/>, desc: "Resumos técnicos do SUS, Assistência Social e Previdência." },
                { id: AppSection.INTERNSHIP, title: "Apoio ao Estágio", icon: <FileText size={28}/>, desc: "Modelos de relatórios e postura ética no campo." },
                { id: AppSection.SELFCARE, title: "Saúde Mental", icon: <Heart size={28}/>, desc: "Estratégias de autocuidado e reflexões sobre resistência." }
              ].map(card => (
                <div key={card.id} onClick={() => { setCurrentSection(card.id); setSelectedDoc(null); }} className="group cursor-pointer bg-white p-8 rounded-3xl border border-slate-100 hover:border-brand-dark transition-all hover:shadow-md">
                  <div className="bg-brand-light text-brand-deep w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-slate-900 transition-colors">{card.icon}</div>
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
            <header><h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><BookOpen className="text-brand-dark" /> Conteúdos Acadêmicos</h2></header>
            <section className="space-y-4">
              <h3 className="text-lg font-black text-brand-deep uppercase">Biblioteca Básica</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{ label: 'Lei nº 8.662/93', id: 'lei8662', icon: <Scale size={18}/> }, { label: 'Código de Ética', id: 'etica', icon: <ShieldCheck size={18}/> }, { label: 'Diretrizes Curriculares', id: 'diretrizes-curriculares', icon: <GraduationCap size={18}/> }].map((item) => (
                  <div key={item.id} onClick={() => setSelectedDoc(item.id)} className="p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition cursor-pointer hover:border-brand-dark group">
                    <div className="bg-brand-light text-brand-deep w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-brand transition-colors mb-3">{item.icon}</div>
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
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Scale className="text-brand-dark" /> Políticas Públicas e Legislação</h2>
            <div className="space-y-6">
              {POLICIES_SUMMARY.map(policy => (
                <div key={policy.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold text-slate-800">{policy.title}</h3><span className="px-3 py-1 bg-brand-light text-brand-deep rounded-full text-xs font-bold">ESSENCIAL</span></div>
                  <p className="text-slate-600 mb-6">{policy.desc}</p>
                  <button onClick={() => setSelectedDoc(`${policy.id}-detalhado`)} className="w-full py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-100 transition">Ver Detalhes</button>
                </div>
              ))}
            </div>
          </div>
        );
      case AppSection.INTERNSHIP:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Briefcase className="text-brand-dark" /> Apoio ao Estágio</h2>
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
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Heart className="text-rose-500" /> Saúde Mental e Autocuidado</h2>
            <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
              <h3 className="text-rose-900 font-bold mb-2">Resistência e Cuidado</h3>
              <p className="text-rose-800 text-sm leading-relaxed">Reconhecer a sobrecarga estrutural é o primeiro passo para preservar sua saúde mental no cotidiano profissional.</p>
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
        <div className="flex items-center gap-2 mb-10 text-brand-dark"><BookOpen size={32} className="fill-brand/20" /><span className="text-xl font-black text-brand-deep">Ser Social</span></div>
        <div className="flex-1 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${currentSection === item.id ? 'bg-brand text-slate-900 shadow-lg font-bold' : 'text-slate-500 hover:bg-brand-light hover:text-brand-deep'}`}>
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
      <main className="flex-1 p-4 lg:p-10"><div className="max-w-4xl mx-auto">{renderSection()}</div></main>
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200 px-6 py-3 flex justify-between items-center z-50 rounded-3xl shadow-2xl">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => { setCurrentSection(item.id); setSelectedDoc(null); }} className={`flex flex-col items-center gap-1 transition-all ${currentSection === item.id ? 'text-brand-deep scale-110' : 'text-slate-400 opacity-60'}`}>
            {item.icon}
            <span className="text-[9px] font-black uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
