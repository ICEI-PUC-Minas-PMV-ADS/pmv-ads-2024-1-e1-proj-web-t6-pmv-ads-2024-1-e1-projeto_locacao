async function coletar_proprietarios() {
    let result
    const response = await fetch("../repositories/proprietarios.json")
    const proprietarios = await response.json().then(response => result = response.proprietarios)

    return result
}

async function proprietarios_init() {

    let table = document.getElementById('table_owners')

    let proprietarios = await coletar_proprietarios()

    proprietarios.map((proprietario) => {
        if(proprietario.status) {
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
                        <button class="open_button">
                            <img class="open_icon" src="../scr/icones/icon_ver_dados.png" alt="">
                        </button>
                    </div>
                </div>
            `
            table.innerHTML += '<hr class="divisor"></hr>'
        }
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