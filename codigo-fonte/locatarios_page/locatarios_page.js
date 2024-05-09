
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


// POPUP CADASTRAR dados LOCATÁRIO
function abrir_popup_dados_locatario() {
    let popup = document.getElementById('popup_dados_locatario')

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


