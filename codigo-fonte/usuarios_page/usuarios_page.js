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
            <div class="linha_tabela">
            <div class="item_icone_tabela">
              <img class="icon" src="../src/icones/icon_usuario_logado.png"
                alt="ícone com desenho da silueta de um boneco" />
            </div>
            <div class="item_id_tabela">
            ${usuario.id}
            </div>
            <div class="item_nome_tabela">
            ${usuario.nome}            
            </div>
            <div class="item_perfil_tabela">
            ${usuario.tipo}
            </div>
            <div class="table_status">
            <div class=${usuario.status ? "status_active" : "status_inactive"}>
                <p>
                    ${usuario.status ? "Ativo" : "Inativo"}
                </p>
            </div>
            </div>
            <div class="item_botao_tabela">
              <button class="botao_tabela" onclick="abrir_popup_dados_usuarios()">
                <img class="icon" src="../src/icones/icon_ver_dados.png"
                  alt="ícone com desenho de um quadrado com uma seta apontando para fora dele">
              </button>
            </div>
          </div>
                `
            tabela.innerHTML += '<hr class="divisor"></hr>'
        })

    } else {
        //show_snackbar('body #snackbar_error', 'Nenhum proprietário foi encontrado!')
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

