// função para iniciar JS no HTML

function usuarios_init(){
    iniciar_banco_usuarios()
    usuarios(null, null, null, true)
}

// popular a tabela

function usuarios(id, nome, tipo, status){
    var tabela = document.getElementById('table_list')
    tabela.innerHTML = ""

    let id_value = id
    let nome_value = nome
    let tipo_value = tipo

    if (id_value == "") {
        id_value = null
    }

    if (nome_value == "") {
        nome_value = null
    }

    if (tipo_value == "todos") {
        tipo_value = null
    }
    

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))

    if (id_value != null) {
        usuarios = usuarios.filter((usuario) => usuario.id == parseInt(id))
    }

    if (nome_value != null) {
        usuarios = usuarios.filter((usuario) => usuario.nome.toUpperCase().includes(nome.toUpperCase()))
    }

    if (tipo_value != null) {
        usuarios = usuarios.filter((usuario) => usuario.tipo.toUpperCase() == tipo.toUpperCase())
    }

     if (status != null) {
        if (status) {
            usuarios = usuarios.filter((usuario) => usuario.status == status)
        } else {
            usuarios = usuarios.filter((usuario) => usuario.status == status)
        }
    }
    
    if (usuarios.length > 0) {
        usuarios.map((usuario) => {
            dados = JSON.stringify(usuario)

            tabela.innerHTML += `
            <div class="div_table_row">
            <div class="table_icon">
              <img class="icon" src="../src/icones/icon_usuario_logado.png"
                alt="ícone com desenho da silueta de um boneco" />
            </div>
            <div class="table_id">
            ${usuario.id}
            </div>
            <div class="table_name">
            ${usuario.nome}            
            </div>
            <div class="table_property">
            ${usuario.tipo}
            </div>
            <div class="table_status">
            <div class=${usuario.status ? "status_active" : "status_inactive"}>
                <p>
                    ${usuario.status ? "Ativo" : "Inativo"}
                </p>
            </div>
            </div>
            <div class="table_button">
              <button class="open_button" onclick="return abrir_popup_dados_usuarios(this)" data-button='${dados}'>
                <img class="open_icon" src="../src/icones/icon_ver_dados.png"
                  alt="ícone com desenho de um quadrado com uma seta apontando para fora dele">
              </button>
            </div>
          </div>
                `
            tabela.innerHTML += '<hr class="divisor"></hr>'
        })

    } else {
        show_snackbar('body #snackbar_error', 'Nenhum usuário foi encontrado!')
    }
}

// filtro dentro do popup

