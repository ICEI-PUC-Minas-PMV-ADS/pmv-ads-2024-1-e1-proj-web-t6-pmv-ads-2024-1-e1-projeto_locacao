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

    if (id_value == "") {
        id_value = null
    }

    if (nome_value == "") {
        nome_value = null
    }

    if (cpf_value == "") {
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

    if (proprietarios.length > 0) {
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

        show_snackbar('body #snackbar_success', proprietarios.length == 1 ? "Um proprietário foi encontrado!" : `Foram encontrados ${proprietarios.length} proprietários!`)
    } else {
        show_snackbar('body #snackbar_error', 'Nenhum proprietário foi encontrado!')
    }
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

function abrir_popup_dados_proprietario(e) {
    let dados = JSON.parse(e.dataset.button)

    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_dados_proprietario")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
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
                        <input type="text" name="nome" id="nome_prop" class="inputSuccess" value="${dados.nome}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_cpf">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf_prop" class="inputSuccess" onkeyup="return mascara_cpf(this)" onblur="return verifica_cpf(this)" maxlength="14" placeholder="xxx.xxx.xxx-xx" value="${formatar_cpf(dados.cpf)}" readonly>
                    </div>
                    <div class="div_estado_civil">
                        <label for="estado_civil">ESTADO CIVIL</label>
                        <select name="estado_civil" id="estado_civil_prop" class="selectSuccess" onblur="return set_input_success(this)" disabled="true">
                            <option value="vazio">-</option>
                            <option value="casado" ${dados.estado_civil == "casado" ? "selected" : ""}>Casado</option>
                            <option value="solteiro" ${dados.estado_civil == "solteiro" ? "selected" : ""}>Solteiro</option>
                        </select>
                    </div>
                </div>
                <p>ENDEREÇO</p>
                <hr>
                <div class="endereco">
                    <div class="div_tipo_logradouro">
                        <label for="tipo_logradouro">TIPO LOGRADOURO</label>
                        <select name="tipo_logradouro" id="tipo_logradouro_prop" class="selectSuccess" onblur="return set_input_success(this)" disabled="true">
                            <option value="vazio">-</option>
                            <option value="avenida" ${dados.endereco.tipo_logradouro == "avenida" ? "selected" : ""}>Avenida</option>
                            <option value="praça" ${dados.endereco.tipo_logradouro == "praça" ? "selected" : ""}>Praça</option>
                            <option value="rua" ${dados.endereco.tipo_logradouro == "rua" ? "selected" : ""}>Rua</option>
                        </select>
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO</label>
                        <input type="text" name="logradouro" id="logradouro_prop" class="inputSuccess" value="${dados.endereco.logradouro}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO</label>
                        <input type="text" name="numero" id="numero_prop" class="inputSuccess" value="${dados.endereco.numero}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_prop" class="inputSuccess" value="${dados.endereco.complemento}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO</label>
                        <input type="text" name="bairro" id="bairro_prop" class="inputSuccess" value="${dados.endereco.bairro}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE</label>
                        <input type="text" name="cidade" id="cidade_prop" class="inputSuccess" value="${dados.endereco.cidade}" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP</label>
                        <input type="text" name="cep" id="cep_prop" class="inputSuccess" value="${formatar_cep(dados.endereco.cep)}" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF</label>
                        <input type="text" name="uf" id="uf_prop" class="inputSuccess" value="${dados.endereco.uf}" onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)" readonly>
                    </div>
                </div>
                <p>CONTATO</p>
                <hr>
                <div class="contato">
                    <div class="div_telefone">
                        <label for="telefone">TELEFONE</label>
                        <input type="text" name="telefone" id="telefone_prop" class="inputSuccess" onkeyup="return mascara_telefone(this)" maxlength="15" onblur="return set_input_success(this)" placeholder="(xx) xxxxx-xxxx" value="${formatar_telefone(dados.telefone)}" readonly>
                    </div>
                    <div class="div_email">
                        <label for="email">E-MAIL</label>
                        <input type="text" name="email" id="email_prop" class="inputSuccess" value="${dados.email}" onblur="return set_input_success(this)" readonly>
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
            <div id="snackbar_success" class="success"></div>
            <div id="snackbar_error" class="error"></div>
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
    document.getElementById("tipo_logradouro_prop").disabled = false
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

function salvar_dados_proprietario() {
    
    let id = parseInt(document.querySelector("#popup_dados_proprietario h1").innerHTML.split(" - ")[1])
    let nome_element = document.getElementById("nome_prop")
    let cpf_element = document.getElementById("cpf_prop")
    let estado_civil_element = document.getElementById("estado_civil_prop")
    let tipo_logradouro_element = document.getElementById("tipo_logradouro_prop")
    let logradouro_element = document.getElementById("logradouro_prop")
    let numero_element = document.getElementById("numero_prop")
    let complemento_element = document.getElementById("complemento_prop")
    let bairro_element = document.getElementById("bairro_prop")
    let cidade_element = document.getElementById("cidade_prop")
    let cep_element = document.getElementById("cep_prop")
    let uf_element = document.getElementById("uf_prop")
    let telefone_element = document.getElementById("telefone_prop")
    let email_element = document.getElementById("email_prop")

    let nome = nome_element.value == "" ? null : nome_element.value
    let cpf = cpf_element.value == "" || cpf_element.value.length < 14 ? null : cpf_element.value.replace(/\D/g, '')
    let estado_civil = estado_civil_element.value == "vazio" ? null : estado_civil_element.value
    let tipo_logradouro = tipo_logradouro_element.value == "vazio" ? null : tipo_logradouro_element.value
    let logradouro = logradouro_element.value == "" ? null : logradouro_element.value
    let numero = numero_element.value == "" ? null : numero_element.value
    let complemento = complemento_element.value
    let bairro = bairro_element.value == "" ? null : bairro_element.value
    let cidade = cidade_element.value == "" ? null : cidade_element.value
    let cep = cep_element.value == "" ? null : cep_element.value
    let uf = uf_element.value == "" ? null : uf_element.value
    let telefone = telefone_element.value == "" ? null : telefone_element.value
    let email = email_element.value == "" ? null : email_element.value

    let vericacao = [
        {
            value: nome,
            element: nome_element,
            messageError: "O nome não foi informado.",
            status: false
        },
        {
            value: cpf,
            element: cpf_element,
            messageError: "O CPF não foi informado.",
            status: false
        },
        {
            value: estado_civil,
            element: estado_civil_element,
            messageError: "O estado civil não foi informado.",
            status: false
        },
        {
            value: tipo_logradouro,
            element: tipo_logradouro_element,
            messageError: "O tipo de logradouro não foi informado.",
            status: false
        },
        {
            value: logradouro,
            element: logradouro_element,
            messageError: "O logradouro não foi informado.",
            status: false
        },
        {
            value: numero,
            element: numero_element,
            messageError: "O número não foi informado.",
            status: false
        },
        {
            value: bairro,
            element: bairro_element,
            messageError: "O bairro não foi informado.",
            status: false
        },
        {
            value: cidade,
            element: cidade_element,
            messageError: "A cidade não foi informado.",
            status: false
        },
        {
            value: cep,
            element: cep_element,
            messageError: "O CEP não foi informado.",
            status: false
        },
        {
            value: uf,
            element: uf_element,
            messageError: "A UF não foi informado.",
            status: false
        },
        {
            value: telefone,
            element: telefone_element,
            messageError: "O telefone não foi informado.",
            status: false
        },
        {
            value: email,
            element: email_element,
            messageError: "O e-mail não foi informado.",
            status: false
        },
    ]

    for (let i = 0; i < vericacao.length; i++) {
        if (vericacao[i].value == null) {
            vericacao[i].element.className = vericacao[i].element.tagName == "INPUT" ? "inputError" : "selectError"
            show_snackbar("#popup_dados_proprietario #snackbar_error", vericacao[i].messageError)
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

    if(pode_salvar){
        let buttons = document.querySelector("#popup_dados_proprietario .buttons")
        buttons.removeChild(buttons.children[1])

        buttons.innerHTML += `
            <button onclick="alterar_dados_proprietario()">
                <img class="icon" src="../scr/icones/icon_alterar.png" alt="">
                ALTERAR
            </button>
        `

        nome_element.readOnly = true
        cpf_element.readOnly = true
        estado_civil.disabled = true
        tipo_logradouro_element.readOnly = true
        logradouro_element.readOnly = true
        numero_element.readOnly = true
        complemento_element.readOnly = true
        bairro_element.readOnly = true
        cidade_element.readOnly = true
        cep_element.readOnly = true
        uf_element.readOnly = true
        telefone_element.readOnly = true
        email_element.readOnly = true

        proprietariosList = JSON.parse(localStorage.getItem("proprietarios"))

        proprietariosList = proprietariosList.map((proprietario) => {
            if (proprietario.id == id) {
                proprietario.nome = nome
                proprietario.cpf = cpf
                proprietario.estado_civil = estado_civil
                proprietario.telefone = telefone
                proprietario.email = email
                proprietario.endereco.tipo_logradouro = tipo_logradouro
                proprietario.endereco.logradouro = logradouro
                proprietario.endereco.numero = numero
                proprietario.endereco.complemento = complemento
                proprietario.endereco.bairro = bairro
                proprietario.endereco.cidade = cidade
                proprietario.endereco.cep = cep
                proprietario.endereco.uf = uf

                return proprietario
            }

            return proprietario
        })

        localStorage.setItem("proprietarios", JSON.stringify(proprietariosList))

        filtrar_proprietarios()
    }
}

function abrir_popup_novo_proprietario() {
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_novo_proprietario")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
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
                        <label for="nome">NOME*</label>
                        <input type="text" name="nome" id="nome_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_cpf">
                        <label for="cpf">CPF*</label>
                        <input type="text" name="cpf" id="cpf_prop_novo" class="inputSuccess" onkeyup="return mascara_cpf(this)" onblur="return verifica_cpf(this)" maxlength="14" placeholder="xxx.xxx.xxx-xx">
                    </div>
                    <div class="div_estado_civil">
                        <label for="estado_civil">ESTADO CIVIL*</label>
                        <select name="estado_civil" id="estado_civil_prop_novo" class="selectSuccess" onblur="return set_input_success(this)">
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
                        <label for="tipo_logradouro">TIPO LOGRADOURO*</label>
                        <select name="tipo_logradouro" id="tipo_logradouro_prop_novo" class="selectSuccess" onblur="return set_input_success(this)">
                            <option value="vazio">-</option>
                            <option value="avenida">Avenida</option>
                            <option value="praça">Praça</option>
                            <option value="rua">Rua</option>
                        </select>
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO*</label>
                        <input type="text" name="logradouro" id="logradouro_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO*</label>
                        <input type="text" name="numero" id="numero_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO*</label>
                        <input type="text" name="bairro" id="bairro_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE*</label>
                        <input type="text" name="cidade" id="cidade_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP*</label>
                        <input type="text" name="cep" id="cep_prop_novo" class="inputSuccess" placeholder="xxxxx-xxx" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF*</label>
                        <input type="text" name="uf" id="uf_prop_novo" class="inputSuccess" onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)">
                    </div>
                </div>
                <p>CONTATO</p>
                <hr>
                <div class="contato">
                    <div class="div_telefone">
                        <label for="telefone">TELEFONE*</label>
                        <input type="text" name="telefone" id="telefone_prop_novo" class="inputSuccess" onkeyup="return mascara_telefone(this)" maxlength="15" placeholder="(xx) xxxxx-xxxx" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_email">
                        <label for="email">E-MAIL*</label>
                        <input type="text" name="email" id="email_prop_novo" class="inputSuccess" onblur="return set_input_success(this)">
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
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("popup_novo_proprietario")

    popup.showModal()
}

function fechar_popup_novo_proprietario() {
    let popup = document.getElementById('popup_novo_proprietario')

    popup.close()
}

function novo_id() {
    let list_id = JSON.parse(localStorage.getItem("proprietarios")).map((proprietario) => proprietario.id)
    let max_id = Math.max(...list_id)

    return max_id + 1
}

function salvar_novo_proprietario() {
    let nome_element = document.getElementById("nome_prop_novo")
    let cpf_element = document.getElementById("cpf_prop_novo")
    let estado_civil_element = document.getElementById("estado_civil_prop_novo")
    let tipo_logradouro_element = document.getElementById("tipo_logradouro_prop_novo")
    let logradouro_element = document.getElementById("logradouro_prop_novo")
    let numero_element = document.getElementById("numero_prop_novo")
    let complemento_element = document.getElementById("complemento_prop_novo")
    let bairro_element = document.getElementById("bairro_prop_novo")
    let cidade_element = document.getElementById("cidade_prop_novo")
    let cep_element = document.getElementById("cep_prop_novo")
    let uf_element = document.getElementById("uf_prop_novo")
    let telefone_element = document.getElementById("telefone_prop_novo")
    let email_element = document.getElementById("email_prop_novo")

    let nome = nome_element.value == "" ? null : nome_element.value
    let cpf = cpf_element.value == "" || cpf_element.value.length < 14 ? null : cpf_element.value.replace(/\D/g, '')
    let estado_civil = estado_civil_element.value == "vazio" ? null : estado_civil_element.value
    let tipo_logradouro = tipo_logradouro_element.value == "vazio" ? null : tipo_logradouro_element.value
    let logradouro = logradouro_element.value == "" ? null : logradouro_element.value
    let numero = numero_element.value == "" ? null : numero_element.value
    let complemento = complemento_element.value
    let bairro = bairro_element.value == "" ? null : bairro_element.value
    let cidade = cidade_element.value == "" ? null : cidade_element.value
    let cep = cep_element.value == "" ? null : cep_element.value
    let uf = uf_element.value == "" ? null : uf_element.value
    let telefone = telefone_element.value == "" ? null : telefone_element.value
    let email = email_element.value == "" ? null : email_element.value

    // console.log(estado_civil)

    let vericacao = [
        {
            value: nome,
            element: nome_element,
            messageError: "O nome não foi informado.",
            status: false
        },
        {
            value: cpf,
            element: cpf_element,
            messageError: "O CPF não foi informado.",
            status: false
        },
        {
            value: estado_civil,
            element: estado_civil_element,
            messageError: "O estado civil não foi informado.",
            status: false
        },
        {
            value: tipo_logradouro,
            element: tipo_logradouro_element,
            messageError: "O tipo de logradouro não foi informado.",
            status: false
        },
        {
            value: logradouro,
            element: logradouro_element,
            messageError: "O logradouro não foi informado.",
            status: false
        },
        {
            value: numero,
            element: numero_element,
            messageError: "O número não foi informado.",
            status: false
        },
        {
            value: bairro,
            element: bairro_element,
            messageError: "O bairro não foi informado.",
            status: false
        },
        {
            value: cidade,
            element: cidade_element,
            messageError: "A cidade não foi informado.",
            status: false
        },
        {
            value: cep,
            element: cep_element,
            messageError: "O CEP não foi informado.",
            status: false
        },
        {
            value: uf,
            element: uf_element,
            messageError: "A UF não foi informado.",
            status: false
        },
        {
            value: telefone,
            element: telefone_element,
            messageError: "O telefone não foi informado.",
            status: false
        },
        {
            value: email,
            element: email_element,
            messageError: "O e-mail não foi informado.",
            status: false
        },
    ]

    for (let i = 0; i < vericacao.length; i++) {
        if (vericacao[i].value == null) {
            vericacao[i].element.className = vericacao[i].element.tagName == "INPUT" ? "inputError" : "selectError"
            show_snackbar("#popup_novo_proprietario #snackbar_error", vericacao[i].messageError)
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
        show_snackbar("#popup_novo_proprietario #snackbar_success", "Novo proprietário salvo com sucesso!")

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
}

function iniciar_banco_proprietarios() {
    let proprietarios = [
        {
            id: 1,
            nome: "Pedro Francis Maia Coelho",
            cpf: "99999999999",
            estado_civil: "casado",
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
            estado_civil: "solteiro",
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
            estado_civil: "solteiro",
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

function show_snackbar(element, message) {
    var snackbar = document.querySelector(element);
    snackbar.innerHTML = ""
    snackbar.innerHTML += `<p>${message}</p>`
    snackbar.className = "snackbar show";

    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 5000);
}

function formatar_cpf(cpf) {
    var cpfPattern = cpf.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')

    return cpfPattern
}

function mascara_cpf(e) {

    e.value = formatar_cpf(e.value)

}

function formatar_cep(cep) {
    var cpfPattern = cep.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')

    return cpfPattern
}

function mascara_cep(e) {

    e.value = formatar_cep(e.value)

}

function formatar_telefone(telefone) {
    var telefone_tratado = telefone.replace(/\D/g, '')
    
    if (telefone_tratado.length > 10) {
        var telefonePattern = telefone_tratado
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
    } else {
        var telefonePattern = telefone_tratado
            
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})(\d)/, '$1')
    }

    return telefonePattern
}

function mascara_telefone(e) {
    e.value = formatar_telefone(e.value)
}

function mascara_uf(e) {
    var value = e.value

    e.value = value.toUpperCase()
}

function verifica_cpf(e) {
    var value = e.value

    let id_popup = e.parentElement.parentElement.parentElement.parentElement.id

    if (value.length < 14) {
        e.className = 'inputError'
        show_snackbar(`#${id_popup} #snackbar_error`, 'O CPF informado não é válido!')
    } else {
        e.className = 'inputSuccess'
    }
}

function set_input_success(e) {
    e.className = e.tagName == "INPUT" ? "inputSuccess" : "selectSuccess"
}