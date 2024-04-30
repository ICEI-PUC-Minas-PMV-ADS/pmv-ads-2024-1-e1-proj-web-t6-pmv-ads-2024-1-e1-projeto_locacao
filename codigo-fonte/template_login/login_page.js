//Função para abrir popup Esqueci Minha Senha
var open_primeiro_popup = document.getElementById("btn_popup_esqueceu_senha")
    open_primeiro_popup.addEventListener('click', function(){
        var chama_popup=document.getElementById("popup_esqueceu_senha")
            chama_popup.showModal()})

//Função para abrir popup Enviar Senha para o e-mail informado
var open_segundo_popup = document.getElementById("btn_enviar_senha")
    open_segundo_popup.addEventListener('click', function(){
    var recebe_popup_popup=document.getElementById("enviar_senha")
        recebe_popup_popup.showModal()})

//Função para voltar ao login após o envio da senha padrão ao e-mail informado        
var btn_volta = document.getElementById("btn_voltar")
    btn_volta.addEventListener('click', function(){
        let chama_popup=document.getElementById("popup_esqueceu_senha")
        let voltar_login = document.getElementById('enviar_senha') 
        chama_popup.close()
        voltar_login.close()})    

function iniciar_banco_usuarios(){
    let novos_usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let usuarios = [
         {
             id: 1,
            nome: "Master",
            tipo: "Administrador",
            email: "master@immocontrol.com.br",
           senha: "123",
             status: true,
             primeiro_acesso: true
         },
         {
             id: 2,
             nome: "Usuario Ativo",
             tipo: "Comum",
            email: "ativo@immocontrol.com.br",
             senha: "123",
             status: true,
             primeiro_acesso: true
        },
         {
             id: 3,
             nome: "Usuario Inativo",
             tipo: "Comum",
             email: "inativo@immocontrol.com.br",
             senha: "123",
             status: false,
             primeiro_acesso: true
         }
     ]
// Para resetar o banco de dados: (ativar 'usuarios' e desativar O novos_usuarios) 
    // localStorage.setItem('usuarios', JSON.stringify(usuarios))
    localStorage.setItem('usuarios', JSON.stringify(novos_usuarios))
}

function iniciar_banco(){

    iniciar_banco_usuarios()

}

//Função de autenticação do usuario (ativo, inativo)
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
            location.href ='../dashboard_page/dashboard_page.html'         
            }else{alert("USUÁRIO OU SENHA INVÁLIDOS")}  
} 

function alterar_senha(){
    let senha_antiga = document.getElementById("senha_antiga").value
    let nova_senha = document.getElementById("senha_nova").value
    let confirmar_senha = document.getElementById("senha_confirmada").value    
    let fecha_popup = document.getElementById('popup_primeiro_acesso') 
    let usuario_autenticado = JSON.parse(localStorage.getItem("usuario_autenticado"))
    
    if(senha_antiga==usuario_autenticado.senha && nova_senha==confirmar_senha){
        usuario_autenticado.senha = nova_senha 
        usuario_autenticado.primeiro_acesso = false
    }else if(nova_senha!==confirmar_senha && senha_antiga==123){
            alert("NOVA SENHA DIFERENTE DA SENHA CONFIRMADA") 
           }else if(senha_antiga!==123 && nova_senha==confirmar_senha){
                    alert("SENHA ANTIGA INCORRETA")
                  }else{alert("SENHAS INCORRETAS")}

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))        
    let novos_usuarios = usuarios.map((usuario)=>{
    if(usuario.id==usuario_autenticado.id){
        return usuario_autenticado
    }else{return usuario}})

    localStorage.setItem('usuarios', JSON.stringify(novos_usuarios))
    fecha_popup.close()
}

//Função apra Enviar senha padrão para o e-mail informado
function enviar_email(){
    let enviar_email = document.getElementById("email_cadastrado").value
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usuarios)
      
    let  novos_usuarios = usuarios.map((usuario)=>{
        if(usuario.email==enviar_email){
            usuario.senha='123'
            usuario.primeiro_acesso = true
            return usuario
           
        }else{return usuario}                
    }) 
        
    localStorage.setItem('usuarios', JSON.stringify(novos_usuarios))
    let emailEnviado = document.getElementById("email_enviado")
    
    usuarios.map((usuario)=>{
        if(usuario==enviar_email){
            return emailEnviado.innerHTML = 'SENHA ENVIADA COM SUCESSO PARA O E-MAIL: '+enviar_email            
        }else{return emailEnviado.innerHTML ='E-MAIL INFORMADO NÃO É UM E-MAIL VÁLIDO, FAVOR O E-MAIL CADASTRADO'}                
    })  
    
}