function filtrar_usuarios() {
    let popup = document.getElementById('popup_filtrar')


    let id = document.getElementById("id_filtrar").value
    let nome = document.getElementById("nome_filtrar").value
    let tipo = document.getElementById("perfil_filtrar").value
    console.log(tipo)
    let status_todos = document.getElementById("status_todos").checked ? document.getElementById("status_todos").value : null
    let status_ativo = document.getElementById("status_ativo").checked ? document.getElementById("status_ativo").value : null
    let status_inativo = document.getElementById("status_inativo").checked ? document.getElementById("status_inativo").value : null

    let status

    if (status_todos == "todos") {   
        status = null
    } else {
        if (status_ativo == "ativo") {
            status = true
        }
        if (status_inativo == "inativo") {
            status = false
        }
    }

    usuarios(id, nome, tipo, status)
    popup.close()
}


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
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_add")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    body.innerHTML += `
    <dialog id="popup_add" class="popup">
      <div>
        <h1>Novo Usuário</h1>
        <p>USUÁRIO</p>
        <hr />
        <div id="div_novo_usuarios">
          <div id="div_nome">
            <label for="nome">NOME</label>
            <input type="text" name="nome" id="nome_novo" class="inputSuccess" onblur="return set_input_success(this)" />
          </div>
          <div id="div_email">
            <label for="email">EMAIL</label>
            <input type="text" name="email" id="email_novo" class="inputSuccess" onblur="return set_input_success(this)"/>
          </div>
          <div id="div_perfil">
            <label for="perfil">PERFIL</label>
            <select name="perfil" id="tipo_novo" class="selectSuccess">
              <option value="Comum">Comum</option>
              <option value="Master">Master</option>
            </select>
          </div>
        </div>
        <div class="buttons">
          <button onclick="fechar_popup_novo_usuarios()">
            <img class="icon" src="../src/icones/icon_voltar.png" alt="" />
            VOLTAR
          </button>
          <button onclick="salvar_usuario()">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="" />
            SALVAR
          </button>
        </div>
      </div>
      <div id="snackbar_success" class="snackbar"></div>
    <div id="snackbar_error" class="snackbar"></div>
    </dialog>   
    
    `

    let popup = document.getElementById("popup_add")
    popup.showModal()

}

// adicionar novo id

function novo_id() {
    let list_id = JSON.parse(localStorage.getItem("usuarios")).map((usuario) => usuario.id)
    let max_id = Math.max(...list_id)

    return max_id + 1
    
}

// salvar usuários

function salvar_usuario(){
    let nome_element = document.getElementById("nome_novo")
    let email_element = document.getElementById("email_novo")
    let tipo_element = document.getElementById("tipo_novo")

    let nome = nome_element.value == "" ? null : nome_element.value
    let email = email_element.value.includes("@") ? email_element.value : null
    let tipo = tipo_element.value


    let vericacao = [
        {
            value: nome,
            element: nome_element,
            messageError: "O nome não foi informado.",
            status: false
        },
        {
            value: email,
            element: email_element,
            messageError: "O e-mail não foi informado.",
            status: false
        }   

    ]

    for (let i = 0; i < vericacao.length; i++) {
        if (vericacao[i].value == null) {
            vericacao[i].element.className = vericacao[i].element.tagName == "INPUT" ? "inputError" : "selectError"
            show_snackbar("#popup_add #snackbar_error", vericacao[i].messageError)
            break
        } else {
            vericacao[i].status = true
        }
    }

    let pode_salvar = false

    for (let i = 0; i < vericacao.length; i++) {
        if (!vericacao[i].status) {
            pode_salvar = false
            break
        } else {
            pode_salvar = true
        }
    }
    console.log(pode_salvar)

    if (pode_salvar) {
        
        let jsonNovoUsuario = {
            id: novo_id(),
            nome: nome,
            tipo: tipo,
            email: email,
            senha: "123",
            status: true,
            primeiro_acesso: true,
        }

        let usuariosList = JSON.parse(localStorage.getItem("usuarios"))
        usuariosList.push(jsonNovoUsuario)

        localStorage.setItem("usuarios", JSON.stringify(usuariosList))

        usuarios(novo_id() - 1, null, null, null)

        fechar_popup_novo_usuarios()
    }


}




//Fechar pop up adicionar usuário//

function fechar_popup_novo_usuarios(){
    let popup = document.getElementById("popup_add")
    popup.close()
}



// mostrar pop up dados usuário

function abrir_popup_dados_usuarios(e){
    let dados = JSON.parse(e.dataset.button)
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_dados_usuarios")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    body.innerHTML += `
    <dialog id="popup_dados_usuarios" class="popup">
      <div>
        <h1>Dados do Usuário - ${dados.id}</h1>
        <p>USUÁRIO</p>
        <hr />
        <div id="div_novo_usuarios">
          <div id="div_nome">
            <label for="nome">NOME</label>
            <input type="text" name="nome" id="nome_dados" value="${dados.nome}" class="inputSuccess" onblur="return set_input_success(this)" readonly/>
          </div>
          <div id="div_email">
            <label for="email">EMAIL</label>
            <input type="text" name="email" id="email_dados" class="inputSuccess" value="${dados.email}" onblur="return set_input_success(this)"readonly/>
          </div>
          <div id="div_perfil">
            <label for="perfil">PERFIL</label>
            <select name="perfil" id="tipo_dados" class="selectSuccess" disabled>
              <option value="Comum" ${dados.tipo == "Comum" ? "selected" : ""} >Comum</option>
              <option value="Master" ${dados.tipo == "Master" ? "selected" : ""}>Master</option>
            </select>
            <p>STATUS</p>
            <hr />
            <div>
              <input class="tog" id="status_dados" type="checkbox" ${dados.status ? "checked='checked'" : ""} disabled>
              <label class="tog" for="status_dados"></label>
            </div>   
          </div>
        </div>
        <div class="buttons">
        <button onclick="fechar_popup_dados_usuarios()">
          <img class="icon" src="../src/icones/icon_voltar.png" alt="" />
          VOLTAR
        </button>
        <button onclick="alterar_usuarios()">
          <img class="icon" src="../src/icones/icon_alterar.png" alt="" />
          ALTERAR
        </button>
         <button onclick="nova_senha()">
            <img class="icon" src="../src/icones/nova_senha.png" alt="" />
            NOVA SENHA
          </button>          
      </div>
      </div>
      <div id="snackbar_success" class="snackbar"></div>
    <div id="snackbar_error" class="snackbar"></div>
    </dialog>   
    
    `

    let popup = document.getElementById("popup_dados_usuarios")
    popup.showModal()

}

// alterar dados usuários

function alterar_usuarios() {

    let buttons = document.querySelector("#popup_dados_usuarios .buttons")

    buttons.removeChild(buttons.children[2])
    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="alterar_dados_usuario()">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="">
            SALVAR
        </button>
        <button onclick="nova_senha()">
            <img class="icon" src="../src/icones/nova_senha.png" alt="" />
            NOVA SENHA
          </button>  
    `

    document.getElementById("nome_dados").readOnly = false
    document.getElementById("email_dados").readOnly = false
    document.getElementById("tipo_dados").disabled = false
    document.getElementById("status_dados").disabled = false
        
}

