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





// POPUP DADOS DA FATURA
function abrir_popup_dados_fatura() {
    let popup = document.getElementById('popup_dados_fatura')

    popup.showModal()
}

function fechar_popup_dados_fatura() {
    let popup = document.getElementById('popup_dados_fatura')

    popup.close()
}

function alterar_fatura() {
    let popup = document.getElementById('popup_dados_fatura')
    popup.close()
}


// BANCO DE DADOS DE FATURAS (TEMPORÁRIO)

function faturas_init() {
    localStorage.clear()

    iniciar_banco_fat()

    faturas(null, null, null, null)
    // faturas(ID, Dt_Vencimento, Locatário, Status)
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
            valor: 400.00,
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
            valor: 1650.00,
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
            valor: 1000.00,
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
        faturas = faturas.filter((fatura) => fatura.id == parseInt(id))
    }

    if (nome_locatario_value != null) {
        faturas = faturas.filter((fatura) => fatura.nome.toUpperCase().includes(nome.toUpperCase()))
    }

    if (data_vencimento_value != null) {
        faturas = faturas.filter((fatura) => fatura.vencimento == vencimento)
    }

    if (status != null) {
        if (status) {
            faturas = faturas.filter((fatura) => fatura.status_pagamento == status)
        } else {
            faturas = faturas.filter((fatura) => fatura.status_pagamento == status)
        }
    }

    // if (situacao_fatura != null) {
    //     if (situacao_fatura) {
    //         faturas = faturas.filter((fatura) => fatura.situacao_fat == situacao_fat)
    //     } else {
    //         faturas = faturas.filter((fatura) => fatura.fat == situacao_fat)
    //     }
    // }

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
                        <buttom class="open_button" data-button='${dados_fatura}' onclick=" return aabrir_popup_dados_fatura(this)"><img src="../src/icones/icon_ver_dados.png" alt="" class="open_icon"></buttom>
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


// FUNÇÃO STATUS PAGAMENTO
