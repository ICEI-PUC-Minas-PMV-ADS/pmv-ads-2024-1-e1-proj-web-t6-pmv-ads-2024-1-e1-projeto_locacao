
// MARCAÇÃO DINÂMICA POPUP FILTRAR STATUS
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




// MARCAÇÃO DINÂMICA POPUP FILTRAR SITUAÇÃO (15/05_03)
function situacao_todos() {
    let situacao_todos = document.getElementById("situacao_todos")
let situacao_adimplente = document.getElementById("situacao_adimplente")
    let situacao_inadimplente = document.getElementById("situacao_inadimplente")

    if (situacao_todos.checked) {
        situacao_adimplente.checked = true
        situacao_inadimplente.checked = true
    } else {
        situacao_adimplente.checked = false
        situacao_inadimplente.checked = false
    }
}

function situacao_adimplente() {
    let situacao_todos = document.getElementById("situacao_todos")
    let situacao_adimplente = document.getElementById("situacao_adimplente")
    let situacao_inadimplente = document.getElementById("situacao_inadimplente")

    if (situacao_adimplente.checked) {
        if (situacao_inadimplente.checked) {
            situacao_todos.checked = true
        }
    } else {
        if (situacao_todos.checked == true) {
            situacao_todos.checked = false
        }
    }
}

function situacao_inadimplente() {
    let situacao_todos = document.getElementById("situacao_todos")
    let situacao_adimplente = document.getElementById("situacao_adimplente")
    let situacao_inadimplente = document.getElementById("situacao_inadimplente")

    if (situacao_inadimplente.checked) {
        if (situacao_adimplente.checked) {
            situacao_todos.checked = true
        }
    } else {
        if (situacao_todos.checked == true) {
            situacao_todos.checked = false
        }
    }
}


// BANCO DE DADOS DE LOCATÁRIOS

function locatarios_init() {
    localStorage.clear()

    iniciar_banco()

    locatarios(null, null, null, true, null)
}


function iniciar_banco_locatarios() {
    let locatarios = [
        {
            id: 1,
            nome: "Locatário 01",
            cpf: "19999999999",
            estado_civil: "solteiro",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "rua",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: true,
            situacao: false
        },
        {
            id: 2,
            nome: "Locatário 02",
            cpf: "29999999999",
            estado_civil: "casado",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "praça",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: true,
            situacao: true
        },
        {
            id: 3,
            nome: "Locatário 03",
            cpf: "39999999999",
            estado_civil: "solteiro",
            telefone: "31999999999",
            email: "pedro@exemplo.com",
            endereco: {
                tipo_logradouro: "avenida",
                logradouro: "Afonço Pena",
                numero: "1",
                complemento: "A",
                bairro: "Centro",
                cidade: "Belo Horizonte",
                cep: "00000000",
                uf: "MG"
            },
            status: false,
            situacao: false
        }

    ]
    localStorage.setItem("locatarios", JSON.stringify(locatarios))
}

function iniciar_banco() {
    iniciar_banco_locatarios()
}

