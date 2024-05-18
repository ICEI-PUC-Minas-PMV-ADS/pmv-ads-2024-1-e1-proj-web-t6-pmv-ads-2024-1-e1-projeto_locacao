// mostrar o pop up filtrar usuários//

function abrir_popup_filtrar_usuarios() {
    let popup = document.getElementById('popup_filtrar')
   
    popup.showModal()
}

//fechar pop up filtro usuário//

function fechar_popup_filtrar_usuarios() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}

// validação da caixa de status//

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


//Mostrar pop up adicionar usuário//

function abrir_popup_add_usuarios(){
    let popup = document.getElementById("popup_add")
    popup.showModal()

}


//Fechar pop up adicionar usuário//

function fechar_popup_novo_usuarios(){
    let popup = document.getElementById("popup_add")
    popup.close()
}

//Mostrar pop up dados usuários//

function abrir_popup_dados_usuarios(){
    let popup = document.getElementById("popup_dados_usuarios")
    popup.showModal()
}

//Fechar pop up dados usuários//

function fechar_popup_dados_usuarios(){
    let popup = document.getElementById("popup_dados_usuarios")
    popup.close()
}