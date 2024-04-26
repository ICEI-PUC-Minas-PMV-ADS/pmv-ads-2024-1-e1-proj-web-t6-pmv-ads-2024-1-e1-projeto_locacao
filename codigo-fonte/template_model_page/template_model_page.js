function proprietarios_init() {
    localStorage.clear()

    iniciar_banco()

    proprietarios(null, null, null, true)
}

function proprietarios(id, nome, cpf, status) {
    var node = document.getElementById('table_list')
    node.innerHTML = ""

    let id_value = id
    let nome_value = nome
    let cpf_value = cpf

    if(id_value == "") {
        id_value = null
    }

    if(nome_value == "") {
        nome_value = null
    }

    if(cpf_value == "") {
        cpf_value = null
    }

    let table = document.getElementById('table_list')

    let proprietarios = JSON.parse(localStorage.getItem("proprietarios"))

    if (id_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.id == parseInt(id))
    }

    if (nome_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.nome.toUpperCase().includes(nome.toUpperCase()))
    }

    if (cpf_value != null) {
        proprietarios = proprietarios.filter((proprietario) => proprietario.cpf == cpf)
    }

    if (status != null) {
        if (status) {
            proprietarios = proprietarios.filter((proprietario) => proprietario.status == status)
        } else {
            proprietarios = proprietarios.filter((proprietario) => proprietario.status == status)
        }
    }

    proprietarios.map((proprietario) => {
        dados = JSON.stringify(proprietario)
        
        table.innerHTML += `
                <div class="div_table_row">
                    <div class="table_icon">
                        <img class="icon" src="../scr/icones/icon_proprietarios_selecionado.png" alt="">
                    </div>
                    <div class="table_id">
                        ${proprietario.id}
                    </div>
                    <div class="table_name">
                        ${proprietario.nome}
                    </div>
                    <div class="table_property">
                        ${proprietario.imoveis.length}
                    </div>
                    <div class="table_status">
                        <div class=${proprietario.status ? "status_active" : "status_inactive"}>
                            <p>
                                ${proprietario.status ? "Ativo" : "Inativo"}
                            </p>
                        </div>
                    </div>
                    <div class="table_button">
                        <button class="open_button" data-button='${dados}' onclick="return abrir_popup_dados_proprietario(this)">
                            <img class="open_icon" src="../scr/icones/icon_ver_dados.png" alt="">
                        </button>
                    </div>
                </div>
            `
        table.innerHTML += '<hr class="divisor"></hr>'
    })
}

function abrir_popup_filtrar_proprietario() {
    let popup = document.getElementById('popup_filtrar')

    popup.showModal()
}

function fechar_popup_filtrar_proprietario() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}