// Funcão para povoar a tela com o banco de dados
function locatarios(id, nome, cpf, status, situacao) {
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



// 01_15/05 > Executa o Filtro Inicial/

    let table_locatarios = document.getElementById('table_list')

    let locatarios = JSON.parse(localStorage.getItem("locatarios"))

    if (id_value != null) {
        locatarios = locatarios.filter((locatario) => locatario.id == parseInt(id))
    }

    if (nome_value != null) {
        locatarios = locatarios.filter((locatario) => locatario.nome.toUpperCase().includes(nome.toUpperCase()))
    }

    if (cpf_value != null) {
        locatarios = locatarios.filter((locatario) => locatario.cpf == cpf)
    }

    if (status != null) {
        if (status) {
            locatarios = locatarios.filter((locatario) => locatario.status == status)
        } else {
            locatarios = locatarios.filter((locatario) => locatario.status == status)
        }
    }

    if (situacao != null) {
        if (situacao) {
            locatarios = locatarios.filter((locatario) => locatario.situacao == situacao)
        } else {
            locatarios = locatarios.filter((locatario) => locatario.situacao == situacao)
        }
    }




// Para cada locatário inclui a respectiva div na tela
    if(locatarios.length > 0) {
        locatarios.map((locatario) => {
            dados_locatario = JSON.stringify(locatario) 

            table_locatarios.innerHTML += `
            <div class="div_table_row"> 
                <div class="table_icon">
                    <img src="../src/icones/icon_locatarios_selecionado.png" alt="" class="icon">
                </div>
                <div class="table_id">
                    ${locatario.id}
                </div>
                <div class="table_name">
                    ${locatario.nome}    
                </div>
                <div class="table_telefone">
                    ${locatario.telefone}
                </div>
                <div class="table_email">
                    ${locatario.email}
                </div>
                <div class="table_status">
                    <div class=${locatario.status ? "status_active" : "status_inactive"}>
                        <p>
                            ${locatario.status ? "Ativo" : "Inativo"}
                        </p>
                    </div>
                </div>

                <div class="table_status">
                    <div class=${locatario.situacao ? "status_active" : "status_inactive"}>
                        <p>
                            ${locatario.situacao ? "Adimplente" : "Inadimplente"}
                        </p>
                    </div>
                </div>


                <div class="table_button">
                    <buttom class="open_button" data-button='${dados_locatario}' onclick=" return abrir_popup_dados_locatario(this)"><img src="../src/icones/icon_ver_dados.png" alt="" class="open_icon"></buttom>
                </div>
            </div>    
            <hr class="divisor">        
            `                       
        })
    } else {
        show_snackbar("body #snackbar_error", "Nenhum locatário foi encontrado!")
    }

}


// 02_15/05 > Executa o Filtro Inicial/
// POPUP FILTRAR LOCATÁRIO
function abrir_popup_filtrar_locatario() {
    let popup = document.getElementById('popup_filtrar')

    popup.showModal()
}

function fechar_popup_filtrar() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}

function filtrar_locatario() {
    let popup = document.getElementById('popup_filtrar')


    let id = document.getElementById("id_filtro").value
    console.log(id)
    let nome = document.getElementById("nome_filtro").value
    console.log(nome)
    let cpf = document.getElementById("cpf_filtro").value
    console.log(cpf)    
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
    console.log(status)


    let situacao_todos = document.getElementById("situacao_todos").checked ? document.getElementById("situacao_todos").value : null
    let situacao_adimplente = document.getElementById("situacao_adimplente").checked ? document.getElementById("situacao_adimplente").value : null
    let situacao_inadimplente = document.getElementById("situacao_inadimplente").checked ? document.getElementById("situacao_inadimplente").value : null

    let situacao
    

    if (situacao_todos == "todos") {
        situacao = null
    } else {
        if (situacao_adimplente == "adimplente") {
            situacao = true
        }
        if (situacao_inadimplente == "inadimplente") {
            situacao = false
        }
    }
    console.log(situacao)

    locatarios(id, nome, cpf, status, situacao)
    popup.close()
}

// MENSAGEM DE ERRO
function show_snackbar(element, message) {
    var snackbar = document.querySelector(element);
    snackbar.innerHTML = ""
    snackbar.innerHTML += `<p>${message}</p>`
    snackbar.className = "snackbar show";

    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 5000);
}


