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
            status: false,
            primeiro_acesso: true
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
    let autenticado = false
    let primeiro_acesso = false
    for(let i = 0; i < usuarios.length; i++){

        if(pega_usuario==usuarios[i].email && pega_senha==usuarios[i].senha && usuarios[i].status){
            autenticado = true
            primeiro_acesso = usuarios[i].primeiro_acesso
        }        
    }
    if(autenticado && primeiro_acesso){
        let popup_primeiro_acesso = document.getElementById("popup_primeiro_acesso")
            popup_primeiro_acesso.showModal()
    }else if(autenticado && !primeiro_acesso){
        alert("SUCESSO")
    }else{
        alert("USUÁRIO OU SENHA INVÁLIDOS")
    }     
}

function alterar_senha(){
    let senha_antiga = document.getElementById("senha_antiga").value
    let nova_senha = document.getElementById("senha_nova").value
    let confirmar_senha = document.getElementById("senha_confirmada").value
    let senha_alterada = null
    
        if(senha_antiga==123 && nova_senha==confirmar_senha){
            location.href = "login_page.html"
            senha_alterada = nova_senha
            console.log(senha_alterada)
        } 
        else if(nova_senha!==confirmar_senha){
            alert("NOVAS SENHAS NÃO CONFEREM")
        }else{
            alert("SENHA ANTIGA INCORRETA")
        }                        
}   
                   
        
        
