
// POPUP CADASTRAR NOVO LOCATÁRIO
function abrir_popup_cadastrar_locatario() {
    let popup = document.getElementById('popup_cadastrar')

    popup.showModal()
}

function fechar_popup_cadastrar_locatario() {
    let popup = document.getElementById('popup_cadastrar')

    popup.close()
}

function cadastrar_locatario() {
    let popup = document.getElementById('popup_cadastrar')
    popup.close()
}


// POPUP DADOS LOCATÁRIO
function abrir_popup_dados_locatario(e) {
    let popup = document.getElementById('popup_dados_locatario')
    let dados_locatario = JSON.parse(e.dataset.button)
    console.log(dados_locatario)

    popup.showModal()
}

function fechar_popup_dados_locatario() {
    let popup = document.getElementById('popup_dados_locatario')

    popup.close()
}

function alterar_locatario() {
    let popup = document.getElementById('popup_dados_locatario')
    popup.close()
}


// POPUP FILTRAR LOCATÁRIO
function abrir_popup_filtrar_locatario() {
    let popup = document.getElementById('popup_filtrar')

    popup.showModal()
}

function fechar_popup_filtrar() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}

function filtrar_locatario() {
    let popup = document.getElementById('popup_filtrar')
    popup.close()
}

// MARCAÇÃO DINÂMICA POPUP FILTRAR
function status_todos() {
    let status_todos = document.getElementById("status_todos")
    let status_ativo = document.getElementById("status_ativo")
    let status_inativo = document.getElementById("status_inativo")

    if (status_todos.checked) {
        status_ativo.checked = true
        status_inativo.checked = true
    } else {
        status_ativo.checked = false
        status_inativo.checked = false
    }
}

function status_ativo() {
    let status_todos = document.getElementById("status_todos")
    let status_ativo = document.getElementById("status_ativo")
    let status_inativo = document.getElementById("status_inativo")

    if (status_ativo.checked) {
        if (status_inativo.checked) {
            status_todos.checked = true
        }
    } else {
        if (status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function status_inativo() {
    let status_todos = document.getElementById("status_todos")
    let status_ativo = document.getElementById("status_ativo")
    let status_inativo = document.getElementById("status_inativo")

    if (status_inativo.checked) {
        if (status_ativo.checked) {
            status_todos.checked = true
        }
    } else {
        if (status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}



// BANCO DE DADOS DE LOCATÁRIOS

function locatarios_init() {
    localStorage.clear()

    iniciar_banco()

    locatarios(null, null, null, true)
}




function iniciar_banco_locatarios() {
    let locatarios = [
        {
            id: 1,
            nome: "Locatário 01",
            cpf: "99999999999",
            estado_civil: "casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
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
            status: true,
            status_cobranca: false
        },
        {
            id: 2,
            nome: "Locatário 02",
            cpf: "99999999999",
            estado_civil: "casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
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
            status: true,
            status_cobranca: true
        },
        {
            id: 3,
            nome: "Locatário 03",
            cpf: "99999999999",
            estado_civil: "casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
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
            status: false,
            status_cobranca: false
        }

    ]
    localStorage.setItem("locatarios", JSON.stringify(locatarios))
}

function iniciar_banco() {
    iniciar_banco_locatarios()
}

// Funcão para povoar a tela com o banco de dados
function locatarios(id, nome, cpf, status) {
    var node = document.getElementById('table_list')
    node.innerHTML = ""

    let id_value = id
    let nome_value = nome
    let cpf_value = cpf

    if (id_value == "") {
        id_value = null
    }

    if (nome_value == "") {
        nome_value = null
    }

    if (cpf_value == "") {
        cpf_value = null
    }

// PARAMOS AQUI

    let locatarios = JSON.parse(localStorage.getItem("locatarios"))
    console.log(locatarios)

    let table_locatarios = document.getElementById('table_list')


    if(locatarios.length > 0) {
        locatarios.map((locatario) => {
            dados_locatario = JSON.stringify(locatario) 

            table_locatarios.innerHTML += `
            <div class="div_table_row"> 
                <div class="table_icon">
                    <img src="../src/icones/icon_locatarios_selecionado.png" alt="" class="icon">
                </div>
                <div class="table_id">
                    ${locatario.id}
                </div>
                <div class="table_name">
                    ${locatario.nome}    
                </div>
                <div class="table_telefone">
                    ${locatario.telefone}
                </div>
                <div class="table_email">
                    ${locatario.email}
                </div>
                <div class="table_status">
                    <div class=${locatario.status ? "status_active" : "status_inactive"}>
                        <p>
                            ${locatario.status ? "Ativo" : "Inativo"}
                        </p>
                    </div>
                </div>

                <div class="table_status">
                    <div class=${locatario.status_cobranca ? "status_active" : "status_inactive"}>
                        <p>
                            ${locatario.status_cobranca ? "Adimplente" : "Inadimplente"}
                        </p>
                    </div>
                </div>


                <div class="table_button">
                    <buttom class="open_button" data-button='${dados_locatario}' onclick=" return abrir_popup_dados_locatario(this)"><img src="../src/icones/icon_ver_dados.png" alt="" class="open_icon"></buttom>
                </div>
            </div>    
            <hr class="divisor">        
            `
                       

        })
    }




}



