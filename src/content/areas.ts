export type Area = {
  slug: string
  title: string
  summary: string
  description: string
  services: string[]
}

export const areas: Area[] = [
  {
    slug: 'direito-empresarial',
    title: 'Direito Empresarial',
    summary:
      'Assessoria completa para empresas em todas as fases, desde a constituição societária até operações complexas de fusão e aquisição.',
    description:
      'O ambiente empresarial exige respostas jurídicas rápidas, precisas e alinhadas à estratégia do negócio. Atuamos ao lado de empresários, sócios e gestores para antecipar riscos, estruturar operações com segurança e resolver conflitos com eficiência.\n\nNossa atuação abrange desde a abertura e estruturação societária de novas empresas até a condução de operações complexas de fusão, aquisição e reestruturação. Assessoramos contratos comerciais, relações entre sócios e blindagem patrimonial, sempre com foco em proteger o negócio e viabilizar o crescimento.',
    services: [
      'Constituição e estruturação societária',
      'Contratos empresariais e comerciais',
      'Fusões, aquisições e due diligence',
      'Dissolução e liquidação de sociedades',
      'Conflitos entre sócios',
      'Blindagem patrimonial',
      'Recuperação judicial e extrajudicial',
      'Compliance e governança corporativa',
    ],
  },
  {
    slug: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    summary:
      'Representação de empresas e trabalhadores em demandas judiciais e extrajudiciais, com foco em prevenção de passivos.',
    description:
      'As relações de trabalho envolvem riscos significativos para empresas e direitos fundamentais para trabalhadores. Atuamos nos dois lados com a mesma profundidade técnica, priorizando sempre a resolução eficiente e a prevenção de litígios desnecessários.\n\nPara empresas, oferecemos assessoria preventiva para reduzir passivos trabalhistas, revisão de contratos e políticas internas, e representação em ações judiciais. Para trabalhadores, garantimos a defesa de direitos em casos de demissão irregular, assédio, horas extras e verbas rescisórias não pagas.',
    services: [
      'Defesa em reclamações trabalhistas',
      'Rescisão contratual e verbas rescisórias',
      'Assédio moral e sexual',
      'Acordos individuais e coletivos',
      'Auditoria e prevenção de passivos',
      'Negociação com sindicatos',
      'FGTS e seguro-desemprego',
      'Equiparação salarial e desvio de função',
    ],
  },
  {
    slug: 'direito-civil',
    title: 'Direito Civil',
    summary:
      'Atuação em contratos, responsabilidade civil, cobranças e litígios entre particulares com estratégia e eficiência.',
    description:
      'O direito civil permeia as relações cotidianas de pessoas e empresas — dos contratos mais simples às disputas patrimoniais mais complexas. Nossa atuação é pautada pela análise criteriosa de cada caso e pela busca da solução mais eficiente, seja pela via extrajudicial ou judicial.\n\nAssessoramos na elaboração e revisão de contratos, na condução de cobranças e execuções, e na defesa em ações de responsabilidade civil. Cada demanda é tratada com atenção individualizada, sem soluções padronizadas.',
    services: [
      'Elaboração e revisão de contratos',
      'Responsabilidade civil e indenizações',
      'Cobrança e execução de dívidas',
      'Rescisão contratual',
      'Vícios e defeitos em produtos e serviços',
      'Direito do consumidor',
      'Ações possessórias',
      'Usucapião',
    ],
  },
  {
    slug: 'direito-de-familia',
    title: 'Direito de Família',
    summary:
      'Condução humanizada de processos de divórcio, guarda, inventário e planejamento sucessório com discrição e cuidado.',
    description:
      'Questões de família envolvem dimensões emocionais que exigem, além de rigor técnico, sensibilidade e discrição. Conduzimos cada processo com respeito ao momento vivido pelos clientes, priorizando acordos que preservem relações e protejam os interesses de todos os envolvidos, especialmente das crianças.\n\nAtuamos em divórcios consensuais e litigiosos, definição de guarda e alimentos, inventários e na elaboração de planejamento sucessório para proteger o patrimônio familiar ao longo das gerações.',
    services: [
      'Divórcio consensual e litigioso',
      'Guarda e regulamentação de visitas',
      'Alimentos e revisão de alimentos',
      'Reconhecimento e dissolução de união estável',
      'Inventário judicial e extrajudicial',
      'Planejamento sucessório',
      'Testamentos',
      'Adoção',
    ],
  },
  {
    slug: 'direito-tributario',
    title: 'Direito Tributário',
    summary:
      'Planejamento tributário, defesa em processos administrativos e judiciais e recuperação de créditos fiscais.',
    description:
      'A carga tributária brasileira é uma das mais complexas do mundo. Empresas que não contam com assessoria especializada pagam mais do que devem ou se expõem a autuações desnecessárias. Atuamos para identificar oportunidades legais de redução de carga tributária e para defender nossos clientes em disputas com o fisco.\n\nNossa atuação abrange o planejamento preventivo, a defesa em autuações fiscais nas esferas administrativa e judicial, e a recuperação de tributos pagos indevidamente. Atendemos empresas de todos os portes e regimes tributários.',
    services: [
      'Planejamento tributário',
      'Defesa em autos de infração',
      'Recuperação de créditos tributários',
      'Processos administrativos fiscais',
      'Mandado de segurança tributário',
      'Parcelamentos e renegociação de débitos',
      'Revisão de regime tributário',
      'Consultas fiscais',
    ],
  },
  {
    slug: 'direito-imobiliario',
    title: 'Direito Imobiliário',
    summary:
      'Assessoria em compra, venda, locação e regularização de imóveis, contratos e due diligence imobiliária.',
    description:
      'Transações imobiliárias envolvem valores expressivos e riscos jurídicos que só uma análise criteriosa é capaz de identificar. Assessoramos pessoas físicas, empresas e incorporadoras em todas as etapas do negócio imobiliário, da due diligence à assinatura da escritura.\n\nAtuamos também em conflitos de locação, regularização de imóveis com pendências documentais e na defesa de adquirentes em disputas com construtoras. Cada operação é analisada com atenção aos detalhes que fazem a diferença entre um negócio seguro e um problema futuro.',
    services: [
      'Due diligence imobiliária',
      'Contratos de compra e venda',
      'Contratos de locação e renovação',
      'Ação de despejo e revisional de aluguel',
      'Regularização de imóveis',
      'Incorporação imobiliária',
      'Distrato e rescisão com construtoras',
      'Financiamento imobiliário',
    ],
  },
]