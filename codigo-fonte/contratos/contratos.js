
contratos = [
    {
        id: 1,
        locatario: "josé da silva",
        endereco: "rua são josé, centro",
        periodo: "12",
        valor_mensal: 600.00,
        data_inicio: "2024-03-23",
        status: "ativo",
        proprietario: "marcos"
    },
    {
        id: 2,
        locatario: "fernando abreu",
        endereco: "rua das nações, observatorio",
        periodo: "6",
        valor_mensal: 1600.00,
        data_inicio: "2020-05-06",
        status: "inativo",
        proprietario: "vinicius"
    },
    {
        id: 3,
        locatario: "Mariilia pereira",
        endereco: "rua laranjal, paulista",
        periodo: "24",
        valor_mensal: 600.00,
        data_inicio: "2018-09-08",
        status: "ativo",
        proprietario: "joana"
    }

]

dialog = document.getElementById('modal')
ElementoFade = document.getElementById('fade')
var elementoLista = document.getElementById('table_list')

function fecharModal() {
    dialog.removeAttribute('open');
    dialog.classList.remove('popUpFiltro');
    dialog.classList.remove('PopUpAdicaoContrato');
    dialog.classList.remove('PopUpAlterar')
    ElementoFade.classList.remove('escuro');
    dialog.close()

}

function abrirModalFiltro() {
    
    ElementoFade.classList.add("escuro");
    dialog.classList.add("popUpFiltro")
    dialog.setAttribute('open', 'true');

    dialog.innerHTML = `
    <h1 class="fil">Filtros</h1>
    <h5 class="titulos">Dados do Contrato<hr class="hr"></h5>
    

    <div class="alinhamento" >
        <label class="titulos" for="id">ID<br>
            <input type="number" name="id" id="id">

        </label>
        
        <label class="titulos" for="proprietario">Proprietário <br>
            <input type="text" name="proprietario" id="proprietario">
        </label>

        <label class="titulos" for="locatario">Locatário <br>
            <input type="text" name="locatario" id="locatario">
        </label>
    </div>

        <h4 class="titulos">Status
            <hr class="hr">
        </h4>


    <div class="checar">
        
        <label  >
            <input type="radio" name="escolha" value="todos" checked ><h7>TODOS</h7>
        </label>
        <label  >
            <input type="radio" name="escolha" value="ativo"><h7>ATIVO</h7>
        </label>
        <label  >
            <input type="radio" name="escolha" value="inativo"><h7>INATIVO</h7>
        </label>  
          
    </div>


    <div class="botoes">
        <button id="voltar_principal" onclick="fecharModal()"><img src="../src/icones/voltar.png" alt=""></button>
        <button class="flutuar" onclick="filtrarContratos()"><img src="../src/icones/filtrar.png" alt=""></button>
    </div>


    `


}

function abrirModalAdicao() {

    ElementoFade.classList.add("escuro");
    dialog.classList.add('PopUpAdicaoContrato')
    dialog.setAttribute('open', 'true');
    dialog.innerHTML = `
    <h1>Novo Contrato</h1>
    <h4 class="titulos">LOCATÁRIO
        <hr>
    </h4>
    <label for="locatario">Nome</label>
    <input class="longo" type="text" name="locatario" id="locatario">
    <h4 class="titulos">IMÓVEL
        <hr>
    </h4>

    <div class="alinhamento">
        <label class="titulos" for="endereco">ID - ENDEREÇO <br></label>
        <input class="longo" type="text" name="endereco" id="endereco">
    </div>

    <div class="alinhamento-a">
        <label class="titulos" for="endereco">Período <hr> 
            <input type="number" name="periodo" id="periodo" placeholder="Período em meses">
        </label>
        <label class="titulos" for="valor_mensal">Valor Mensal <hr> 
            <input type="number"  name="valor_mensal" id="valor_mensal" step=".01">
        </label>
    </div>

    
    <div class="alinhamento-a">
        
        <label class="titulos" for="data_inicio">Data de início<hr>
            <input type="date" name="data_inicio" id="data_inicio">
        </label>
        
    </div>

    <div class="botoes">
        <button onclick="fecharModal()"><img src="../src/icones/voltar.png" alt=""></button>
        <button class="flutuar" onclick="adicionarContrato()"><img src="../src/icones/salvar.png" alt=""></button>
    </div>
    
    
    `


}

