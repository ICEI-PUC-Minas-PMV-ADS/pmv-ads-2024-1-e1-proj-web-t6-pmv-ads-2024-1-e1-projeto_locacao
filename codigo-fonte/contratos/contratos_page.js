usuario() 

dialog = document.getElementById('modal')
ElementoFade = document.getElementById('fade')
var elementoLista = document.getElementById('table_list')

function abrirModalFiltro() {
    popup = document.getElementById("popup_filtrar")
    popup.showModal()
}

function fecharModalFiltro() {
    popup = document.getElementById("popup_filtrar")
    popup.close()
}

function abrirModalAdicao() {
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#PopUpAdicaoContrato")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }
    let novo_id = JSON.parse(localStorage.getItem('contratos')).length + 1

    let locatarios = JSON.parse(localStorage.getItem('locatarios'))
    let filtradosLocatarios = locatarios.filter((locatario)=>{
        if(!locatario.status){
            return true
        }
        else return false
    }).map((locatario)=>{
        return `<option value="${locatario.nome}">${locatario.nome}</option>`
    }).join('')

    let imoveis = JSON.parse(localStorage.getItem('imoveis'))
    let filtradosImoveis = imoveis.filter((imovel)=>{
        if(imovel.status == "ativo" && imovel.vacancia == "vago"){
            return true
        }
        else return false
    }).map((imovel)=>{
        let endereco = `${imovel.tipo_logradouro} ${imovel.logradouro}, ${imovel.numero}, ${imovel.complemento}, ${imovel.bairro}, ${imovel.cidade}`
        return `<option value="${endereco}">${endereco}</option>`
    }).join('')
    

    // console.log(filtradosImoveis)

    body.innerHTML += `
        <dialog id="PopUpAdicaoContrato" class="popup">
            <div>
                <h1>Novo Contrato - ${novo_id}</h1>
                <p>LOCATÁRIO</p>
                <hr>
                <div class="div_tipo_logradouro">
                    <label for="locatario_novo">NOME</label>
                    <select name="locatario_novo" class="selectSuccess" id ="locatario_novo">
                        <option value="vazio">-</option>
                        ${filtradosLocatarios}
                    </select>
                </div>
                <p>IMÓVEL</p>
                <hr>
                <div class="div_imovel">
                    <label for="endereco">ENDEREÇO</label>
                    <select name="endereco" class="selectSuccess" id ="endereco">
                        <option value="vazio">-</option>
                        ${filtradosImoveis}
                    </select>
                </div>
                <div id="div_dados_contrato">
                    <div id="div_periodo1">
                        <p>PERÍODO</p>
                        <hr>
                        <input type="number" name="periodo" id="periodo" placeholder="Período em meses" class="inputSuccess">
                    </div>
                    <div id="div_valor_mensal1">
                        <p>VALOR MENSAL</p>
                        <hr>
                        <input type="number"  name="valor_mensal" id="valor_mensal" step=".01" class="inputSuccess">
                    </div>
                    <div id="div_data_inicio1">
                        <p>DATA DE INÍCIO</p>
                        <hr>
                        <input type="date" name="data_inicio" id="data_inicio" class="inputSuccess">
                    </div>
                </div>
                
                <div class="buttons">
                    <button onclick="fecharModalAdicionar()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="adicionarContrato()">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("PopUpAdicaoContrato")

    popup.showModal()
}

function fecharModalAdicionar() {
    let popup = document.getElementById("PopUpAdicaoContrato")

    popup.close()
}

function adicionarContrato() {
    let contratos = JSON.parse(localStorage.getItem("contratos"))
    let locatario = document.getElementById('locatario_novo').value.toLowerCase()
    let endereco = document.getElementById('endereco').value.toLowerCase()
    let periodo = document.getElementById('periodo').value.toLowerCase()
    let valor_mensal = document.getElementById('valor_mensal').value.toLowerCase()
    let data_inicio = document.getElementById('data_inicio').value.toLowerCase()
    tamanho = contratos.length

    console.log(valor_mensal)
    if (locatario == "" || endereco == "" || periodo == "" || valor_mensal == "" || data_inicio == "") {

        show_snackbar("#PopUpAdicaoContrato #snackbar_error", "Preencha todos os campos para salvar.")
    }
    else {
        contratos.push(
            {
                "id": tamanho + 1,
                "locatario": locatario,
                "endereco": endereco,
                "periodo": periodo,
                "valor_mensal": parseFloat(valor_mensal),
                "data_inicio": data_inicio,
                "status": "ativo"
            }
        )
        localStorage.setItem("contratos", JSON.stringify(contratos));
        fecharModalAdicionar()
        carregarBancoContratos()
        show_snackbar("body #snackbar_success", "Contrato salvo com sucesso.")
    }
}

function vazio(nome) {
    alert("O " + nome + " está vazio")
}

function filtrarContratos() {
    var elementoLista = document.getElementById('table_list');
    var contratosfiltrados = JSON.parse(localStorage.getItem("contratos"));
    var id = document.getElementById('id').value;
    var proprietario = document.getElementById('proprietario').value.toLowerCase();
    var locatario = document.getElementById('locatario').value.toLowerCase();
    var status = document.querySelector('input[type="radio"]:checked').value.toLowerCase();


    if (id != 0) {
        contratosfiltrados = contratosfiltrados.filter((contrato) => contrato.id == id);
    }

    if (proprietario != "") {
        contratosfiltrados = contratosfiltrados.filter((contrato) => contrato.proprietario.includes(proprietario));
    }
    if (locatario != "") {
        contratosfiltrados = contratosfiltrados.filter((contrato) => contrato.locatario.includes(locatario));
    }
    if (status == 'ativo' || status == 'inativo') {
        contratosfiltrados = contratosfiltrados.filter((contrato) => contrato.status == status);
    }

    if(contratosfiltrados.length!=0){
    elementoLista.innerHTML = ""
    for (let i = 0; i < contratosfiltrados.length; i++) {
        let cor = "";
        if(contratosfiltrados[i].status=="ativo") cor='verde'
        else cor = "cinza"
        var identifier = contratosfiltrados[i].id
        identifier = contratosfiltrados[i].id
        elementoLista.innerHTML += `
        <div class="div_table_row">
  
      <div class="table_icon">
          <img class="icon" src="../src/icones/icon_contratos_selecionado.png" alt="">
      </div>
  
      <div class="table_name" id="name">
          ${contratosfiltrados[i].locatario}
      </div>  
  
      <div class="table_property" id="tempo">
          ${contratosfiltrados[i].periodo} Meses
      </div>
  
      <div class="table_status" id="mensalidade">
          ${contratosfiltrados[i].valor_mensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </div>
      
      <div class="table_status">
            <div class=${contratosfiltrados[i].status == "ativo" ? "status_active" : "status_inactive"}>
                <p>
                    ${contratosfiltrados[i].status == "ativo"  ? "Ativo" : "Inativo"}
                </p>
            </div>
        </div>
  
      <div class="table_button">
          <button class="open_button" onclick="abrirModalAlteracaoContratos(${identifier})">
              <img class="open_icon" src="../src/icones/icon_ver_dados.png" alt="">
          </button>
      </div>
  
  </div>
  <hr class="divisor">
  `

    }
    fecharModalFiltro()
    }
    else{
        fecharModalFiltro()
        show_snackbar("body #snackbar_error", "Nenhum contrato foi encontrado.");
    }


}

function carregarBancoContratos() {

    // localStorage.setItem("contratos", JSON.stringify(contratos));
    var elementoLista = document.getElementById('table_list')
    let contratos = JSON.parse(localStorage.getItem("contratos"));
    elementoLista.innerHTML = ""
    for (let i = 0; i < contratos.length; i++) {
        let cor = "";
        if(contratos[i].status=="ativo") cor='verde'
        else cor = "cinza"
        var identifier = contratos[i].id
        elementoLista.innerHTML += `
        
        <div class="div_table_row">
  
        <div class="table_icon">
            <img class="icon" src="../src/icones/icon_contratos_selecionado.png" alt="">
        </div>
    
        <div class="table_name" id="name">
            ${contratos[i].locatario}
        </div>  
    
        <div class="table_property" id="tempo">
            ${contratos[i].periodo} Meses
        </div>
    
        <div class="table_status" id="mensalidade">
            ${contratos[i].valor_mensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </div>

        <div class="table_status">
            <div class=${contratos[i].status == "ativo" ? "status_active" : "status_inactive"}>
                <p>
                    ${contratos[i].status == "ativo"  ? "Ativo" : "Inativo"}
                </p>
            </div>
        </div>
    
        <div class="table_button">
            <button class="open_button" onclick="abrirModalAlteracaoContratos(${identifier})">
                <img class="open_icon" src="../src/icones/icon_ver_dados.png" alt="">
            </button>
        </div>
  
        </div>
        <hr class="divisor">
        `
    }


}


function abrirModalAlteracaoContratos(identifier) {
    let body = document.querySelector("body")

    let verifica_popups = document.querySelectorAll("#PopUpAlteraContrato")

    if (verifica_popups.length > 0) {
        for (var i = 0; i < verifica_popups.length; i++) {
            verifica_popups[i].outerHTML = ""
        }
    }

    let contratos = JSON.parse(localStorage.getItem("contratos"));
    var status = contratos[identifier - 1].status

    body.innerHTML += `
        <dialog id="PopUpAlteraContrato" class="popup">
            <div>
                <h1>Novo Contrato - ${contratos[identifier - 1].id}</h1>
                <p>LOCATÁRIO</p>
                <hr>
                <div class="div_tipo_logradouro">
                    <label for="locatario_dados">NOME</label>
                    <input type="text" name="locatario_dados" id="locatario_dados"class="inputSuccess" value="${contratos[identifier - 1].locatario}" readonly>
                </div>
                <p>IMÓVEL</p>
                <hr>
                <div class="div_imovel">
                    <label for="endereco_dados">ENDEREÇO</label>
                    <input type="text" name="endereco_dados" id="endereco_dados"class="inputSuccess" value="${contratos[identifier - 1].endereco}" readonly>
                </div>
                <div id="div_dados_contrato">
                    <div id="div_periodo1">
                        <p>PERÍODO</p>
                        <hr>
                        <input type="number" name="periodo_dados" id="periodo_dados" placeholder="Período em meses" class="inputSuccess" value="${contratos[identifier - 1].periodo}" readonly>
                    </div>
                    <div id="div_valor_mensal1">
                        <p>VALOR MENSAL</p>
                        <hr>
                        <input type="number"  name="valor_mensal_dados" id="valor_mensal_dados" step=".01" class="inputSuccess" value="${contratos[identifier - 1].valor_mensal}" readonly>
                    </div>
                    <div id="div_data_inicio1">
                        <p>DATA DE INÍCIO</p>
                        <hr>
                        <input type="date" name="data_inicio_dados" id="data_inicio_dados" class="inputSuccess" value="${contratos[identifier - 1].data_inicio}" readonly>
                    </div>
                    <div>
                        <p>STATUS</p>
                        <hr>
                        <div id="checkbox">
                            <input type="checkbox" id="status_dados_contrato" onchange="troca_texto_contratos()" ${contratos[identifier - 1].status == "ativo"? 'checked="checked"' : ""} disabled="true">
                            <label for="" class="text">${contratos[identifier - 1].status == "ativo" ? 'ATIVO' : "INATIVO"}</label>
                        </div>
                    </div>
                </div>
                
                <div class="buttons">
                    <button onclick="fecharModalAdicionar()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="habilitaAlteracao(${identifier})">
                        <img class="icon" src="../src/icones/icon_alterar.png" alt="">
                        ALTERAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("PopUpAlteraContrato")

    popup.showModal()
}

function habilitaAlteracao(identifier) {
    let buttons = document.querySelector("#PopUpAlteraContrato .buttons")

    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
        <button onclick="alterarContrato(${identifier})">
            <img class="icon" src="../src/icones/icon_salvar.png" alt="">
            SALVAR
        </button>
    `
    document.getElementById("status_dados_contrato").disabled = false
}

function verificarCheckbox(identifier) {
    verificacao = document.getElementById('checkbox').checked
    if (verificacao) {
        label = document.getElementById('label')
        checkbox = document.getElementById('checkbox')
        checkbox.checked = true;
        h5 = document.querySelector('h5')
        h5.innerHTML = "ATIVO"
        contratos[identifier - 1].status = "ativo"
    }

    else {
        h5 = document.querySelector('h5')
        h5.innerHTML = "INATIVO"
        contratos[identifier - 1].status = "inativo"
    }
}

function alterarContrato(identifier) {
    let contratos = JSON.parse(localStorage.getItem("contratos"))
    let locatario = document.getElementById('locatario_dados').value.toLowerCase()
    let endereco = document.getElementById('endereco_dados').value.toLowerCase()
    let periodo = document.getElementById('periodo_dados').value.toLowerCase()
    let valor_mensal = document.getElementById('valor_mensal_dados').value.toLowerCase()
    let data_inicio = document.getElementById('data_inicio_dados').value.toLowerCase()
    let status = document.getElementById('status_dados_contrato').checked

    if (locatario == "" || endereco == "" || periodo == "" || valor_mensal == null || data_inicio == "") {
        alert("Existem um ou mais campos vazios")
    }
    else {
        contratos[identifier - 1].locatario = locatario
        contratos[identifier - 1].endereco = endereco
        contratos[identifier - 1].periodo = periodo
        contratos[identifier - 1].valor_mensal = valor_mensal
        contratos[identifier - 1].data_inicio = data_inicio
        if (status) {
            contratos[identifier - 1].status = "ativo"
        }
        else {
            contratos[identifier - 1].status = "inativo"
        }
        localStorage.setItem('contratos', JSON.stringify(contratos))

        let buttons = document.querySelector("#PopUpAlteraContrato .buttons")

        buttons.removeChild(buttons.children[1])

        buttons.innerHTML += `
            <button onclick="habilitaAlteracao(${identifier})">
                <img class="icon" src="../src/icones/icon_alterar.png" alt="">
                ALTERAR
            </button>
        `
        document.getElementById("status_dados_contrato").disabled = true
        show_snackbar("#PopUpAlteraContrato #snackbar_success", "Contrato alterado com sucesso.")
        carregarBancoContratos()
    }


}

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
  
  
  function usuario() {
    let usuario = JSON.parse(localStorage.getItem("usuario_autenticado"))
    let usuario_autenticado = document.querySelector("#usuario_autenticado p")
  
    if(usuario == null) {
        usuario_autenticado.innerHTML = "Usuário não identificado"
    } else {
        usuario_autenticado.innerHTML = usuario.nome
    }
}

function show_snackbar(element, message) {
    var snackbar = document.querySelector(element);
    snackbar.innerHTML = ""
    snackbar.innerHTML += `<p>${message}</p>`
    snackbar.className = "snackbar show";

    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 5000);
}