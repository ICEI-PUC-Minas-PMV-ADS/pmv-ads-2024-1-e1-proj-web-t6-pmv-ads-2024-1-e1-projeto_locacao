function teste() {
    let table = document.getElementById('table_owners')

    let proprietarios = [
        [
            1,
            "Pedro",
            2,
            true
        ],
        [
            2,
            "Sócratis",
            1,
            true
        ],
        [
            3,
            "Zander",
            4,
            false
        ],
    ]

    for (var i = 0; i < proprietarios.length; i++) {

        if(proprietarios[i][3] == false){
            let id = proprietarios[i][0]
            let nome = proprietarios[i][1]
            let imoveis = proprietarios[i][2]

            table.innerHTML += `
            <div class="div_table_row">
                <div class="table_icon">
                    <img class="icon" src="../scr/icones/icon_proprietarios_selecionado.png" alt="">
                </div>
                <div class="table_id">
                    ${id}
                </div>
                <div class="table_name">
                    ${nome}
                </div>
                <div class="table_property">
                    ${imoveis}
                </div>
                <div class="table_status">
                    <div class="status_active">
                        <p>
                            Ativo
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
    }
}