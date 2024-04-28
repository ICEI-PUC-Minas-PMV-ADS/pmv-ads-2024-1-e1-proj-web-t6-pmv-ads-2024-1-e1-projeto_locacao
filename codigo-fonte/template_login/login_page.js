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
        location.href = "login_page.html"            
    })    
    
    // FUNÇÃO PARA SAIR DO SISTEMA
function btn_sair(){
    let sair = document.getElementById("sair")
    location.href = "login_page.html"
}

function iniciar_banco_usuarios(){
    let usuarios = [
        {
            id: 1,
            nome: "Master",
            tipo: "Administrador",
            email: "usuariomaster@immocontrol.com.br",
            senha: "123",
            status: true,
            primeiro_acesso: false
        },
        {
            id: 2,
            nome: "Usuario Ativo",
            tipo: "Comum",
            email: "usuarioativo@immocontrol.com.br",
            senha: "123456789",
            status: true,
            primeiro_acesso: true
        },
        {
            id: 3,
            nome: "Usuario Inativo",
            tipo: "Comum",
            email: "usuarioinativo@immocontrol.com.br",
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
            localStorage.setItem('usuario_autenticado', JSON.stringify(usuarios[i])) 
        }        
    }
    if(autenticado && primeiro_acesso){
        let popup_primeiro_acesso = document.getElementById("popup_primeiro_acesso")
            popup_primeiro_acesso.showModal() 
                   

            }else if(autenticado && !primeiro_acesso){
            location.href ="home_page_teste.html"         
            }else{
                alert("USUÁRIO OU SENHA INVÁLIDOS")
            }  
   
} 

function alterar_senha(){
    let senha_antiga = document.getElementById("senha_antiga").value
    let nova_senha = document.getElementById("senha_nova").value
    let confirmar_senha = document.getElementById("senha_confirmada").value    
    let senha_alterada = null
    let usuario_autenticado = JSON.parse(localStorage.getItem("usuario_autenticado"))
    console.log(usuario_autenticado)

          if(senha_antiga==usuario_autenticado.senha && nova_senha==confirmar_senha){
            alert("login")
            // location.href = "../template_model_page/template_model_page.html"
            usuario_autenticado.senha = nova_senha 
            usuario_autenticado.primeiro_acesso = false
            console.log(usuario_autenticado)                            
        }else if(nova_senha!==confirmar_senha && senha_antiga==123){
                alert("NOVA SENHA DIFERENTE DA SENHA CONFIRMADA") 
        }else if(senha_antiga!==123 && nova_senha==confirmar_senha){
            alert("SENHA ANTIGA INCORRETA")
        }else{alert("SENHAS INCORRETAS")}

        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        
        let novos_usuarios = usuarios.map((usuario)=>{
            if(usuario.id==usuario_autenticado.id){
                return usuario_autenticado
            }else{return usuario}
        })
        localStorage.setItem('usuarios', JSON.stringify(novos_usuarios))
        console.log(novos_usuarios)       
        // usuarios_senha_atualizada.push(senha_alterada)

}

// FUNÇÃO ENVIAR EMAIL PARA ALTERAR SENHA
function enviar_email(){
    // FAZER A LOGICA PARA ENVIAR SOMENTE PARA O EMAIL CADASTRADO
    let enviar_email = document.getElementById("email_cadastrado").value
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        
    let novos_usuarios = usuarios.map((usuario)=>{
        if(usuario.email==enviar_email){
            usuario.senha='123'
            usuario.primeiro_acesso = true
            return usuario
        }else{return usuario}
    })
    localStorage.setItem('usuarios', JSON.stringify(novos_usuarios))
    console.log(novos_usuarios)



    let emailEnviado = document.getElementById("email_enviado")
        emailEnviado.innerHTML += enviar_email

}

 