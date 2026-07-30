export type Professional = {
  id: string;
  name: string;
  crp: string | null;
  crpPendingConfirmation?: boolean;
  specialties: string[];
  audiences: string[];
  approaches: string[];
  imageUrl?: string;
  isSupport?: boolean;
  bio?: string;
};

export const professionalsData: Professional[] = [
  {
    id: "talita-simoes",
    name: "Talita Simões",
    crp: "06/118000",
    specialties: ["Psicologia Clínica", "Supervisora do CEPAP", "Ansiedade", "Dependência emocional"],
    audiences: ["Adultos", "Infantil"],
    approaches: ["Psicoterapia Cognitivo Comportamental"],
    bio: "Psicóloga Responsável pela Equipe do CEPAP atua com psicologia Clínica e é Especialista em Psicoterapia Cognitivo Comportamental* Trabalha com atendimento clínico voltado ao público adulto e infantil, especialista no tratamento de ansiedade pelo Beck Institute (Cognitive Behavior Therapy for Anxiety , Califórnia- EUA). Formada em Psicologia pela Universidade Metodista e pós graduada também em Neuropsicopedagogia. Há mais de 10 anos a frente do CEPAP possui ainda formação em inteligência emocional sistêmica e coaching bem como, pós em Administração de Empresas pela FGV. Com atuação há mais de 12 anos em saúde, bem estar e vasta experiência clínica, tem como foco principal a liderança e gestão da equipe, bem como atendimentos para tratamento de transtornos de ansiedade e dependência emocional."
  },
  {
    id: "uatila-larissa",
    name: "Uatila Larissa C. Moreira",
    crp: "06/149952",
    specialties: ["Avaliação Neuropsicológica Infantil e Adulto", "Reabilitação Cognitiva", "Terapia ABA", "Inclusão Escolar", "Testes Autismo e TDAH"],
    audiences: ["Crianças", "Adultos"],
    approaches: ["Psicoterapia Cognitivo Comportamental"],
    bio: "Psicóloga Clínica e Neuropsicóloga, pós graduanda em Psicologia Hospitalar e Terapia Cognitiva Comportamental. Atua com atendimento de crianças e adultos através da psicoterapia cognitivo comportamental. Atua também com Avaliação Neuropsicológica Infantil e Adulto, Reabilitação Cognitiva (foco em estímulo da atenção), Terapia Aba, Inclusão Escolar e Políticas Públicas , Práticas Psicopedagógicas, Testes de Avaliação de Autismo e TDAH."
  },
  {
    id: "juliana-oliveira",
    name: "Juliana Oliveira",
    crp: "06/138494",
    specialties: ["Ansiedade", "Depressão", "Traumas", "Problemas de relacionamento", "Autoestima"],
    audiences: ["Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitivo Comportamental"],
    bio: "Formada pela Universidade Uniban Anhanguera desde 2016. Pós graduada em Terapia Cognitivo Comportamental pela faculdade FAVENI. Sua abordagem terapêutica é baseada em técnicas empiricamente comprovadas que visam promover mudanças no comportamento, pensamento e nas emoções. Atua com adolescentes e adultos e ao longo desses anos de atuação, tem ajudado-os a lidarem com ansiedade, depressão, traumas, problemas de relacionamento e autoestima."
  },
  {
    id: "sandra-carvalho",
    name: "Sandra Carvalho",
    crp: "06/6746",
    specialties: ["Saúde mental", "Organização"],
    audiences: ["Adolescentes", "Adultos", "Idosos"],
    approaches: ["Abordagem Analítica", "Comportamental"],
    bio: "Formada pelo Centro Universitário Paulistano Pós Graduação em Psicologia Clínica e Organizacional. Curso TCC. Extensão Acadêmica Professional e Self Coaching. Desde 2017, atua com atendimentos através da abordagem Analítica e comportamental direcionados a adolescentes, adultos e idosos. Também multiplicadora de mindfulness e palestrante em temas relacionados à saúde mental e organização."
  },
  {
    id: "aline-duque",
    name: "Aline Duque",
    crp: "06/128735",
    specialties: ["Avaliação Neuropsicológica", "TDAH", "TEA"],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitivo Comportamental"],
    bio: "Psicóloga, formada pela Universidade Bandeirantes de São Paulo (UNIBAN), com atuação clínica desde 2016 no atendimento a crianças, adolescentes e adultos, com abordagem fundamentada na Terapia Cognitivo-Comportamental. Especialista em Neuropsicologia pela Universidade Municipal de São Caetano (USCS), com atuação em avaliação neuropsicológica e na compreensão dos processos cognitivos, emocionais e comportamentais ao longo do desenvolvimento. Pós-graduanda pela PUC Campinas, com foco no Transtorno do Déficit de Atenção e Hiperatividade (TDAH) e no Transtorno do Espectro Autista (TEA)."
  },
  {
    id: "daniela-medeiros",
    name: "Daniela Medeiros",
    crp: "06/151295",
    specialties: ["Ansiedade", "Autoestima", "Autoconhecimento", "Dependência emocional"],
    audiences: ["Adolescentes", "Adultos"],
    approaches: ["Análise do Comportamento"],
    bio: "Psicóloga e pós-graduada em Saúde Mental pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (FCMSCSP). Desde 2020, realiza atendimentos online e presenciais de adultos e adolescentes através da abordagem Análise do Comportamento, tendo vasta experiência em temas como ansiedade, autoestima, autoconhecimento e dependência emocional. Nos atendimentos sempre preza por uma abordagem acolhedora, humanizada, responsável e ética, apoiando a sua busca para a melhor versão de si mesma."
  },
  {
    id: "bianca-diaz",
    name: "Bianca Diaz Borghi",
    crp: "06/177297",
    specialties: ["TEA", "Autismo"],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitiva Comportamental", "ABA"],
    bio: "Formada em Psicologia pela Universidade Paulista (UNIP) em dezembro de 2021. Atua na abordagem da TCC (Terapia Cognitiva-Comportamental) com crianças, adolescentes e adultos. Pós graduada em Análise do Comportamento Aplicada (ABA) voltada a pessoas com TEA pela instituição Rhema Educação."
  },
  {
    id: "nathalia-boy",
    name: "Nathalia Feitosa Boy",
    crp: "06/175277",
    specialties: ["Psicoterapia"],
    audiences: ["Adultos"],
    approaches: ["Psicanálise"],
    bio: "Formada pela Universidade Nove de Julho (Uninove). Cursando (EAD) Curso de Psicanálise, Escola de Psicanálise Natthalia Paccolla. Desde 2021, atua com atendimentos através da abordagem Psicanalítica direcionados a adultos."
  },
  {
    id: "sarah-vitoria",
    name: "Sarah Vitória",
    crp: "06/192429",
    specialties: ["Promoção de saúde mental"],
    audiences: ["Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitivo Comportamental"],
    bio: "Formada em Psicologia pela Universidade Metodista de São Paulo (2022) e especialista em Terapia Cognitivo-Comportamental (TCC) pela PUC-RS. Atua com adolescentes e adultos, utilizando a TCC para promover saúde mental."
  },
  {
    id: "cristiane-santos",
    name: "Cristiane Santos",
    crp: "06/168852",
    specialties: ["Mães de pacientes neuroatípicos", "Acompanhamento terapêutico"],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Idosos"],
    approaches: ["Terapia Cognitivo Comportamental"],
    bio: "Formada pela Universidade Anhanguera, é especialista em Neuropsicologia pela Universidade de São Caetano do Sul (USC). Formada em AT (acompanhamento terapêutico), pela Attenda (Transmissão e clínica em AT e psicanálise). Desde de 2020 atua com atendimento através da abordagem Terapia Cognitivo Comportamental (TCC) direcionada a crianças, adolescentes, adultos e idosos. Realiza atendimentos para mães de pacientes neuroatípicos."
  },
  {
    id: "lorenza-jordao",
    name: "Lorenza Jordão",
    crp: "06/154349",
    specialties: ["Transtornos de humor", "Diversidade de gênero", "Ansiedade", "Depressão", "Dependência emocional"],
    audiences: ["Adolescentes", "Adultos", "Casais"],
    approaches: ["Terapia Cognitiva Comportamental", "Terapias Contextuais"],
    bio: "Sou psicóloga clínica formada pela Universidade Metodista de São Paulo (2021), pós-graduada em Neurociências e Comportamento pela PUC/RS, especialista em Terapia Cognitiva Comportamental (CETCC) e pós-graduanda em Terapias Contextuais para Terapia de Casal pela PUC/PR. Meu objetivo é ampliar meu conhecimento sobre o funcionamento do cérebro e do comportamento humano, e aplicá-lo na minha prática clínica. Atendo adolescentes, adultos e casais com demandas diversas, como transtornos de humor, diversidade de gênero, ansiedade, depressão, dependência emocional, etc. através da abordagem cognitivo-comportamental. Busco oferecer um atendimento focado no objetivo e no bem-estar do paciente, com bom humor, autenticidade e sempre muito acolhimento."
  },
  {
    id: "giovanna-farnezio",
    name: "Giovanna Farnézio",
    crp: "06/190713",
    specialties: ["Transtornos neurológicos", "Envelhecimento", "Rede socioassistencial"],
    audiences: ["Infantil", "Adultos", "Idosos"],
    approaches: ["Fenomenologia-existencial"],
    bio: "Formada pela Universidade Paulista (UNIP). Atualmente está cursando pós-graduação em Psicologia Hospitalar pela Universidade Cruzeiro do Sul. Desde 2023, realiza atendimentos através da abordagem Fenomenologia-existencial direcionado a idosos e adultos. Em 2024 iniciou os atendimentos voltados para público infantil e também uma nova Pós Graduação em Neuropsicologia na Universidade Anhembi Morumbi. Além disso, tem experiência com a rede socioassistencial e com transtornos neurológicos vinculados ao envelhecimento."
  },
  {
    id: "debora-rodrigues",
    name: "Débora Rodrigues",
    crp: "06/177448",
    specialties: ["Avaliações psicológicas"],
    audiences: ["Adolescentes", "Adultos", "Idosos"],
    approaches: ["Psicanálise"],
    bio: "Formada pela Universidade Paulista (UNIP) desde 2021. Pós graduanda em avaliações psicológicas pela faculdade FAMEF. Seus atendimentos são centrados na abordagem psicanalista, direcionados a adolescentes, adultos e idosos. Sempre soube que auxiliar as pessoas em seus sofrimentos emocionais era seu propósito e missão."
  },
  {
    id: "lislien-eduarda",
    name: "Líslien Eduarda",
    crp: "06/164862",
    specialties: ["Saúde mental"],
    audiences: ["Crianças", "Adultos"],
    approaches: ["Abordagem comportamental", "ABA"],
    bio: "Formada pela Universidade Metropolitanas Unidas (FMU). Especialista em Neurociência e Psicologia Aplicada pela Universidade Presbiteriana Mackenzie e Pós Graduada em Análise do Comportamento Aplicada pela Faculdade Inspirar. Desde 2018, atua com atendimentos através da abordagem comportamental direcionados a crianças e adultos. Além disso, é capacitadora e palestrante em temas relacionados à saúde mental."
  },
  {
    id: "priscila-resende",
    name: "Priscila Renata Resende",
    crp: "06/154349",
    specialties: ["TEA", "TDAH", "Transtorno do Desenvolvimento Intelectual", "Transtornos de Personalidade"],
    audiences: ["Crianças", "Adolescentes", "Jovens Adultos"],
    approaches: ["Neuropsicologia", "Terapia Cognitivo Comportamental"],
    bio: "Graduada em Psicologia e pós-graduada em Neuropsicologia pela Universidade Faculdades Metropolitanas Unidas (FMU). Pós-graduada em Terapia Cognitivo-Comportamental pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas). Atualmente cursa Neurociência, Comportamento e Psicopatologia pela Pontifícia Universidade Católica do Paraná (PUC-PR) e Psicologia Organizacional pela Pontifícia Universidade Católica do Rio Grande do Sul (PUC-RS). Possui conhecimento intermediário em Língua Brasileira de Sinais (Libras), atualmente em curso. Atua desde 2016 como Psicóloga Organizacional, desenvolvendo ações em gestão de pessoas, Treinamento e Desenvolvimento (T&D) e mapeamento de acessibilidade, voltadas à inclusão de pessoas com deficiência no mercado de trabalho formal. Desde 2023, atua na área de avaliação neuropsicológica, com foco na investigação do Transtorno do Espectro Autista (TEA), Transtorno de Déficit de Atenção e Hiperatividade (TDAH), Transtorno do Desenvolvimento Intelectual e Transtornos de Personalidade, realizando avaliações de crianças, adolescentes e jovens adultos."
  },
  {
    id: "divania-lisboa",
    name: "Divania Lisboa Biganzoli",
    crp: "06/83704",
    specialties: ["Avaliação psicológica e neuropsicológica", "Reabilitação psicológica de adultos e idosos", "Sexologia"],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Idosos"],
    approaches: ["Neuropsicologia", "Terapia Cognitivo Comportamental"],
    bio: "Graduada em Psicologia e pós-graduada em Neuropsicologia pela Faculdade Líbano. Pós-graduanda em Terapia Cognitivo-Comportamental (TCC) pela mesma instituição. Atua desde 2006 como psicóloga clínica, com atendimento a crianças, adolescentes, adultos e idosos, incluindo indivíduos neurodivergentes e diferentes transtornos psicológicos. Desde 2019, exerce atividades em Psicologia Clínica e Neuropsicologia, com atuação em avaliação psicológica e neuropsicológica. Possui cursos de atualização em reabilitação psicológica de adultos e idosos pelo Hospital Israelita Albert Einstein e sexologia na prática clínica pelo Centro de Estudos Avançados de Psicologia – Ciclo CEAP."
  },
  {
    id: "alessandra-muiniz",
    name: "Alessandra Muiniz",
    crp: "06/207720",
    specialties: ["Ansiedade", "Depressão", "Dificuldades emocionais", "Vivências de adoecimento", "Transtornos do neurodesenvolvimento"],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitivo Comportamental", "Musicoterapia", "Psicologia Hospitalar"],
    bio: "Psicóloga clínica, com graduação em Psicologia pela Universidade da Amazônia – UNAMA, desde 2023. Possui pós-graduação em Terapia Cognitivo-Comportamental e Psicologia Hospitalar pela Faculdade Metropolitana do Estado de São Paulo, pós-graduação em Neuropsicologia pela Universidade São Judas Tadeu e pós-graduação em Musicoterapia pela Faculdade Mozarteum de São Paulo. Atua na clínica com base em práticas fundamentadas em evidências científicas, oferecendo um espaço de escuta qualificada, acolhimento e cuidado ético. Seu trabalho é voltado ao atendimento de crianças, adolescentes e adultos, com foco na compreensão dos processos cognitivos, emocionais e comportamentais, transtornos do neurodesenvolvimento, auxiliando no manejo da ansiedade, depressão, dificuldades emocionais, vivências de adoecimento, desenvolvimento da autorregulação emocional e promoção da saúde mental e qualidade de vida."
  },
  {
    id: "beatriz-rodrigues",
    name: "Beatriz Aparecida Rodrigues",
    crp: "06/175135",
    specialties: ["Psicoterapia"],
    audiences: ["Adolescentes", "Adultos"],
    approaches: ["Terapia Cognitivo Comportamental", "ABA"],
    bio: "Psicóloga clínica e pós-graduanda em análise do comportamento. Atua com atendimento de adolescentes e adultos através da psicoterapia cognitivo comportamental. Também atua em terapia ABA. Atualmente, cursa formação em Neurociências."
  },
  {
    id: "paloma-almeida",
    name: "Paloma Silva de Almeida",
    crp: "06/209449",
    specialties: ["Psicopedagogia", "Neurociências"],
    audiences: ["Crianças", "Adolescentes"],
    approaches: ["ABA"],
    bio: "Psicóloga Clínica, pós-graduada em Psicopedagogia e Neurociências. Atua como psicóloga clínica em atendimentos com crianças e adolescentes. Aplicadora ABA (Análise do Comportamento Aplicada)."
  },
  // Equipe de Suporte
  {
    id: "barbara-lima",
    name: "Bárbara Lima da Silva",
    crp: null,
    specialties: ["Atendimento ao público", "Relacionamento com clientes", "Suporte às rotinas"],
    audiences: [],
    approaches: [],
    isSupport: true,
    bio: "Profissional da área comercial da CEPAP, com experiência em atendimento ao público, relacionamento com clientes e suporte às rotinas da clínica. Atua com foco em acolhimento, organização e excelência no atendimento, garantindo uma experiência positiva desde o primeiro contato."
  },
  {
    id: "nicole",
    name: "Nicole (Nic)",
    crp: null,
    specialties: ["Atendimento", "Marketing"],
    audiences: [],
    approaches: [],
    isSupport: true,
    bio: "Estagiária de Psicologia! Graduanda em Psicologia pela Universidade Cruzeiro do Sul – 3º semestre. Atua como recepcionista no período vespertino, sendo responsável pelo atendimento aos pacientes da clínica, tanto presencialmente quanto por telefone e WhatsApp. Também contribui com as estratégias de marketing da instituição."
  }
];
