// POPUP CADASTRAR DADOS LOCATÁRIO
function abrir_popup_dados_fatura() {
    let popup = document.getElementById('popup_dados_fatura')

    popup.showModal()
}

function fechar_popup_dados_fatura() {
    let popup = document.getElementById('popup_dados_fatura')

    popup.close()
}

function alterar_fatura() {
    let popup = document.getElementById('popup_dados_fatura')
    popup.close()
}