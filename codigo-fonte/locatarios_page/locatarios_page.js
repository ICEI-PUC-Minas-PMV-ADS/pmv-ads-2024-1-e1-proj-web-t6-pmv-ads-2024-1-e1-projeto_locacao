
// CADASTRAR NOVO LOCATÁRIO
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