function adicionarContrato() {
    let locatario = document.getElementById('locatario').value.toLowerCase()
    let endereco = document.getElementById('endereco').value.toLowerCase()
    let periodo = document.getElementById('periodo').value.toLowerCase()
    let valor_mensal = document.getElementById('valor_mensal').value.toLowerCase()
    let data_inicio = document.getElementById('data_inicio').value.toLowerCase()
    tamanho = contratos.length

    if (locatario == "" || endereco == "" || periodo == "" || valor_mensal == "" || data_inicio == "") {
       
        alert("falta preencher algum campo")
    }

    else {
        contratos.push(
            {
                "id": tamanho + 1,
                "locatario": locatario,
                "endereco": endereco,
                "periodo": periodo,
                "valor_mensal": valor_mensal,
                "data_inicio": data_inicio,
                "status": "ativo"
            }
        )
        localStorage.setItem("contratos", JSON.stringify(contratos));
        fecharModal()
        carregarBancoContratos()
        console.log(contratos)
    }



}

function vazio(nome) {
    alert("O " + nome + " está vazio")
}


function filtrarContratos() {
    //var elementoLista = document.getElementById('table_list');
    var contratosfiltrados = JSON.parse(localStorage.getItem("contratos"));
    var id = document.getElementById('id').value;
    var proprietario = document.getElementById('proprietario').value.toLowerCase();
    var locatario = document.getElementById('locatario').value.toLowerCase();
    var status = document.querySelector('input[type="radio"]:checked').value.toLowerCase();
    console.log(proprietario)


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

    console.log(contratosfiltrados)
    elementoLista.innerHTML = ""
    for (let i = 0; i < contratosfiltrados.length; i++) {
        identifier = contratosfiltrados[i].id
        elementoLista.innerHTML += `
        <div class="div_table_row">
  
      <div class="table_icon1">
          <img class="icon" src="../src/icones/icon_contratos_selecionado.png" alt="">
      </div>
  
      <div class="table_id" id="id">
          ${contratosfiltrados[i].id}
      </div>
  
      <div class="table_name" id="name">
          ${contratosfiltrados[i].locatario}
      </div>  
  
      <div class="table_property" id="tempo">
          ${contratosfiltrados[i].periodo} Meses
      </div>
  
      <div class="table_status" id="mensalidade">
          ${contratosfiltrados[i].valor_mensal}
      </div>
      <div class="table_status" id="situacao">
          ${contratosfiltrados[i].status}
      </div>
  
      <div class="table_button">
          <button class="open_button" onclick="abrirModalAlteracaoContratos(${identifier})">
              <img class="open_icon" src="../src/icones/icon_ver_dados.png" alt="">
          </button>
      </div>
  
  </div>`

    }
    fecharModal()


}

function carregarBancoContratos() {

    localStorage.setItem("contratos", JSON.stringify(contratos));
    elementoLista.innerHTML = ""
    for (let i = 0; i < contratos.length; i++) {
        var identifier = contratos[i].id
        elementoLista.innerHTML += `
    <div class="div_table_row">
  
      <div class="table_icon1">
          <img class="icon" src="../src/icones/icon_contratos_selecionado.png" alt="">
      </div>
  
      <div class="table_id" id="id">
          ${contratos[i].id}
      </div>
  
      <div class="table_name" id="name">
          ${contratos[i].locatario}
      </div>  
  
      <div class="table_property" id="tempo">
          ${contratos[i].periodo} Meses
      </div>
  
      <div class="table_status" id="mensalidade">
          ${contratos[i].valor_mensal}
      </div>
      <div class="table_status" id="situacao">
          ${contratos[i].status}
      </div>
  
      <div class="table_button">
          <button class="open_button" onclick="abrirModalAlteracaoContratos(${identifier})">
              <img class="open_icon" src="../src/icones/icon_ver_dados.png" alt="">
          </button>
      </div>
  
    </div>`

    }


}

