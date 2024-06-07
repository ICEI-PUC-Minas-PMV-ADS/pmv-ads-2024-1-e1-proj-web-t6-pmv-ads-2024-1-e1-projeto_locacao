iniciar_banco_geral();

function iniciar_banco_geral() {
  // localStorage.clear()
  iniciar_banco_usuarios();
  iniciar_banco_proprietarios();
  iniciar_banco_imoveis();
  iniciar_banco_contratos();
  iniciar_banco_requisicoes();
  iniciar_banco_faturas();
  iniciar_banco_locatarios();
}

function iniciar_banco_usuarios() {
  let valid_usuario = JSON.parse(localStorage.getItem("usuarios"));
  let usuarios = [
    {
      id: 1,
      nome: "Usuário 1",
      tipo: "Master",
      email: "usuario1@gmail.com",
      senha: "123456",
      status: true,
      primeiro_acesso: false,
    },
    {
      id: 2,
      nome: "Usuário 2",
      tipo: "Comum",
      email: "usuario2@gmail.com",
      senha: "654321",
      status: false,
      primeiro_acesso: false,
    },
    {
      id: 3,
      nome: "Usuário 3",
      tipo: "Comum",
      email: "usuario3@gmail.com",
      senha: "654321",
      status: true,
      primeiro_acesso: true,
    },
  ];

  if (valid_usuario == null) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

function iniciar_banco_proprietarios() {
  let valid_proprietarios = JSON.parse(localStorage.getItem("proprietarios"));
  let proprietarios = [
    {
      id: 1,
      nome: "Proprietario 1",
      cpf: "99999999999",
      estado_civil: "casado",
      telefone: "31999999999",
      email: "pedro@exemplo.com",
      imoveis: [1, 2],
      endereco: {
        tipo_logradouro: "Rua",
        logradouro: "Afonço Pena",
        numero: "1",
        complemento: "A",
        bairro: "Centro",
        cidade: "Belo Horizonte",
        cep: "00000000",
        uf: "MG",
      },
      status: true,
    },
    {
      id: 2,
      nome: "Proprietario 2",
      cpf: "11111111111",
      estado_civil: "solteiro",
      telefone: "31911111111",
      email: "socratis@exemplo.com",
      imoveis: [3],
      endereco: {
        tipo_logradouro: "Rua",
        logradouro: "Afonço Pena 2",
        numero: "2",
        complemento: "B",
        bairro: "Centro 2",
        cidade: "Porto Alegre",
        cep: "11111111",
        uf: "SC",
      },
      status: true,
    },
    {
      id: 3,
      nome: "Proprietario 3",
      cpf: "11111111111",
      estado_civil: "solteiro",
      telefone: "31911111111",
      email: "socratis@exemplo.com",
      imoveis: [],
      endereco: {
        tipo_logradouro: "Rua",
        logradouro: "Afonço Pena 2",
        numero: "2",
        complemento: "B",
        bairro: "Centro 2",
        cidade: "Porto Alegre",
        cep: "11111111",
        uf: "SC",
      },
      status: false,
    },
  ];

  if (valid_proprietarios == null) {
    localStorage.setItem("proprietarios", JSON.stringify(proprietarios));
  }
}

function iniciar_banco_imoveis() {
  let valid_imoveis = JSON.parse(localStorage.getItem("imoveis"));

  var imoveis = [
    {
      id: 1,
      tipo_imovel: "comercial",
      tipo_logradouro: "avenida",
      logradouro: "beatriz alvarenga",
      numero: "319",
      complemento: "APTO 208",
      bairro: "centro",
      cidade: "belo horizonte",
      uf: "mg",
      cep: "31140-259",
      vacancia: "locado",
      status: "ativo",
    },

    {
      id: 2,
      tipo_imovel: "residencial",
      tipo_logradouro: "rua",
      logradouro: "SÃO JOÃO",
      numero: "39",
      complemento: "apto",
      bairro: "SAGRADA FAMILIA",
      cidade: "belo horizonte",
      uf: "MG",
      cep: "31140-258",
      vacancia: "vago",
      status: "inativo",
    },

    {
      id: 3,
      tipo_imovel: "residencial",
      tipo_logradouro: "rua",
      logradouro: "ipiranga",
      numero: "500",
      complemento: "casa",
      bairro: "centro",
      cidade: "franca",
      uf: "SP",
      cep: "31140-420",
      vacancia: "vago",
      status: "ativo",
    },
    {
      id: 4,
      tipo_imovel: "comercial",
      tipo_logradouro: "Avenida",
      logradouro: "carlos turner",
      numero: "8800",
      complemento: "apto",
      bairro: "centro",
      cidade: "São paulo",
      uf: "SP",
      cep: "46400-000",
      vacancia: "locado",
      status: "ativo",
    }
  ];

  if (valid_imoveis == null) {
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
  }
}

function iniciar_banco_contratos() {
  let valid_contratos = JSON.parse(localStorage.getItem("contratos"));

  let contratos = [
    {
      id: 1,
      locatario: "josé da silva",
      endereco: "rua são josé, centro",
      periodo: "12",
      valor_mensal: 600.0,
      data_inicio: "2024-03-23",
      status: "ativo",
      proprietario: "marcos",
    },
    {
      id: 2,
      locatario: "fernando abreu",
      endereco: "rua das nações, observatorio",
      periodo: "6",
      valor_mensal: 1600.0,
      data_inicio: "2020-05-06",
      status: "inativo",
      proprietario: "vinicius",
    },
    {
      id: 3,
      locatario: "Marília pereira",
      endereco: "rua laranjal, paulista",
      periodo: "24",
      valor_mensal: 600.0,
      data_inicio: "2018-09-08",
      status: "ativo",
      proprietario: "joana",
    },
  ];

  if (valid_contratos == null) {
    localStorage.setItem("contratos", JSON.stringify(contratos));
  }
}

function iniciar_banco_requisicoes() {
  let valid_requisicoes = JSON.parse(localStorage.getItem("requisicoes"));
  let requisicoes = [
    {
      id: 1,
      requisitante: "Requisitante 1",
      tipo: "Locatário",
      data: "09/04/2024",
      status_atendimento: true,
      requisicao: "requisicao 1",
    },
    {
      id: 2,
      requisitante: "Requisitante 2",
      tipo: "Proprietário",
      data: "20/03/2024",
      status_atendimento: false,
      requisicao: "requisicao 2",
    },
    {
      id: 3,
      requisitante: "Requisitante 3",
      tipo: "Locatário",
      data: "13/03/2024",
      status_atendimento: false,
      requisicao: "requisicao 3",
    },
  ];

  if (valid_requisicoes == null) {
    localStorage.setItem("requisicoes", JSON.stringify(requisicoes));
  }
}

function iniciar_banco_faturas() {
  let valid_faturas = JSON.parse(localStorage.getItem("faturas"));
  let faturas = [
    {
      id_fatura: 1,
      id_locatario: 1,
      id_contrato: 1,
      id_imovel: 1,
      nome_locatario: "Locatário 01",
      periodo_inicio: "10/01/2024",
      periodo_fim: "10/02/2024",
      data_vencimento: "20/06/2024",
      data_pagamento: null,
      valor: "400,00",
      status_pagamento: false,
      // EM ABERTO
    },
    {
      id_fatura: 2,
      id_locatario: 2,
      id_contrato: 2,
      id_imovel: 2,
      nome_locatario: "Locatário 02",
      periodo_inicio: "15/02/2024",
      periodo_fim: "15/03/2024",
      data_vencimento: "25/03/2024",
      data_pagamento: null,
      valor: "1650,00",
      status_pagamento: false,
      // VENCIDO
    },
    {
      id_fatura: 3,
      id_locatario: 3,
      id_contrato: 3,
      id_imovel: 3,
      nome_locatario: "Locatário 03",
      periodo_inicio: "25/04/2024",
      periodo_fim: "25/05/2024",
      data_vencimento: "30/05/2024",
      data_pagamento: "25/05/2024",
      valor: "1000,00",
      status_pagamento: true,
      // PAGO
    },
    {
      id_fatura: 4,
      id_locatario: 4,
      id_contrato: 1,
      id_imovel: 1,
      nome_locatario: "Locatário 04",
      periodo_inicio: "10/01/2024",
      periodo_fim: "10/02/2024",
      data_vencimento: "20/06/2024",
      data_pagamento: null,
      valor: "400,00",
      status_pagamento: false,
      // EM ABERTO
    },
    {
      id_fatura: 5,
      id_locatario: 2,
      id_contrato: 2,
      id_imovel: 2,
      nome_locatario: "Locatário 05",
      periodo_inicio: "15/02/2024",
      periodo_fim: "15/03/2024",
      data_vencimento: "25/03/2024",
      data_pagamento: null,
      valor: "1650,00",
      status_pagamento: false,
      // VENCIDO
    },
    {
      id_fatura: 6,
      id_locatario: 3,
      id_contrato: 3,
      id_imovel: 3,
      nome_locatario: "Locatário 06",
      periodo_inicio: "20/04/2024",
      periodo_fim: "29/05/2024",
      data_vencimento: "30/05/2024",
      data_pagamento: "25/05/2024",
      valor: "1000,00",
      status_pagamento: true,
      // PAGO
    },
  ];
  if (valid_faturas == null) {
    localStorage.setItem("faturas", JSON.stringify(faturas));
  }
}

function iniciar_banco_locatarios() {
    let locatarios = [
        {
            id: 1,
            nome: "Locatário 01",
            cpf: "19999999999",
            estado_civil: "solteiro",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "rua",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: true,
            situacao: false
        },
        {
            id: 2,
            nome: "Locatário 02",
            cpf: "29999999999",
            estado_civil: "casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "praça",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: false,
            situacao: true
        },
        {
            id: 3,
            nome: "Locatário 03",
            cpf: "39999999999",
            estado_civil: "solteiro",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "avenida",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: false,
            situacao: false
        }

    ]
    localStorage.setItem("locatarios", JSON.stringify(locatarios))
}