// POPUP DADOS LOCATÁRIO
function abrir_popup_dados_locatario(e) {
    let dados_locatario = JSON.parse(e.dataset.button)
    let body = document.body
    let verifica_popups = document.querySelectorAll("#popup_dados_locatario")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }
 
    body.innerHTML += `
    <dialog id="popup_dados_locatario" class="popup">
    <div>
        <h1>Dados Locatário - ${dados_locatario.id}</h1>
        <p><br>DADOS PESSOAIS</p>
        <hr>
        <section class="section_dados_pessoais">
            <div class="div_nome">
                <label for="nome">NOME</label>
                <input type="text" name="nome" id="nome_dados" class="inputSuccess" value="${dados_locatario.nome}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_cpf">
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf_dados" class="inputSuccess" onkeyup="return mascara_cpf(this)" onblur="return verifica_cpf(this)" maxlength="14" placeholder="xxx.xxx.xxx-xx" value="${formatar_cpf(dados_locatario.cpf)}" readonly>
                </div>
            <div class="div_estado_civil">
                <label for="estado_civil">ESTADO CIVIL</label>
                <select name="estado_civil" id="estado_civil_dados" class="selectSuccess" onblur="return set_input_success(this)" disabled="true">
                    <option value="vazio">-</option>
                    <option value="casado" ${dados_locatario.estado_civil == "casado" ? "selected" : ""}>Casado</option>
                    <option value="solteiro" ${dados_locatario.estado_civil == "solteiro" ? "selected" : ""}>Solteiro</option>
                </select>
            </div>
        </section>
        <p><br>ENDEREÇO</p>
        <hr>
        <section class="section_endereco">
            <div class="div_tipo_logradouro">
                <label for="tipo_logradouro">TIPO LOGRADOURO</label>
                <select name="tipo_logradouro" id="tipo_logradouro_dados" class="selectSuccess" onblur="return set_input_success(this)" disabled="true">
                    <option value="vazio">-</option>
                    <option value="avenida" ${dados_locatario.endereco.tipo_logradouro == "avenida" ? "selected" : ""}>Avenida</option>
                    <option value="praça" ${dados_locatario.endereco.tipo_logradouro == "praça" ? "selected" : ""}>Praça</option>
                    <option value="rua" ${dados_locatario.endereco.tipo_logradouro == "rua" ? "selected" : ""}>Rua</option>
                </select>
            </div>
            <div class="div_logradouro">
                <label for="logradouro">LOGRADOURO</label>
                <input type="text" name="logradouro" id="logradouro_dados" class="inputSuccess" value="${dados_locatario.endereco.logradouro}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_numero">
                <label for="numero">NÚMERO</label>
                <input type="text" name="numero" id="numero_dados" class="inputSuccess" value="${dados_locatario.endereco.numero}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_complemento">
                <label for="complemento">COMPLEMENTO</label>
                <input type="text" name="complemento" id="complemento_dados" class="inputSuccess" value="${dados_locatario.endereco.complemento}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_bairro">
                <label for="bairro">BAIRRO</label>
                <input type="text" name="bairro" id="bairro_dados" class="inputSuccess" value="${dados_locatario.endereco.bairro}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_cidade">
                <label for="cidade">CIDADE</label>
                <input type="text" name="cidade" id="cidade_dados" class="inputSuccess" value="${dados_locatario.endereco.cidade}" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_cep">
                <label for="cep">CEP</label>
                <input type="text" name="cep" id="cep_dados" class="inputSuccess" value="${formatar_cep(dados_locatario.endereco.cep)}" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)" readonly>
            </div>
            <div class="div_uf">
                <label for="uf">UF</label>
                <input type="text" name="uf" id="uf_dados" class="inputSuccess" value="${dados_locatario.endereco.uf}" onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)" readonly>
            </div>
        </section>
        <p><br>CONTATO</p>
        <hr>
            <section class="section_contato">
                    <div class="div_telefone">
                    <label for="telefone">TELEFONE</label>
                    <input type="text" name="telefone" id="telefone_dados" class="inputSuccess" onkeyup="return mascara_telefone(this)" maxlength="15" onblur="return set_input_success(this)" placeholder="(xx) xxxxx-xxxx" value="${formatar_telefone(dados_locatario.telefone)}" readonly>
                </div>
                <div class="div_email">
                    <label for="email">E-MAIL</label>
                    <input type="text" name="email" id="email_dados" class="inputSuccess" value="${dados_locatario.email}" onblur="return set_input_success(this)" readonly>
                </div>
            </section>
            <div class="buttons">
                <button onclick="fechar_popup_dados_locatario()">
                    <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                    VOLTAR
                </button>
                <button onclick="alterar_dados_locatario()">
                    <img class="icon" src="../src/icones/icon_alterar.png" alt="">
                    ALTERAR
                </button>
            </div>
        </div>
        
        <div id="snackbar_success" class="success"></div>
        <div id="snackbar_error" class="error"></div>
    </dialog>
    `
    let popup = document.getElementById("popup_dados_locatario")    
    
    popup.showModal()
}