function filtrar_proprietarios() {
    let popup = document.getElementById('popup_filtrar')
    

    let id = document.getElementById("id").value
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let status_todos = document.getElementById("status_todos").checked ? document.getElementById("status_todos").value : null
    let status_ativo = document.getElementById("status_ativo").checked ? document.getElementById("status_ativo").value : null
    let status_inativo = document.getElementById("status_inativo").checked ? document.getElementById("status_inativo").value : null

    let status

    if(status_todos == "todos"){
        status = null
    } else {
        if(status_ativo == "ativo") {
            status = true
        }
        if(status_inativo == "inativo") {
            status = false
        }
    }

    proprietarios(id, nome, cpf, status)
    popup.close()
}

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

    if(status_ativo.checked) {
        if(status_inativo.checked) {
            status_todos.checked = true
        }
    } else {
        if(status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function status_inativo() {
    let status_todos = document.getElementById("status_todos")
    let status_ativo = document.getElementById("status_ativo")
    let status_inativo = document.getElementById("status_inativo")

    if(status_inativo.checked) {
        if(status_ativo.checked) {
            status_todos.checked = true
        }
    } else {
        if(status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function abrir_popup_dados_proprietario(e) {
    let dados = JSON.parse(e.dataset.button)

    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_dados_proprietario")

    if(verifica_popups.length > 0) {
        for(var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    body.innerHTML += `
        <dialog id="popup_dados_proprietario" class="popup">
            <div>
                <h1>Dados do Proprietário - ${dados.id}</h1>
                <p>DADOS PESSOAIS</p>
                <hr>
                <div class="dados_pessoais">
                    <div class="div_nome">
                        <label for="nome">NOME</label>
                        <input type="text" name="nome" id="nome_prop" value="${dados.nome}" readonly>
                    </div>
                    <div class="div_cpf">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf_prop" value="${dados.cpf}" readonly>
                    </div>
                    <div class="div_estado_civil">
                        <label for="estado_civil">ESTADO CIVIL</label>
                        <select name="estado_civil" id="estado_civil_prop" disabled="true">
                            <option value="vazio">-</option>
                            <option value="casado" ${dados.estado_civil == "Casado" ? "selected" : ""}>Casado</option>
                            <option value="solteiro" ${dados.estado_civil == "Solteiro" ? "selected" : ""}>Solteiro</option>
                        </select>
                    </div>
                </div>
                <p>ENDEREÇO</p>
                <hr>
                <div class="endereco">
                    <div class="div_tipo_logradouro">
                        <label for="tipo_logradouro">TIPO LOGRADOURO</label>
                        <input type="text" name="tipo_logradouro" id="tipo_logradouro_prop" value="${dados.endereco.tipo_logradouro}" readonly>
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO</label>
                        <input type="text" name="logradouro" id="logradouro_prop" value="${dados.endereco.logradouro}" readonly>
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO</label>
                        <input type="text" name="numero" id="numero_prop" value="${dados.endereco.numero}" readonly>
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_prop" value="${dados.endereco.complemento}" readonly>
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO</label>
                        <input type="text" name="bairro" id="bairro_prop" value="${dados.endereco.bairro}" readonly>
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE</label>
                        <input type="text" name="cidade" id="cidade_prop" value="${dados.endereco.cidade}" readonly>
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP</label>
                        <input type="text" name="cep" id="cep_prop" value="${dados.endereco.cep}" readonly>
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF</label>
                        <input type="text" name="uf" id="uf_prop" value="${dados.endereco.uf}" readonly>
                    </div>
                </div>
                <p>CONTATO</p>
                <hr>
                <div class="contato">
                    <div class="div_telefone">
                        <label for="telefone">TELEFONE</label>
                        <input type="text" name="telefone" id="telefone_prop" value="${dados.telefone}" readonly>
                    </div>
                    <div class="div_email">
                        <label for="email">E-MAIL</label>
                        <input type="text" name="email" id="email_prop" value="${dados.email}" readonly>
                    </div>
                </div>
                
                <div class="buttons">
                    <button onclick="fechar_popup_dados_proprietario()">
                        <img class="icon" src="../scr/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="alterar_dados_proprietario()">
                        <img class="icon" src="../scr/icones/icon_alterar.png" alt="">
                        ALTERAR
                    </button>
                </div>
            </div>
        </dialog>
    `

    let popup = document.getElementById("popup_dados_proprietario")

    popup.showModal()
}

function fechar_popup_dados_proprietario() {
    let popup = document.getElementById('popup_dados_proprietario')

    popup.close()
}

function alterar_dados_proprietario() {

    let buttons = document.querySelector("#popup_dados_proprietario .buttons")
    
    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="salvar_dados_proprietario()">
            <img class="icon" src="../scr/icones/icon_salvar.png" alt="">
            SALVAR
        </button>
    `

    document.getElementById("nome_prop").readOnly = false
    document.getElementById("cpf_prop").readOnly = false
    document.getElementById("estado_civil_prop").disabled = false
    document.getElementById("tipo_logradouro_prop").readOnly = false
    document.getElementById("logradouro_prop").readOnly = false
    document.getElementById("numero_prop").readOnly = false
    document.getElementById("complemento_prop").readOnly = false
    document.getElementById("bairro_prop").readOnly = false
    document.getElementById("cidade_prop").readOnly = false
    document.getElementById("cep_prop").readOnly = false
    document.getElementById("uf_prop").readOnly = false
    document.getElementById("telefone_prop").readOnly = false
    document.getElementById("email_prop").readOnly = false
}

function salvar_dados_proprietario(){
    let buttons = document.querySelector("#popup_dados_proprietario .buttons")
    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="alterar_dados_proprietario()">
            <img class="icon" src="../scr/icones/icon_alterar.png" alt="">
            ALTERAR
        </button>
    `
    let id = parseInt(document.querySelector("#popup_dados_proprietario h1").innerHTML.split(" - ")[1])
    let nome = document.getElementById("nome_prop")
    let cpf = document.getElementById("cpf_prop")
    let estado_civil = document.getElementById("estado_civil_prop")
    let tipo_logradouro = document.getElementById("tipo_logradouro_prop")
    let logradouro = document.getElementById("logradouro_prop")
    let numero = document.getElementById("numero_prop")
    let complemento = document.getElementById("complemento_prop")
    let bairro = document.getElementById("bairro_prop")
    let cidade = document.getElementById("cidade_prop")
    let cep = document.getElementById("cep_prop")
    let uf = document.getElementById("uf_prop")
    let telefone = document.getElementById("telefone_prop")
    let email = document.getElementById("email_prop")

    nome.readOnly = true
    cpf.readOnly = true
    estado_civil.disabled = true
    tipo_logradouro.readOnly = true
    logradouro.readOnly = true
    numero.readOnly = true
    complemento.readOnly = true
    bairro.readOnly = true
    cidade.readOnly = true
    cep.readOnly = true
    uf.readOnly = true
    telefone.readOnly = true
    email.readOnly = true

    proprietariosList = JSON.parse(localStorage.getItem("proprietarios"))

    proprietariosList = proprietariosList.map((proprietario) => {
        if(proprietario.id == id) {
            proprietario.nome = nome.value
            proprietario.cpf = cpf.value
            proprietario.estado_civil = estado_civil.value
            proprietario.telefone = telefone.value
            proprietario.email = email.value
            proprietario.endereco.tipo_logradouro = tipo_logradouro.value
            proprietario.endereco.logradouro = logradouro.value
            proprietario.endereco.numero = numero.value
            proprietario.endereco.complemento = complemento.value
            proprietario.endereco.bairro = bairro.value
            proprietario.endereco.cidade = cidade.value
            proprietario.endereco.cep = cep.value
            proprietario.endereco.uf = uf.value

            return proprietario
        }

        return proprietario
    })

    localStorage.setItem("proprietarios", JSON.stringify(proprietariosList))

    filtrar_proprietarios()
}

function abrir_popup_novo_proprietario() {
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_novo_proprietario")

    if(verifica_popups.length > 0) {
        for(var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    body.innerHTML += `
        <dialog id="popup_novo_proprietario" class="popup">
            <div>
                <h1>Novo Proprietário</h1>
                <p>DADOS PESSOAIS</p>
                <hr>
                <div class="dados_pessoais">
                    <div class="div_nome">
                        <label for="nome">NOME</label>
                        <input type="text" name="nome" id="nome_prop_novo">
                    </div>
                    <div class="div_cpf">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf_prop_novo">
                    </div>
                    <div class="div_estado_civil">
                        <label for="estado_civil">ESTADO CIVIL</label>
                        <select name="estado_civil" id="estado_civil_prop_novo">
                            <option value="vazio">-</option>
                            <option value="casado">Casado</option>
                            <option value="solteiro">Solteiro</option>
                        </select>
                    </div>
                </div>
                <p>ENDEREÇO</p>
                <hr>
                <div class="endereco">
                    <div class="div_tipo_logradouro">
                        <label for="tipo_logradouro">TIPO LOGRADOURO</label>
                        <input type="text" name="tipo_logradouro" id="tipo_logradouro_prop_novo">
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO</label>
                        <input type="text" name="logradouro" id="logradouro_prop_novo">
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO</label>
                        <input type="text" name="numero" id="numero_prop_novo">
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_prop_novo">
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO</label>
                        <input type="text" name="bairro" id="bairro_prop_novo">
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE</label>
                        <input type="text" name="cidade" id="cidade_prop_novo">
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP</label>
                        <input type="text" name="cep" id="cep_prop_novo">
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF</label>
                        <input type="text" name="uf" id="uf_prop_novo">
                    </div>
                </div>
                <p>CONTATO</p>
                <hr>
                <div class="contato">
                    <div class="div_telefone">
                        <label for="telefone">TELEFONE</label>
                        <input type="text" name="telefone" id="telefone_prop_novo">
                    </div>
                    <div class="div_email">
                        <label for="email">E-MAIL</label>
                        <input type="text" name="email" id="email_prop_novo">
                    </div>
                </div>
                
                <div class="buttons">
                    <button onclick="fechar_popup_novo_proprietario()">
                        <img class="icon" src="../scr/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="salvar_novo_proprietario()">
                        <img class="icon" src="../scr/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
        </dialog>
    `

    let popup = document.getElementById("popup_novo_proprietario")

    popup.showModal()
}

function fechar_popup_novo_proprietario() {
    let popup = document.getElementById('popup_novo_proprietario')

    popup.close()
}
function novo_id(){
    let list_id = JSON.parse(localStorage.getItem("proprietarios")).map((proprietario) => proprietario.id)
    let max_id = Math.max(...list_id)

    return max_id + 1
}

function salvar_novo_proprietario(){
    let nome = document.getElementById("nome_prop_novo").value
    let cpf = document.getElementById("cpf_prop_novo").value
    let estado_civil = document.getElementById("estado_civil_prop_novo").value
    let tipo_logradouro = document.getElementById("tipo_logradouro_prop_novo").value
    let logradouro = document.getElementById("logradouro_prop_novo").value
    let numero = document.getElementById("numero_prop_novo").value
    let complemento = document.getElementById("complemento_prop_novo").value
    let bairro = document.getElementById("bairro_prop_novo").value
    let cidade = document.getElementById("cidade_prop_novo").value
    let cep = document.getElementById("cep_prop_novo").value
    let uf = document.getElementById("uf_prop_novo").value
    let telefone = document.getElementById("telefone_prop_novo").value
    let email = document.getElementById("email_prop_novo").value

    let jsonNovoProprietario = {
        id: novo_id(),
        nome: nome,
        cpf: cpf,
        estado_civil: estado_civil,
        telefone: telefone,
        email: email,
        imoveis: [],
        endereco: {
            tipo_logradouro: tipo_logradouro,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            cep: cep,
            uf: uf
        },
        status: false
    }

    let proprietariosList = JSON.parse(localStorage.getItem("proprietarios"))
    proprietariosList.push(jsonNovoProprietario)

    localStorage.setItem("proprietarios", JSON.stringify(proprietariosList))
    
    proprietarios(novo_id() - 1, null, null, null)

    fechar_popup_novo_proprietario()
}

function iniciar_banco_proprietarios() {
    let proprietarios = [
        {
            id: 1,
            nome: "Pedro Francis Maia Coelho",
            cpf: "99999999999",
            estado_civil: "Casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            imoveis: [
                1,
                2
            ],
            endereco: {
                tipo_logradouro: "Rua",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: true
        },
        {
            id: 2,
            nome: "Sócratis Gomes da Silva",
            cpf: "11111111111",
            estado_civil: "Solteiro",
            telefone: "31911111111",
            email: "socratis@exemplo.com",
            imoveis: [
                3
            ],
            endereco: {
                tipo_logradouro: "Rua",
                logradouro: "Afonço Pena 2",
                numero: "2",
                complemento: "B",
                bairro: "Centro 2",
                cidade: "Porto Alegre",
                cep: "11111111",
                uf: "SC"
            },
            status: true
        },
        {
            id: 3,
            nome: "Sócratis Gomes da Silva 2",
            cpf: "11111111111",
            estado_civil: "Solteiro",
            telefone: "31911111111",
            email: "socratis@exemplo.com",
            imoveis: [],
            endereco: {
                tipo_logradouro: "Rua",
                logradouro: "Afonço Pena 2",
                numero: "2",
                complemento: "B",
                bairro: "Centro 2",
                cidade: "Porto Alegre",
                cep: "11111111",
                uf: "SC"
            },
            status: false
        }
    ]

    localStorage.setItem("proprietarios", JSON.stringify(proprietarios))
}

function iniciar_banco() {
    iniciar_banco_proprietarios()
}