// salvar alteração usuário

function alterar_dados_usuario(){
    let id = parseInt(document.querySelector("#popup_dados_usuarios h1").innerHTML.split(" - ")[1])
    let nome_element = document.getElementById("nome_dados")
    let email_element = document.getElementById("email_dados")
    let tipo_element = document.getElementById("tipo_dados")
    let status_element = document.getElementById("status_dados")

    let nome = nome_element.value == "" ? null : nome_element.value
    let email = email_element.value.includes("@") ? email_element.value : null
    let tipo = tipo_element.value
    let status = status_element.checked
    

    let vericacao = [
        {
            value: nome,
            element: nome_element,
            messageError: "O nome não foi informado.",
            status: false
        },
        {
            value: email,
            element: email_element,
            messageError: "O e-mail não foi informado.",
            status: false
        }   

    ]

    for (let i = 0; i < vericacao.length; i++) {
        if (vericacao[i].value == null) {
            vericacao[i].element.className = vericacao[i].element.tagName == "INPUT" ? "inputError" : "selectError"
            show_snackbar("#popup_dados_usuarios #snackbar_error", vericacao[i].messageError)
            break
        } else {
            vericacao[i].status = true
        }
    }

    let pode_salvar = false

    for (let i = 0; i < vericacao.length; i++) {
        if (!vericacao[i].status) {
            pode_salvar = false
            break
        } else {
            pode_salvar = true
        }
    }
   

    if (pode_salvar) {

        let buttons = document.querySelector("#popup_dados_usuarios .buttons")

        buttons.removeChild(buttons.children[2])
        buttons.removeChild(buttons.children[1])
    
        buttons.innerHTML += `
        <button onclick="alterar_usuarios()">
        <img class="icon" src="../src/icones/icon_alterar.png" alt="" />
        ALTERAR
      </button>
            <button onclick="nova_senha()">
                <img class="icon" src="../src/icones/nova_senha.png" alt="" />
                NOVA SENHA
              </button>  
        `
    
        document.getElementById("nome_dados").readOnly = true
        document.getElementById("email_dados").readOnly = true
        document.getElementById("tipo_dados").disabled = true
        document.getElementById("status_dados").disabled = true
        
        
        let usuariosList = JSON.parse(localStorage.getItem("usuarios"))

        usuariosList = usuariosList.map((usuario) => {
            if (usuario.id == id) {
                usuario.nome = nome
                usuario.email = email
                usuario.tipo = tipo
                usuario.status = status
              
                return usuario
            }

            return usuario
        })

        localStorage.setItem("usuarios", JSON.stringify(usuariosList))

        usuarios(id, null, null, null)

    }


}

// Nova senha

function nova_senha(){
    let id = parseInt(document.querySelector("#popup_dados_usuarios h1").innerHTML.split(" - ")[1])
    let usuariosList = JSON.parse(localStorage.getItem("usuarios"))

        usuariosList = usuariosList.map((usuario) => {
            if (usuario.id == id) {
                usuario.senha = "123"
                usuario.primeiro_acesso = true
                              
                return usuario
            }

            return usuario
        })

        localStorage.setItem("usuarios", JSON.stringify(usuariosList))
        show_snackbar("#popup_dados_usuarios #snackbar_success" ,"Senha alterada com sucesso!")

}



//Fechar pop up dados usuários//

function fechar_popup_dados_usuarios(){
    let popup = document.getElementById("popup_dados_usuarios")
    popup.close()
}

// banco de dados usuários

function iniciar_banco_usuarios(){
    let usuarios = [
        {
            id: 1,
            nome: "Usuário 1",
            tipo: "Master",
            email: "usuario1@gmail.com",
            senha: "123456",
            status: true,
            primeiro_acesso: false,
        },
        {
            id: 2,
            nome: "Usuário 2",
            tipo: "Comum",
            email: "usuario2@gmail.com",
            senha: "654321",
            status: false,
            primeiro_acesso: false,
        },
        {
            id: 3,
            nome: "Usuário 3",
            tipo: "Comum",
            email: "usuario3@gmail.com",
            senha: "654321",
            status: true,
            primeiro_acesso: true,
        },

    ]
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

// mensagem de erro e sucesso 

function show_snackbar(element, message) {
    var snackbar = document.querySelector(element);
    snackbar.innerHTML = ""
    snackbar.innerHTML += `<p>${message}</p>`
    snackbar.className = "snackbar show";

    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 5000);
}


// voltar borda para verde quando adiciona o dado certo no pop up

function set_input_success(e) {
    e.className = e.tagName == "INPUT" ? "inputSuccess" : "selectSuccess"
}