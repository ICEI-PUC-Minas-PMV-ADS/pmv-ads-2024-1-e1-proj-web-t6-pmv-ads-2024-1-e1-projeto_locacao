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
    
function iniciar_banco_usuarios(){
    let usuarios = [
        {
            id: 1,
            nome: "Master",
            tipo: "Administrador",
            email: "teste@immocontrol.com.br",
            senha: "123",
            status: true,
            primeiro_acesso: false
        },
        {
            id: 2,
            nome: "Pedro",
            tipo: "Comum",
            email: "pedro@immocontrol.com.br",
            senha: "123",
            status: true,
            primeiro_acesso: true
        },
        {
            id: 3,
            nome: "Socratis",
            tipo: "Comum",
            email: "socratis@immocontrol.com.br",
            senha: "123",
            status: true,
            primeiro_acesso: false
        }
    ]
    localStorage.setItem("usuarios", JSON.stringify(usuarios))    
}

function iniciar_banco() {

    iniciar_banco_usuarios()  

}

function verica_usuario(){
    let pega_usuario = document.getElementById("email").value
    let pega_senha = document.getElementById("senha").value
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    for(let i; i < usuarios.length; i++){
        
        console.log(usuarios[i].email)
        // if(pega_usuario==usuario.email){
        //     console.log("OK")
        // }


    }
    
     
}

