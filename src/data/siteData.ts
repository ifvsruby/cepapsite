export const siteData = {
  name: "CEPAP — Centro Paulista de Psicologia",
  legalName: "T. S. da Silva Psicologia",
  cnpj: "20.954.486/0001-04",
  founded: 2014,
  positioning: "A CEPAP é um centro de referência em psicologia que oferece atendimento ético, científico, humanizado e de qualidade para pessoas que enfrentam situações difíceis nos âmbitos pessoal, familiar, profissional ou empresarial.",
  mission: "Promover o bem-estar social e mental por meio do acolhimento pessoal e familiar, utilizando recursos psicológicos e terapêuticos para contribuir com a qualidade de vida.",
  vision: "Oferecer atendimento diferenciado e humanizado e promover informações sobre saúde emocional e mental de maneira eficiente e comprometida com a saúde dos pacientes.",
  values: [
    "Respeito pelas individualidades",
    "Tratamento ético e científico",
    "Valorização da vida",
    "Humanização"
  ],
  contacts: {
    email: "contato@cepapsicologia.com",
    phoneMain: "(11) 4253-2997",
    phoneSecondary: "(11) 97252-2372",
    whatsapp: "(11) 2228-9233",
    whatsappLink: "https://wa.me/551122289233",
    social: {
      instagram: "https://www.instagram.com/cepapsicologiaoficial/",
      facebook: "https://www.facebook.com/cepapsi/",
      linkedin: "https://br.linkedin.com/company/cepapsicologia"
    }
  },
  hours: {
    weekdays: "Segunda a sexta-feira: das 8h às 20h",
    saturday: "Sábados: das 8h às 14h"
  },
  locations: [
    {
      id: "diadema",
      name: "Diadema",
      address: "Rua Orense, 41 — Sala 414 — Centro — Diadema/SP",
      pendingConfirmation: false,
    },
    {
      id: "sao-bernardo",
      name: "São Bernardo do Campo",
      address: "Rua Getúlio Vargas, 126 — Sala 27 — Centro — São Bernardo do Campo/SP",
      pendingConfirmation: false,
    },
    {
      id: "campo-limpo",
      name: "Campo Limpo",
      address: "Estrada de Itapecerica, 2857 — Sala 08 — Jardim Germânia — São Paulo/SP",
      pendingConfirmation: false,
    },
    {
      id: "santo-andre",
      name: "Santo André",
      address: "Av. José Caballero, 261 — Sala 81 — Vila Bastos — Santo André/SP",
      pendingConfirmation: true, // Do not show publicly until confirmed
    }
  ]
};
