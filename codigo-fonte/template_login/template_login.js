// FUNÇÃO PARA CHAMAR ESQUECEU SENHA: 1º POPUP
var open_primeiro_popup = document.getElementById("btn_popup_esqueceu_senha")
    open_primeiro_popup.addEventListener('click', function(){
        var chama_popup=document.getElementById("popup_esqueceu_senha")
            chama_popup.showModal()          
    })

// FUNÇÃO PARA CHAMAR ENVIAR SENHA: 2º POPUP
var open_segundo_popup = document.getElementById("btn_enviar_senha")
    open_segundo_popup.addEventListener('click', function(){
        var recebe_popup_popup=document.getElementById("enviar_senha")
            recebe_popup_popup.showModal()
    })

// FUNÇÃO PARA FECHAR OS POPUS E VOLTAR PARA TELA DE LOGIN
var btn_voltar = document.getElementById("btn_voltar")
    btn_voltar.addEventListener('click', function(){
        var chama_popup=document.getElementById("popup_esqueceu_senha")
        var recebe_popup_popup=document.getElementById("enviar_senha")
            chama_popup.close()
            recebe_popup_popup.close()
                
    })    

