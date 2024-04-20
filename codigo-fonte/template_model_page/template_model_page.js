async function coletar_proprietarios() {
    let result
    const response = await fetch("../repositories/proprietarios.json")
    const proprietarios = await response.json().then(response => result = response.proprietarios)

    return result
}

async function proprietarios_init(id, nome, cpf, status) {
    let id_value = id
    let nome_value = nome
    let cpf_value = cpf
    let status_value = status

    if(id_value == "") {
        id_value = null
    }

    if(nome_value == "") {
        nome_value = null
    }

    if(cpf_value == "") {
        cpf_value = null
    }

    let table = document.getElementById('table_list')

    let proprietarios = await coletar_proprietarios()

    if (id_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.id == parseInt(id))
    }

    if (nome_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.nome.toUpperCase().includes(nome.toUpperCase()))
    }

    if (cpf_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.cpf == cpf)
    }

    if (status != null) {
        if (status) {
            proprietarios = proprietarios.filter((proprietario) => proprietario.status == status)
        } else {
            proprietarios = proprietarios.filter((proprietario) => proprietario.status == status)
        }
    }

    proprietarios.map((proprietario) => {
        dados = JSON.stringify(proprietario)
        
        table.innerHTML += `
                <div class="div_table_row">
                    <div class="table_icon">
                        <img class="icon" src="../scr/icones/icon_proprietarios_selecionado.png" alt="">
                    </div>
                    <div class="table_id">
                        ${proprietario.id}
                    </div>
                    <div class="table_name">
                        ${proprietario.nome}
                    </div>
                    <div class="table_property">
                        ${proprietario.imoveis.length}
                    </div>
                    <div class="table_status">
                        <div class=${proprietario.status ? "status_active" : "status_inactive"}>
                            <p>
                                ${proprietario.status ? "Ativo" : "Inativo"}
                            </p>
                        </div>
                    </div>
                    <div class="table_button">
                        <button class="open_button" data-button='${dados}' onclick="return dados_proprietario(this)">
                            <img class="open_icon" src="../scr/icones/icon_ver_dados.png" alt="">
                        </button>
                    </div>
                </div>
            `
        table.innerHTML += '<hr class="divisor"></hr>'
    })
}

function abrir_popup_filtrar_proprietario() {
    let popup = document.getElementById('popup_filtrar')

    popup.showModal()
}

function fechar_popup_filtrar_proprietario() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}

function filtrar_proprietarios() {
    let popup = document.getElementById('popup_filtrar')
    var node = document.getElementById('table_list')
    node.innerHTML = ""

    let id = document.getElementById("id").value
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let status_todos = document.getElementById("status_todos").checked ? document.getElementById("status_todos").value : null
    let status_ativo = document.getElementById("status_ativo").checked ? document.getElementById("status_ativo").value : null
    let status_inativo = document.getElementById("status_inativo").checked ? document.getElementById("status_inativo").value : null

    let status

    if(status_todos == "todos"){
        status = null
    } else {
        if(status_ativo == "ativo") {
            status = true
        }
        if(status_inativo == "inativo") {
            status = false
        }
    }

    proprietarios_init(id, nome, cpf, status)
    popup.close()
}

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

    if(status_ativo.checked) {
        if(status_inativo.checked) {
            status_todos.checked = true
        }
    } else {
        if(status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function status_inativo() {
    let status_todos = document.getElementById("status_todos")
    let status_ativo = document.getElementById("status_ativo")
    let status_inativo = document.getElementById("status_inativo")

    if(status_inativo.checked) {
        if(status_ativo.checked) {
            status_todos.checked = true
        }
    } else {
        if(status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function dados_proprietario(e) {
    let dados = JSON.parse(e.dataset.button)
    console.log(dados)
}