function abrirModalAlteracaoContratos(identifier) {
    let contratos=JSON.parse(localStorage.getItem("contratos"));
    var status = contratos[identifier - 1].status
    ElementoFade.classList.add("escuro");
    dialog.setAttribute('open', 'true');
    dialog.classList.add('PopUpAlterar')
    dialog.innerHTML = `
    <h1>Dados do Contrato</h1>
    <h4 class="titulos">LOCATÁRIO
        <hr>
    </h4>
    <label for="locatario">Nome</label>
    <input class="longo" type="text" name="locatario" id="locatario" value="${contratos[identifier-1].locatario}">
    <h4 class="titulos">IMÓVEL
        <hr>
    </h4>

    <div class="alinhamento">
        <label class="titulos" for="endereco">ID - ENDEREÇO <br></label>
        <input class="longo" type="text" name="endereco" id="endereco" value="${contratos[identifier-1].endereco}">
    </div>

    <div class="alinhamento-a">
        <label class="titulos" for="endereco">Período <br>
            <input type="number" name="periodo" id="periodo" placeholder="Período em meses" value="${contratos[identifier-1].periodo}">
        </label>
        <label class="titulos" for="valor_mensal">Valor Mensal <br>
            <input type="number" name="valor_mensal" id="valor_mensal" value="${contratos[identifier-1].valor_mensal}">
        </label>
    </div>

    
    <div class="alinhamento-a">
        
        <label class="titulos" for="data_inicio">Data de início <hr>
            <input type="date" name="data_inicio" id="data_inicio" value="${contratos[identifier-1].data_inicio}">
        </label>
        
        <label class="titulos descer" for="valor_mensal">Status <hr>
            <div class="centro">
                <label class="switch" id="label">
                    <input type="checkbox" id="checkbox" onclick="verificarCheckbox(${identifier})" value="">
                    <span class="slider round"></span>
                    <label for="span"></label>
                </label>
                <h5>Ativo</h5>
            </div> 
        </label>
        
        
    </div>

    <div class="botoes">
        <button id="voltar_principal" onclick='fecharModal()'><img src="../src/icones/voltar.png" alt=""></button>
        <button class="flutuar" onclick="alterarContrato(${identifier})"><img src="../src/icones/alterar.png" alt=""></button>
    </div>
    `
    if (status == "ativo") {
        console.log(status)
        label = document.getElementById('label')
        checkbox = document.getElementById('checkbox')
        checkbox.checked = true;
        h5 = document.querySelector('h5')
        h5.innerHTML = "ATIVO"
    }

    else {
        console.log(status)
        checkbox.checked = false;
        h5 = document.querySelector('h5')
        h5.innerHTML = "INATIVO"
    }


}

function verificarCheckbox(identifier) {
    verificacao = document.getElementById('checkbox').checked
    if (verificacao) {
        console.log(verificacao)
        label = document.getElementById('label')
        checkbox = document.getElementById('checkbox')
        checkbox.checked = true;
        h5 = document.querySelector('h5')
        h5.innerHTML = "ATIVO"
        contratos[identifier - 1].status = "ativo"
    }

    else {
        console.log(verificacao)
        h5 = document.querySelector('h5')
        h5.innerHTML = "INATIVO"
        contratos[identifier - 1].status = "inativo"
    }


}

function alterarContrato(identifier) {

    console.log(identifier)
    let locatario = document.getElementById('locatario').value.toLowerCase()
    let endereco = document.getElementById('endereco').value.toLowerCase()
    let periodo = document.getElementById('periodo').value.toLowerCase()
    let valor_mensal = document.getElementById('valor_mensal').value.toLowerCase()
    let data_inicio = document.getElementById('data_inicio').value.toLowerCase()
    let status = document.getElementById('checkbox').checked


    if (locatario == "" || endereco == "" || periodo == "" || valor_mensal == null || data_inicio == "") {
        alert("Existem um ou mais campos vazios")
    }
    else {
        contratos[identifier-1].locatario = locatario
        contratos[identifier-1].endereco = endereco
        contratos[identifier-1].periodo = periodo
        contratos[identifier-1].valor_mensal = valor_mensal
        contratos[identifier-1].data_inicio = data_inicio
        if (status) {
            contratos[identifier-1].status = "ativo"
        }
        else {
            contratos[identifier-1].status = "inativo"
        }
        fecharModal()
        carregarBancoContratos()
    }





}