// ALTERAR LOCATARIO - 15/05-08
function alterar_dados_locatario() {

    let buttons = document.querySelector("#popup_dados_locatario .buttons")

    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="salvar_dados_locatario()">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="">
            SALVAR
        </button>
    `

    document.getElementById("nome_dados").readOnly = false
    document.getElementById("cpf_dados").readOnly = false
    document.getElementById("estado_civil_dados").disabled = false
    document.getElementById("tipo_logradouro_dados").disabled = false
    document.getElementById("logradouro_dados").readOnly = false
    document.getElementById("numero_dados").readOnly = false
    document.getElementById("complemento_dados").readOnly = false
    document.getElementById("bairro_dados").readOnly = false
    document.getElementById("cidade_dados").readOnly = false
    document.getElementById("cep_dados").readOnly = false
    document.getElementById("uf_dados").readOnly = false
    document.getElementById("telefone_dados").readOnly = false
    document.getElementById("email_dados").readOnly = false
}


// SALVAR ALTERAÇÕES - 15/05-09

function salvar_dados_locatario() {
    
    let id = parseInt(document.querySelector("#popup_dados_locatario h1").innerHTML.split(" - ")[1])
    let nome_element = document.getElementById("nome_dados")
    let cpf_element = document.getElementById("cpf_dados")
    let estado_civil_element = document.getElementById("estado_civil_dados")
    let tipo_logradouro_element = document.getElementById("tipo_logradouro_dados")
    let logradouro_element = document.getElementById("logradouro_dados")
    let numero_element = document.getElementById("numero_dados")
    let complemento_element = document.getElementById("complemento_dados")
    let bairro_element = document.getElementById("bairro_dados")
    let cidade_element = document.getElementById("cidade_dados")
    let cep_element = document.getElementById("cep_dados")
    let uf_element = document.getElementById("uf_dados")
    let telefone_element = document.getElementById("telefone_dados")
    let email_element = document.getElementById("email_dados")

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
            show_snackbar("#popup_dados_locatario #snackbar_error", vericacao[i].messageError)
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
        let buttons = document.querySelector("#popup_dados_locatario .buttons")
        buttons.removeChild(buttons.children[1])

        buttons.innerHTML += `
            <button onclick="alterar_dados_locatario()">
                <img class="icon" src="../src/icones/icon_alterar.png" alt="">
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

        locatariosList = JSON.parse(localStorage.getItem("locatarios"))

        locatariosList = locatariosList.map((locatario) => {
            if (locatario.id == id) {
                locatario.nome = nome
                locatario.cpf = cpf
                locatario.estado_civil = estado_civil
                locatario.telefone = telefone
                locatario.email = email
                locatario.endereco.tipo_logradouro = tipo_logradouro
                locatario.endereco.logradouro = logradouro
                locatario.endereco.numero = numero
                locatario.endereco.complemento = complemento
                locatario.endereco.bairro = bairro
                locatario.endereco.cidade = cidade
                locatario.endereco.cep = cep
                locatario.endereco.uf = uf

                return locatario
            }

            return locatario
        })

        localStorage.setItem("locatarios", JSON.stringify(locatariosList))

        filtrar_locatario()
    }
}


function fechar_popup_dados_locatario() {
    let popup = document.getElementById('popup_dados_locatario')

    popup.close()
}


// FUNÇÕES DE VALIDAÇÃO DE ENTRADA DE DADOS - 15.05.07
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


