


iniciar_banco_geral();

function iniciar_banco_geral() {
    //localStorage.clear();
function iniciar_banco_geral(){  

    iniciar_banco_usuarios();
    iniciar_banco_proprietarios();
    iniciar_banco_imoveis();
    iniciar_banco_contratos();
    iniciar_banco_proprietarios()
    iniciar_banco_imoveis()
    iniciar_banco_contratos()
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

    ]

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
            imoveis: [
                1,
                2
            ],
            endereco: {
                tipo_logradouro: "Rua",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: true
        },
        {
            id: 2,
            nome: "Proprietario 2",
            cpf: "11111111111",
            estado_civil: "solteiro",
            telefone: "31911111111",
            email: "socratis@exemplo.com",
            imoveis: [
                3
            ],
            endereco: {
                tipo_logradouro: "Rua",
                logradouro: "Afonço Pena 2",
                numero: "2",
                complemento: "B",
                bairro: "Centro 2",
                cidade: "Porto Alegre",
                cep: "11111111",
                uf: "SC"
            },
            status: true
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
                uf: "SC"
            },
            status: false
        },

    ]

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
            status: "ativo"
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
            vacancia: "locado",
            status: "inativo"
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
            vacancia: "locado",
            status: "ativo"
        }

    ]

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
            valor_mensal: 600.00,
            data_inicio: "2024-03-23",
            status: "ativo",
            proprietario: "marcos"
        },
        {
            id: 2,
            locatario: "fernando abreu",
            endereco: "rua das nações, observatorio",
            periodo: "6",
            valor_mensal: 1600.00,
            data_inicio: "2020-05-06",
            status: "inativo",
            proprietario: "vinicius"
        },
        {
            id: 3,
            locatario: "Mariilia pereira",
            endereco: "rua laranjal, paulista",
            periodo: "24",
            valor_mensal: 600.00,
            data_inicio: "2018-09-08",
            status: "ativo",
            proprietario: "joana"
        }
    ]

    if (valid_contratos == null) {
        localStorage.setItem("contratos", JSON.stringify(contratos));
    }
}