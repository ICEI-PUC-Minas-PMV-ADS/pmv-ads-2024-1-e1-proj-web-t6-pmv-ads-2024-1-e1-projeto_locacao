// MARCAÇÃO DINÂMICA POPUP FILTRAR STATUS FATURA
function status_todos() {
    let status_todos = document.getElementById("status_todos")
    let status_aberto = document.getElementById("status_aberto")
    let status_vencido = document.getElementById("status_vencido")
    let status_quitado = document.getElementById("status_quitado")

    if (status_todos.checked) {
        status_aberto.checked = true
        status_vencido.checked = true
        status_quitado.checked = true
    } else {
        status_aberto.checked = false
        status_vencido.checked = false
        status_quitado.checked = false
    }
}

function status_aberto() {
    let status_todos = document.getElementById("status_todos")
    let status_aberto = document.getElementById("status_aberto")
    let status_vencido = document.getElementById("status_vencido")
    let status_quitado = document.getElementById("status_quitado")


    if (status_aberto.checked) {
        if (status_vencido.checked) {
            if (status_quitado.checked) {
                status_todos.checked = true
            }         
        }
    } else {
        if (status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function status_quitado() {
    let status_todos = document.getElementById("status_todos")
    let status_aberto = document.getElementById("status_aberto")
    let status_quitado = document.getElementById("status_quitado")
    let status_vencido = document.getElementById("status_vencido")

    if (status_quitado.checked) {
        if (status_aberto.checked) {
            if (status_vencido.checked) {
                status_todos.checked = true
            }
            
        }
    } else {
        if (status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}

function status_vencido() {
    let status_todos = document.getElementById("status_todos")
    let status_aberto = document.getElementById("status_aberto")
    let status_vencido = document.getElementById("status_vencido")
    let status_quitado = document.getElementById("status_quitado")

    if (status_vencido.checked) {
        if (status_aberto.checked) {
            if (status_quitado.checked) {
                status_todos.checked = true
            }
            
        }
    } else {
        if (status_todos.checked == true) {
            status_todos.checked = false
        }
    }
}


// BANCO DE DADOS DE FATURAS (TEMPORÁRIO)

function faturas_init() {
    localStorage.clear()

    iniciar_banco_fat()
    // USUÁRIO
    usuario()

    faturas(null, null, null, null)
    // faturas(id_fatura, data_vencimento, nome_locatario, status)
}


function iniciar_banco_faturas() {
    let faturas = [
        {
            id_fatura: 1,
            id_locatario: 1,
            id_contrato:1,
            id_imovel: 1,
            nome_locatario: "Locatário 01",
            periodo_inicio: "10/01/2024",
            periodo_fim: "10/02/2024",
            data_vencimento: "20/06/2024",
            data_pagamento: null,
            valor: "400,00",
            status_pagamento: false,
            // EM ABERTO
        },
        {
            id_fatura: 2,
            id_locatario: 2,
            id_contrato:2,
            id_imovel: 2,
            nome_locatario: "Locatário 02",
            periodo_inicio: "15/02/2024",
            periodo_fim: "15/03/2024",
            data_vencimento: "25/03/2024",
            data_pagamento: null,
            valor: "1650,00",
            status_pagamento: false,
            // VENCIDO
        },
        {
            id_fatura: 3,
            id_locatario: 3,
            id_contrato:3,
            id_imovel: 3,
            nome_locatario: "Locatário 03",
            periodo_inicio: "25/04/2024",
            periodo_fim: "25/05/2024",
            data_vencimento: "30/05/2024",
            data_pagamento: "25/05/2024",
            valor: "1000,00",
            status_pagamento: true,
            // PAGO
        }
    ]
    localStorage.setItem("faturas", JSON.stringify(faturas))
}
    
function iniciar_banco_fat() {
    iniciar_banco_faturas()
}

function faturas(id_fatura, data_vencimento, nome_locatario, status){
    var node = document.getElementById('table_list')
    node.innerHTML = ""

    let id_fatura_value = id_fatura
    let data_vencimento_value = data_vencimento
    let nome_locatario_value =  nome_locatario

    if (id_fatura_value == "") {
        id_fatura_value = null
    }

    if (data_vencimento_value == "") {
        data_vencimento_value = null
    }

    if (nome_locatario_value == "") {
        nome_locatario_value = null
    }


    let table_faturas = document.getElementById('table_list')

    let faturas = JSON.parse(localStorage.getItem("faturas"))

    if (id_fatura_value != null) {
        faturas = faturas.filter((fatura) => fatura.id_fatura == parseInt(id_fatura))
    }

    if (nome_locatario_value != null) {
        faturas = faturas.filter((fatura) => fatura.nome_locatario.toUpperCase().includes(nome_locatario.toUpperCase()))
    }

    if (data_vencimento_value != null) {
        faturas = faturas.filter((fatura) => fatura.data_vencimento == data_vencimento)
    }

// ACHO QUE O ERRO DE FILTRO ESTÁ AQUI!!!!!!!!

    if (status != null) {
        if (status) {
            faturas = faturas.filter((fatura) => fatura.status_pagamento == status)
        } else {
            faturas = faturas.filter((fatura) => fatura.status_pagamento == status)
        }
    }

    // Para cada fatura inclui a respectiva div na tela principal
    if(faturas.length > 0) {
        faturas.map((fatura) => {
            let classe = ""
            let texto = ""
            
            dados_fatura = JSON.stringify(fatura)
            if (!fatura.status_pagamento) {
                let splitData = fatura.data_vencimento.split("/");
                let newDate = [splitData[1], splitData[0], splitData[2]];

                let data = new Date(newDate.join("/"));
                let hoje = new Date();

                
                if (data < hoje) {
                    classe = "status_vencido"
                    texto = "Vencida"
                  } else {
                    classe = "status_aberto"
                    texto = "Em Aberto"
                  }
                        
            } else {
                classe = "status_quitado"
                    texto = "Paga"
            }


            table_faturas.innerHTML += `
            <div class="div_table_row"> 
                <div class="table_icon">
                    <img src="../src/icones/icon_faturas_selecionado.png" alt="" class="icon">
                </div>
                <div class="table_locatario">${fatura.nome_locatario}</div>
                <div class="table_vencimento">${fatura.data_vencimento}</div>
                <div class="table_valor">${fatura.valor}</div>
                <div class="table_status">
                    <div class="${classe}">
                        <p>
                            ${texto}
                        </p>
                    </div>
                </div>
                <div class="table_button">
                        <buttom class="open_button" data-button='${dados_fatura}' onclick=" return abrir_popup_dados_fatura(this)"><img src="../src/icones/icon_ver_dados.png" alt="" class="open_icon"></buttom>
                </div>
            </div>
            <hr class="divisor">        
            `                       
        })
    } else {
        show_snackbar("body #snackbar_error", "Nenhuma fatura foi encontrada!")
    }
}


// POPUP FILTRAR FATURAS
function abrir_popup_filtrar_fatura() {
    let popup = document.getElementById('popup_filtrar')

    popup.showModal()
}

function fechar_popup_filtrar_fatura() {
    let popup = document.getElementById('popup_filtrar')

    popup.close()
}


function filtrar_fatura() {
    let popup = document.getElementById('popup_filtrar')


    let id_fatura = document.getElementById("id_filtro").value
    console.log(id_fatura)
    let data_vencimento = document.getElementById("vencimento_filtro").value
    console.log(data_vencimento)
    let nome_locatario = document.getElementById("nome_filtro").value
    console.log(nome_locatario)    
    let status_todos = document.getElementById("status_todos").checked ? document.getElementById("status_todos").value : null
    let status_aberto = document.getElementById("status_aberto").checked ? document.getElementById("status_aberto").value : null
    let status_quitado = document.getElementById("status_quitado").checked ? document.getElementById("status_quitado").value : null
    let status_vencido = document.getElementById("status_vencido").checked ? document.getElementById("status_vencido").value : null


    let status
    if (status_todos == "todos") {
        status = null
    } else {
        if (status_aberto == "aberto") {
            status = true
        }
        if (status_quitado == "quitado") {
            status = false
        }
        // if (status_vencido == "vencido") {
        //     status = false
        // }
    }
    console.log(status)
   

    faturas(id_fatura, data_vencimento, nome_locatario, status)
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


// POPUP DADOS DA FATURA
function abrir_popup_dados_fatura(e) {
    let dados_fatura = JSON.parse(e.dataset.button)
    let body = document.body
    let verifica_popups = document.querySelectorAll("#popup_dados_fatura")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }
 
    body.innerHTML += `
    <dialog id="popup_dados_fatura" class="popup">
        <div>
            <h1>Dados da Fatura - ${dados_fatura.id_fatura}</h1>
            <p><br>LOCATÁRIO</p>
            <hr>
            <div class="div_nome">
                <label for="nome">NOME</label>
                <input type="text" name="nome" id="nome_dados" class="inputSuccess" value="${dados_fatura.nome_locatario}" onblur="return set_input_success(this)" readonly>
            </div>
            
            <Section id="section_imovel_contrato">
                <div id="div_imov">
                    <label for="imov">IMOVEL</label>
                </div>
                <div id="div_contr">
                    <label for="contr">CONTRATO</label>
                </div>
            </Section>       
            <hr>
            <Section class="section_dados_fatura">
                <div class="div_end_imovel">
                    <label for="nome">ID ENDEREÇO</label>
                    <input type="text" name="nome" id="nome_dados" class="inputSuccess" value="CONFIRMAR SE É DO IMOVEL OU DO LOCATÁRIO" onblur="return set_input_success(this)" readonly>
                </div>
                <div class="div_id_imovel">
                    <label for="id">ID IMÓVEL</label>
                    <input type="text" name="imovel" id="imovel" class="inputSuccess" value="${dados_fatura.id_imovel}" onblur="return set_input_success(this)" readonly>
                </div>
            </Section>
                
            <p><br>PERIODO</p>
            <hr>
            <Section id="section_datas">
                <div class="div_inicio">
                    <label for="inicio">INÍCIO</label>
                    <input type="text" name="inicio" id="inicio" class="inputSuccess" value="${dados_fatura.periodo_inicio}" onblur="return set_input_success(this)" readonly>
                </div>
                <div class="div_fim">
                    <label for="fim">FIM</label>
                    <input type="text" name="fim" id="fim" class="inputSuccess" value="${dados_fatura.periodo_fim}" onblur="return set_input_success(this)" readonly>
                </div>
                <div class="div_vencimento">
                    <label for="vencimento">VENCIMENTO</label>
                    <input type="text" name="vencimento" id="vencimento" class="inputSuccess" value="${dados_fatura.data_vencimento}" onblur="return set_input_success(this)" readonly>
                </div>
                <div class="div_pagamento">
                    <label for="pagamento">PAGAMENTO</label>
                    <input type="text" name="pagamento" id="pagamento" class="inputSuccess" value="${dados_fatura.data_pagamento}" onblur="return set_input_success(this)" readonly>
                </div>
            </Section>
            <div class="buttons">
                <button onclick="fechar_popup_dados_fatura()">
                    <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                    VOLTAR
                </button>
                <button onclick="informar_pagamento()">
                    <img class="icon" src="../src/icones/icon_alterar.png" alt="">
                    INFORMAR PAGAMENTO
                </button>
            </div>
            
        </div>
    </dialog>
    `
    let popup = document.getElementById("popup_dados_fatura")  

    popup.showModal()
}

function fechar_popup_dados_fatura() {
    let popup = document.getElementById('popup_dados_fatura')

    popup.close()
}

function informar_pagamento() {
    let buttons = document.querySelector("#popup_dados_fatura .buttons")

    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="salvar_data_pagamento()">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="">
            SALVAR
        </button>    
    `
    document.getElementById("pagamento").readOnly = false

}


// PAREI AQUI EM 25/05/2024
function salvar_data_pagamento() {
    
    let id_fatura_alterar = parseInt(document.querySelector("#popup_dados_fatura h1").innerHTML.split(" - ")[1])
    
    let data_pagamento_informado = document.getElementById("pagamento").value

    let buttons = document.querySelector("#popup_dados_fatura .buttons")
        buttons.removeChild(buttons.children[1])

        faturasList = JSON.parse(localStorage.getItem("faturas"))

        faturasList = faturasList.map((fatura) => {
            if (fatura.id_fatura == id_fatura_alterar) {
                fatura.data_pagamento = data_pagamento_informado

                return fatura
            }
        return fatura
        })

    
    localStorage.setItem("faturas", JSON.stringify(faturasList))

    fechar_popup_dados_fatura()
        

}

function set_input_success(e) {
    e.className = e.tagName == "INPUT" ? "inputSuccess" : "selectSuccess"
}


// RESPONSIVIDADE
function abrir_sidebar() {
    let sanduiche = document.getElementById("sanduiche")
    let nav = document.querySelector("nav")

    if(sanduiche.innerHTML == "menu") {
        nav.className = "open_nav"
        sanduiche.innerHTML = "close"
    } else {
        nav.className = ""
        sanduiche.innerHTML = "menu"
    }
}


// USUÁRIO
function usuario() {
    let usuario = JSON.parse(sessionStorage.getItem("usuario_autenticado"))
    let usuario_autenticado = document.querySelector("#usuario_autenticado p")
  
    if(usuario == null) {
        usuario_autenticado.innerHTML = "Usuário não identificado"
    } else {
        usuario_autenticado.innerHTML = usuario.nome
    }
  }
