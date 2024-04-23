function abrir_popup_esqueceu_senha(){
    let popup_dialog=document.getElementById("popup_esqueceu_senha")

    popup_dialog.showModal()
}
function abrir_popup_esqueceu_senha_dois(){
    let popup_dialogdois=document.getElementById("enviar_senha")
    let popup_dialog=document.getElementById("popup_esqueceu_senha")
    popup_dialog.close()
    popup_dialogdois.showModal()

}

// function fechar_popup(){
//     let fechar_popup_dialog=document.getElementById("popup_esqueceu_senha")

//     fechar_dialog.close()
// }


// function abrir_popup_filtrar_proprietario() {
//     let popup = document.getElementById('popup_filtrar')

//     popup.showModal()
// }

// function fechar_popup_filtrar_proprietario() {
//     let popup = document.getElementById('popup_filtrar')

//     popup.close()
// }