// 20.05.2024
// POPUP CADASTRAR NOVO LOCATÁRIO
function abrir_popup_cadastrar_locatario() {
    let body = document.querySelector("body")
    
    let verifica_popups = document.querySelectorAll("#popup_cadastrar")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }
 
    body.innerHTML += 
    `
        <dialog id="popup_cadastrar" class="popup">
        <div>
            <h1>Novo Locatário</h1>
            <p><br>DADOS PESSOAIS</p>
            <hr>
            <section class="section_dados_pessoais">
                <div class="div_nome">
                    <label for="nome">NOME</label>
                    <input type="text" name="nome" id="nome_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_cpf">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf_locat_novo" class="inputSuccess" onkeyup="return mascara_cpf(this)" onblur="return verifica_cpf(this)" maxlength="14" placeholder="xxx.xxx.xxx-xx">
                </div>
                <div class="div_estado_civil">
                    <label for="estado_civil">ESTADO CIVIL</label>
                    <select name="estado_civil" id="estado_civil_locat_novo" class="selectSuccess" onblur="return set_input_success(this)">
                            <option value="vazio">-</option>
                            <option value="casado">Casado</option>
                            <option value="solteiro">Solteiro</option>
                    </select>
                </div>
            </section>
            <p><br>ENDEREÇO</p>
            <hr>
            <section class="section_endereco">
                <div class="div_tipo_logradouro">
                    <label for="tipo_logradouro">TIPO LOGRADOURO</label>
                    <select name="tipo_logradouro" id="tipo_logradouro_locat_novo" class="selectSuccess" onblur="return set_input_success(this)">
                        <option value="vazio">-</option>
                        <option value="avenida">Avenida</option>
                        <option value="praça">Praça</option>
                        <option value="rua">Rua</option>
                    </select>
                </div>
                <div class="div_logradouro">
                    <label for="logradouro">LOGRADOURO</label>
                    <input type="text" name="logradouro" id="logradouro_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_numero">
                    <label for="numero">NÚMERO</label>
                    <input type="text" name="numero" id="numero_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_complemento">
                    <label for="complemento">COMPLEMENTO</label>
                    <input type="text" name="complemento" id="complemento_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_bairro">
                    <label for="bairro">BAIRRO</label>
                    <input type="text" name="bairro" id="bairro_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_cidade">
                    <label for="cidade">CIDADE</label>
                    <input type="text" name="cidade" id="cidade_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                </div>
                <div class="div_cep">
                    <label for="cep">CEP</label>
                    <input type="text" name="cep" id="cep_locat_novo" class="inputSuccess" placeholder="xxxxx-xxx" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)">
                </div>
                <div class="div_uf">
                    <label for="uf">UF</label>
                    <input type="text" name="uf" id="uf_locat_novo" class="inputSuccess"  onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)">
                </div>
            </section>
            <p><br>CONTATO</p>
            <hr>
                <section class="section_contato">
                        <div class="div_telefone">
                        <label for="telefone">TELEFONE</label>
                        <input type="text" name="telefone" id="telefone_locat_novo" class="inputSuccess" onkeyup="return mascara_telefone(this)" maxlength="15" placeholder="(xx) xxxxx-xxxx" onblur="return set_input_success(this)">
                            
                    </div>
                    <div class="div_email">
                        <label for="email">E-MAIL</label>
                        <input type="text" name="email" id="email_locat_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                </section>
                <div class="buttons">
                    <button onclick="fechar_popup_dados_cadastrar()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="salvar_novo_locatario()">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
            
            <div id="snackbar_success" class="success"></div>
            <div id="snackbar_error" class="error"></div>
        </dialog>
    `
 
    let popup = document.getElementById('popup_cadastrar')

    popup.showModal()

}


function fechar_popup_dados_cadastrar() {
    let popup = document.getElementById('popup_cadastrar')

    popup.close()
}


// CRIAR NOVO ID
function novo_id() {
    let list_id = JSON.parse(localStorage.getItem("locatarios")).map((locatario) => locatario.id)
    let max_id = Math.max(...list_id)

    return max_id + 1
}


function salvar_novo_locatario() {
    let nome_element = document.getElementById("nome_locat_novo")
    let cpf_element = document.getElementById("cpf_locat_novo")
    let estado_civil_element = document.getElementById("estado_civil_locat_novo")
    let tipo_logradouro_element = document.getElementById("tipo_logradouro_locat_novo")
    let logradouro_element = document.getElementById("logradouro_locat_novo")
    let numero_element = document.getElementById("numero_locat_novo")
    let complemento_element = document.getElementById("complemento_locat_novo")
    let bairro_element = document.getElementById("bairro_locat_novo")
    let cidade_element = document.getElementById("cidade_locat_novo")
    let cep_element = document.getElementById("cep_locat_novo")
    let uf_element = document.getElementById("uf_locat_novo")
    let telefone_element = document.getElementById("telefone_locat_novo")
    let email_element = document.getElementById("email_locat_novo")

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
            show_snackbar("#popup_cadastrar #snackbar_error", vericacao[i].messageError)
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
        show_snackbar("body #snackbar_success", "Novo locatário salvo com sucesso!")
        let jsonNovoLocatario = {
            id: novo_id(),
            nome: nome,
            cpf: cpf,
            estado_civil: estado_civil,
            telefone: telefone,
            email: email,
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
            status: false,
            situacao: true

        }
        
        let locatariosList = JSON.parse(localStorage.getItem("locatarios"))
        locatariosList.push(jsonNovoLocatario)

        localStorage.setItem("locatarios", JSON.stringify(locatariosList))

        locatarios(novo_id() -1, null, null, null, null)

        fechar_popup_cadastrar_locatario()
    }
}


function fechar_popup_cadastrar_locatario() {
    let popup = document.getElementById('popup_cadastrar')

    popup.close()
}
