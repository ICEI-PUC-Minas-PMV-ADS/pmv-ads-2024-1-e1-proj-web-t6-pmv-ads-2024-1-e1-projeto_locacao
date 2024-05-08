function requisicao_init() {
    localStorage.clear()

    iniciar_banco()

    requisicoes(null, null, null, true)
}

function requisicoes(id, requisitante, tipo, status) {
    var node = document.getElementById('table_list')
    node.innerHTML = ""

    let id_value = id
    let requisitante_value = requisitante
    let tipo_value = tipo

    if (id_value == "") {
        id_value = null
    }

    if (requisitante_value == "") {
        requisitante_value = null
    }

    if (tipo_value == "Todos") {
        tipo_value = null
    }

    console.log(id_value)
    console.log(requisitante_value)
    console.log(tipo_value)
    console.log(status)

    let table = document.getElementById('table_list')

    let requisicoes = JSON.parse(localStorage.getItem("requisicoes"))

    if (id_value != null) {
        requisicoes = requisicoes.filter((requisicao) => requisicao.id == parseInt(id))
    }

    if (requisitante_value != null) {
        requisicoes = requisicoes.filter((requisicao) => requisicao.requisitante.toUpperCase().includes(requisitante_value.toUpperCase()))
    }

    if (tipo_value != null) {
        requisicoes = requisicoes.filter((requisicao) => requisicao.tipo == tipo_value)
    }

    if (status != null) {
        if (!status) {
            requisicoes = requisicoes.filter((requisicao) => requisicao.status_atendimento == !status)
        } else {
            requisicoes = requisicoes.filter((requisicao) => requisicao.status_atendimento == !status)
        }
    }

    if (requisicoes.length > 0) {
        requisicoes.map((requisicao) => {
            dados = JSON.stringify(requisicao)

            table.innerHTML += `
                    <div class="div_table_row">
                        <div class="table_icon">
                            <img class="icon" src="../src/icones/icon_requisicoes_selecionado.png" alt="">
                        </div>
                        <div class="table_id">
                            ${requisicao.id}
                        </div>
                        <div class="table_requisitante">
                            ${requisicao.requisitante}
                        </div>
                        <div class="table_tipo">
                            ${requisicao.tipo}
                        </div>
                        <div class="table_data">
                            ${requisicao.data}
                        </div>
                        <div class="table_status">
                            <div class=${requisicao.status_atendimento ? "status_active" : "status_inactive"}>
                                <p>
                                    ${requisicao.status_atendimento ? "Em Aberto" : "Atendida"}
                                </p>
                            </div>
                        </div>
                        <div class="table_button">
                            <button class="open_button" data-button='${dados}' onclick="return abrir_popup_dados_requisicao(this)">
                                <img class="open_icon" src="../src/icones/icon_ver_dados.png" alt="">
                            </button>
                        </div>
                    </div>
                `
            table.innerHTML += '<hr class="divisor"></hr>'
        })

    } else {
        show_snackbar('body #snackbar_error', 'Nenhuma requisição foi encontrada!')
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

function filtrar_requisicoes() {
    let popup = document.getElementById('popup_filtrar')


    let id = document.getElementById("id").value
    let requisitante = document.getElementById("requisitante").value
    let tipo = document.getElementById("tipo").value
    let status_todos = document.getElementById("status_todos").checked ? document.getElementById("status_todos").value : null
    let status_ativo = document.getElementById("status_ativo").checked ? document.getElementById("status_ativo").value : null
    let status_inativo = document.getElementById("status_inativo").checked ? document.getElementById("status_inativo").value : null

    let status

    if (status_todos == "Todos") {
        status = null
    } else {
        if (status_ativo == "Atendida") {
            status = true
        }
        if (status_inativo == "Em Aberto") {
            status = false
        }
    }

    requisicoes(id, requisitante, tipo, status)
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

function abrir_popup_dados_requisicao(e) {
    let dados = JSON.parse(e.dataset.button)

    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_dados_requisicao")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }
    console.log(dados)

    body.innerHTML += `
        <dialog id="popup_dados_requisicao" class="popup">
            <div>
                <h1>Requisição</h1>
                <p>REQUISITANTE</p>
                <hr>
                <div class="dados_pessoais">
                    <div class="div_tipo">
                        <label for="tipo">TIPO REQUISITANTE*</label>
                        <select name="tipo" id="tipo_novo" class="selectSuccess" onblur="return set_input_success(this)">
                            <option value="vazio" >-</option>
                            <option value="Locatário" ${dados.tipo == "Locatário"? "selected":""}>Locatário</option>
                            <option value="Proprietário"${dados.tipo == "Proprietário"? "selected":""}>Proprietário</option>
                        </select>
                    </div>   
                
                    <div class="div_requisitante">
                        <label for="requisitante">REQUISITANTE*</label>
                        <input type="text" name="requisitante" id="requisitante_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                                    
                </div>
                <p>REQUISIÇÃO</p>
                <hr>
                <textarea class="textareaSuccess" id="requisicao_novo" onblur="return set_input_success(this)"></textarea>
                
                
                <div class="buttons">
                    <button onclick="fechar_popup_dados_requisicao()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="salvar_nova_requisicao()">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("popup_dados_requisicao")

    popup.showModal()
}

function fechar_popup_dados_requisicao() {
    let popup = document.getElementById('popup_dados_requisicao')

    popup.close()
}

function alterar_dados_proprietario() {

    let buttons = document.querySelector("#popup_dados_proprietario .buttons")

    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="salvar_dados_proprietario()">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="">
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

function abrir_popup_nova_requisicao() {
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#popup_nova_requisicao")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    body.innerHTML += `
        <dialog id="popup_nova_requisicao" class="popup">
            <div>
                <h1>Nova Requisição</h1>
                <p>REQUISITANTE</p>
                <hr>
                <div class="dados_pessoais">
                    <div class="div_tipo">
                        <label for="tipo">TIPO REQUISITANTE*</label>
                        <select name="tipo" id="tipo_novo" class="selectSuccess" onblur="return set_input_success(this)">
                            <option value="vazio" selected>-</option>
                            <option value="Locatário">Locatário</option>
                            <option value="Proprietário">Proprietário</option>
                        </select>
                    </div>   
                
                    <div class="div_requisitante">
                        <label for="requisitante">REQUISITANTE*</label>
                        <input type="text" name="requisitante" id="requisitante_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                                    
                </div>
                <p>REQUISIÇÃO</p>
                <hr>
                <textarea class="textareaSuccess" id="requisicao_novo" onblur="return set_input_success(this)"></textarea>
                
                
                <div class="buttons">
                    <button onclick="fechar_popup_nova_requisicao()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="salvar_nova_requisicao()">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("popup_nova_requisicao")

    popup.showModal()
}

function fechar_popup_nova_requisicao() {
    let popup = document.getElementById('popup_nova_requisicao')

    popup.close()
}

function novo_id() {
    let list_id = JSON.parse(localStorage.getItem("requisicoes")).map((requisicao) => requisicao.id)
    let max_id = Math.max(...list_id)

    return max_id + 1
}

function salvar_nova_requisicao() {
    let tipo_element = document.getElementById("tipo_novo")
    let requisitante_element = document.getElementById("requisitante_novo")
    let requisicao_element = document.getElementById("requisicao_novo")
    

    let tipo = tipo_element.value == "vazio" ? null : tipo_element.value
    let requisitante = requisitante_element.value == "" ? null : requisitante_element.value
    let requisicao = requisicao_element.value == "" ? null : requisicao_element.value
    

    console.log(tipo)
    console.log(requisitante)
    console.log(requisicao)


    let vericacao = [
        {
            value: tipo,
            element: tipo_element,
            messageError: "O tipo não foi informado.",
            status: false
        },
        {
            value: requisitante,
            element: requisitante_element,
            messageError: "O requisitante não foi informado.",
            status: false
        },
        {
            value: requisicao,
            element: requisicao_element,
            messageError: "A requisição não foi informada.",
            status: false
        },
        
    ]

    for (let i = 0; i < vericacao.length; i++) {
        if (vericacao[i].value == null) {
            if (vericacao[i].element.tagName == "INPUT"){
                vericacao[i].element.className = "inputError"    
            } else if(vericacao[i].element.tagName == "SELECT"){
                vericacao[i].element.className = "selectError"
            } else if(vericacao[i].element.tagName == "TEXTAREA"){
                vericacao[i].element.className = "textareaError"
            }
            vericacao[i].element.className = vericacao[i].element.tagName == "INPUT" ? "inputError" : "selectError"
            show_snackbar("#popup_nova_requisicao #snackbar_error", vericacao[i].messageError)
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
        

        let jsonNovaRequisicao = {
            id: novo_id(),
            requisitante: requisitante,
            tipo: tipo,
            data: "09/04/2024",
            status_atendimento: true,
            requisicao: requisicao
        }

        let requisicoesList = JSON.parse(localStorage.getItem("requisicoes"))
        requisicoesList.push(jsonNovaRequisicao)

        localStorage.setItem("requisicoes", JSON.stringify(requisicoesList))

        requisicoes(novo_id() - 1, null, null, null)

        fechar_popup_nova_requisicao()
    }
}

function iniciar_banco_requisicoes() {
    let requisicoes = [
        {
            id: 1,
            requisitante: "Requisitante 1",
            tipo: "Locatário",
            data: "09/04/2024",
            status_atendimento: true,
            requisicao: "requisicao 1",
            
        },
        {
            id: 2,
            requisitante: "Requisitante 2",
            tipo: "Proprietário",
            data: "20/03/2024",
            status_atendimento: false,
            requisicao: "requisicao 2",
            
        },
        {
            id: 3,
            requisitante: "Requisitante 3",
            tipo: "Locatário",
            data: "13/03/2024",
            status_atendimento: false,
            requisicao: "requisicao 3",
            
        }
        
    ]

    localStorage.setItem("requisicoes", JSON.stringify(requisicoes))
}

function iniciar_banco() {
    iniciar_banco_requisicoes()
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
    if (e.tagName == "INPUT"){
        e.className = "inputSuccess"    
    } else if(e.tagName == "SELECT"){
        e.className = "selectSuccess"
    } else if(e.tagName == "TEXTAREA"){
        e.className = "textareaSuccess" 
    }
    
} 