var imoveis = [
  {
    id: 1,
    tipo_imovel: "comercial",
    tipo_logradouro: "avenida",
    logradouro: "beatriz alvarenga",
    numero: "319",
    complemento: "APTO 208",
    bairro: "centro",
    cidade: "belo horizonte",
    uf: "mg",
    cep: "31140-259",
    vacancia: "locado",
    status: "ativo"
  },

  {
    id: 2,
    tipo_imovel: "residencial",
    tipo_logradouro: "rua",
    logradouro: "SÃO JOÃO",
    numero: "39",
    complemento: "apto",
    bairro: "SAGRADA FAMILIA",
    cidade: "belo horizonte",
    uf: "MG",
    cep: "31140-258",
    vacancia: "locado",
    status: "inativo"
  },

  {
    id: 3,
    tipo_imovel: "residencial",
    tipo_logradouro: "rua",
    logradouro: "ipiranga",
    numero: "500",
    complemento: "casa",
    bairro: "centro",
    cidade: "franca",
    uf: "SP",
    cep: "31140-420",
    vacancia: "locado",
    status: "ativo"
  }

]


//coletando elemento fade:
var ElementoFade = document.getElementById("fade")

//coletando table_list:
var elementoLista = document.getElementById('table_list')

// coletando os dialogs:
var dialog = document.getElementById("modal");

//-------------------------------------------------------------

//coletando os iframes dos dialog:
//var iframe1 = document.getElementById("meuIframeFiltrar");
//var iframe2 = document.getElementById("meuIframeadicionar");
//var iframe3 = document.getElementById('meuIframeAlterar')
//-------------------------------------------------------------

// Ações dos botões:


function fecharModal() {
  ElementoFade.classList.remove('escuro');
  dialog.close()

}

function abrirModalFiltro() {

  ElementoFade.classList.add("escuro");
  dialog.setAttribute('open', 'true');
  dialog.innerHTML = `

  <h1>Filtro</h1>

  <h4>DADOS DO IMÓVEL</h4>
  <hr>

  <div class="id_tipo">
      <div class="id">
          <label for="id">ID</label><br>
          <input type="number" id="id" name="id">
      </div>


      <div class="tipo">
          <label for="tipo">TIPO</label><br>
          <input type="text" name="tipo" id="tipo">
      </div>

  </div>

  <div class="Logradouro">
      <label for="Logradouro">LOGRADOURO</label><br>
      <input type="text" id="Logradouro" name="Logradouro">

  </div>

  <div class="cidade_cep">
      <div class="cidade">
          <label for="cidade">CIDADE</label><br>
          <input type="text" name="cidade" id="cidade">
      </div>

      <div class="cep">
          <label for="cep">CEP</label><br>
          <input type="text" name="cep" maxlength="9" onkeyup="handleZipCode(event)" id="cep">
      </div>


  </div>

  <div class="status_vacancia">

      <div class="status">
          <h4>STATUS</h4>
          <hr>

          <label class="container">TODOS
              <input type="radio" checked="checked" id="radio1" name="radio1" value="TODOS">
              <span class="checkmark"></span>
          </label>
          <label class="container">ATIVO
              <input type="radio" id="radio1" name="radio1" value="ATIVO">
              <span class="checkmark"></span>
          </label>
          <label class="container">INATIVO
              <input type="radio" id="radio1" name='radio1' value="INATIVO">
              <span class="checkmark"></span>
          </label>


      </div>


      <div class="vacancia">
          <h4>VACÂNCIA</h4>
          <hr>

          <label class="container">Todos
              <input type="radio" checked="checked" name="radio2" id="radio2" value="todos">
              <span class="checkmark"></span>
          </label>
          <label class="container">Locado
              <input type="radio" name="radio2" id="radio2" value="locado">
              <span class="checkmark"></span>
          </label>
          <label class="container">Vago
              <input type="radio" name="radio2" id="radio2" value="vago">
              <span class="checkmark"></span>
          </label>

      </div>

  </div>

  <div class="alinhar_botoes">
      <button id="voltar_principal" onclick="fecharModal()"> <img src="../src/icones/voltar.png" alt=""></button>
      <button id="filtrar_imoveis"onclick="filtrarImoveis()"><img src="../src/icones/filtrar.png" alt=""></button>
  </div>`

}

function filtrarImoveis() {

  var elementoLista = document.getElementById('table_list');
  elementoLista.innerHTML = ""
  var filtrado = imoveis;
  var identifier;
  //var texto = '';
  //const resposta = await fetch('imoveis.json');
  //var imoveis = await resposta.json();
  var id = document.getElementById('id').value;
  var tipo = document.getElementById('tipo').value.toLowerCase();
  var logradouro = document.getElementById('Logradouro').value.toLowerCase();
  var cidade = document.getElementById('cidade').value.toLowerCase();
  var cep = document.getElementById('cep').value.toLowerCase();
  var status = document.querySelector('input[name=radio1]:checked').value.toLowerCase();
  var vacancia = document.querySelector('input[name=radio2]:checked').value.toLowerCase();

  //--------------------------------------------//
  // abaixo faz-se a verificação se os valores digitados estão presentes no banco de dados

  if (id != 0) {

    filtrado = filtrado.filter((imovel) => imovel.id == id);
  }

  if (tipo != "") {

    filtrado = filtrado.filter((imovel) => imovel.tipo_imovel.includes(tipo));
  }

  if (logradouro != "") {
    filtrado = filtrado.filter((imovel) => imovel.logradouro.includes(logradouro));
  }

  if (cidade != "") {
    filtrado = filtrado.filter((imovel) => imovel.cidade.includes(cidade));
  }

  if (cep != "") {
    filtrado = filtrado.filter((imovel) => imovel.cep == cep);
  }
  console.log(status)
  if (status == "ativo" || status == "inativo") {

    filtrado = filtrado.filter((imovel) => imovel.status == status);
  }
  if (vacancia == "locado" || vacancia == "vago") {
    filtrado = filtrado.filter((imovel) => imovel.vacancia == vacancia);
  }


  //localStorage.setItem("imoveiss", JSON.stringify(imoveiss));
  if (filtrado.length == 0) {
    fecharModal()
    alert('imóveis não encontrados')
    iniciar_banco_imoveis()
  }

  else {
    for (let i = 0; i < filtrado.length; i++) {
      identifier = filtrado[i].id
      elementoLista.innerHTML += `<div class="div_table_row"> 
        <div class="table_icon1">
          <img 
            class="icon"
            src="../src/icones/icon_imoveis_selecionado.png"
            alt=""
          />
        </div>
  
        <div class="table_id">${filtrado[i].id}</div>
  
        <div class="table_name">${filtrado[i].tipo_imovel}</div>
  
        <div class="table_property">${filtrado[i].tipo_logradouro} ${filtrado[i].logradouro}, ${filtrado[i].numero}, ${filtrado[i].complemento}</div>
  
        <div class="table_status">${filtrado[i].vacancia}</div>
  
        <div class="table_status">${filtrado[i].status}</div>
  
        <div class="table_button">
          <button
            class="open_button"
            onclick="abrirModalAlteracao(${identifier})"
          >
            <img
              class="open_icon"
              src="../src/icones/icon_ver_dados.png"
              alt=""
            />
          </button>
        </div>
        </div>`

    }
    fecharModal()
  }




}

function abrirModalAdicao() {
  ElementoFade.classList.add("escuro");
  dialog.classList.add('adicao')
  dialog.setAttribute('open', 'true');
  dialog.innerHTML = `

        <header>
           <h2>Novo Imóvel</h2> 
        </header>

        <h4>PROPRIETÁRIO
            <hr>
        </h4>

        <div class="proprietario">
            <h4>Nome</h4>
            <input name="proprietario" , id="proprietario" , placeholder="pesquisar...">
        </div>

        <h4>ENDEREÇO
            <hr>
        </h4>

        <div class="a">

            <div class="a1">
                <label for="tipoLogradouro" id="label1">Tipo Logradouro <br>
                    <input type="text" ,id="tipoLogradouro">
                </label>
            </div>

            <div class="a2">
                <label for="Logradouro" id="label2">Logradouro <br>
                    <input type="text" , id="Logradouro">
                </label>
            </div>

            <div class="a3">
                <label for="numero" id="label3">Número <br>
                    <input type="text" , id="numero">
                </label>        
            </div>

        </div>

        <div class="b">
            <div class="b1">
                <label for="complemento" id="label4">complemento</label><br>
                <input type="text" , id="complemento">
            </div>
            <div class="b2">
                <label for="bairro" id="label5">Bairro</label><br>
                <input type="text" , id="bairro">
            </div>
            <div class="b3">
                <label for="Cidade" id="label6">Cidade</label><br>
                <input type="text" , id="cidade">
            </div>


        </div>

        <div class="c">
            <div>
                <label for="cep" id="label7">CEP</label><br>
                <input type="text" , id="cep", type="number" maxlength="9" onkeyup="handleZipCode(event)">
            </div>
            <div>
                <label for="uf" id="label8">UF</label><br>
                <input type="text" , id="uf">
            </div>

        </div>


        <div class="d">
            <h4>TIPO <hr> </h4>
            
        </div>


        <div class="espacamento">
            <select name="tipo" id="tipo">
                <option disabled selected>Selecione</option>
                <option value="comercial">comercial</option>
                <option value="residencial">residencial</option>
            </select>

        </div>

        <div class="alinhar_botoes">
            <button id="voltar_principal" onclick="fecharModal()"> <img src="../src/icones/voltar.png" alt=""> </button>
            <button onclick="novoImovel()"> <img src="../src/icones/salvar.png" alt=""> </button>
        </div>`


}

const handleZipCode = (event) => {
  let input = event.target
  input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  return value
}




function novoImovel() {
  var lenghtImoveis = imoveis.length
  var label1 = document.getElementById('label1');
  var label2 = document.getElementById('label2');
  var label3 = document.getElementById('label3');
  var tipo = document.getElementById('tipo').value
  var tipoLogradouro = label1.querySelector('input').value
  var Logradouro = label2.querySelector('input').value
  var numero = label3.querySelector('input').value
  var complemento = document.getElementById('complemento').value
  var bairro = document.getElementById('bairro').value
  var cidade = document.getElementById('cidade').value
  var cep = document.getElementById('cep').value
  var uf = document.getElementById('uf').value

  if (tipo != null && tipoLogradouro != "" && Logradouro != null && numero != null && complemento != null && bairro != null && cidade != null && uf != null && cep != null) {
    imoveis.push(
      {
        "id": lenghtImoveis + 1,
        "tipo_imovel": tipo,
        "tipo_logradouro": tipoLogradouro,
        "logradouro": Logradouro,
        "numero": numero,
        "complemento": complemento,
        "bairro": bairro,
        "cidade": cidade,
        "uf": uf,
        "cep": cep,
        "vacancia": "vago",
        "status": "ativo"

      }
    );
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
    fecharModal();
    iniciar_banco_imoveis();
  }

  else alert("falta preencher algum campo")

}


function abrirModalAlteracao(identifier) {
  dialog.innerHTML = ""
  ElementoFade.classList.add("escuro");
  dialog.setAttribute('open', 'true');
  dialog.classList.add('adicao');
  dialog.innerHTML = `

    <header>
        <h2>Dados do Imóvel</h2>
    </header>

    <h4>PROPRIETÁRIO
        <hr>
    </h4>

    <div class="proprietario">
        <h4>Nome</h4>
        <input name="proprietario" , id="proprietario" , placeholder="pesquisar...">
    </div>

    <h4>ENDEREÇO
        <hr>
    </h4>
    <div class="a">
        <div class="a1">
            <label for="tipoLogradouroo">Tipo Logradouro</label>
            <br>
            <input type="text" id="tipoLogradouro" value="${imoveis[identifier - 1].tipo_logradouro}">
        </div>
        <div class="a2">
            <label for="Logradouro" id="label2">Logradouro</label><br>
            <input type="text"  id="Logradouro" value="${imoveis[identifier - 1].logradouro}">
        </div>
        <div class="a3">
            <label for="numero" id="label3">Número</label><br>
            <input type="text"  id="numero" value ="${imoveis[identifier - 1].numero}">
        </div>
    </div>

    <div class="b">
        <div>
            <label for="complemento">complemento</label><br>
            <input type="text"  id="complemento" value="${imoveis[identifier - 1].complemento}">
        </div>
        <div>
            <label for="bairro">Bairro</label><br>
            <input type="text"  id="bairro" value="${imoveis[identifier - 1].bairro}">
        </div>
        <div>
            <label for="Cidade">Cidade</label><br>
            <input type="text"  id="cidade" value="${imoveis[identifier - 1].cidade}">
        </div>


    </div>

    <div class="c">
        <div>
            <label for="cep">CEP</label><br>
            <input type="text"  id="cep" maxlength="9" onkeyup="handleZipCode(event)" value="${imoveis[identifier - 1].cep}">
        </div>
        <div>
            <label for="uf">UF</label><br>
            <input type="text"  id="uf" value="${imoveis[identifier - 1].uf}">
        </div>

    </div>


    <div class="d">
        <h4>TIPO
            <hr>
        </h4>
        <h4>STATUS
            <hr>
        </h4>
    </div>

    <div class="espacamento">
        <select name="tipo" id="tipo">
            <option disabled selected>Selecione</option>
            <option value="comercial" id="comercial" >Comercial</option>
            <option value="Residencial" id="residencial">Residencial</option>
        </select>

        <label class="switch">
            <input type="checkbox" id="slider" value="" onclick="valorSlider(${identifier})">
            <span class="slider round"></span>
            <label for="span"></label>
        </label>
        <h4 id="s"></h4>

    </div>

    <div class="alinhar_botoes">
        <button onclick="fecharModal()"><img src="../src/icones/voltar.png" alt=""></button>
        <button onclick="salvarAlteracaoImovel(${identifier})"><img src="../src/icones/alterar.png" alt=""></button>
    </div>

  `
  checkbox = document.getElementById('slider')
  h4 = document.getElementById('s')
  if (imoveis[identifier - 1].status == "ativo") {
    checkbox.checked = true;
    h4.innerHTML = "ativo"
  }
  if (imoveis[identifier - 1].status == "inativo") {
    checkbox.checked = false;
    h4.innerHTML = "inativo"

  }


  var selectComecial = document.getElementById('comercial');
  var selectResidencial = document.getElementById('residencial')
  if (imoveis[identifier - 1].tipo_imovel == "comercial") {
    selectComecial.selected = true
  }
  else { selectResidencial.selected = true }


}


function valorSlider(identifier) {

  var checkbox = document.getElementById('slider')
  var h4 = document.getElementById('s');

  if (checkbox.checked == true) {
    h4.innerHTML = "ativo"
    imoveis[identifier - 1].status = "ativo"
  }

  else {

    h4.textContent = "inativo"
    imoveis[identifier - 1].status = "inativo"
  }

}


function salvarAlteracaoImovel(identifier) {

  var tipoLogradouro = document.getElementById('tipoLogradouro').value;
  var logradouro = document.getElementById('Logradouro').value
  var tipo_imovel = document.getElementById('tipo').value;
  var complemento = document.getElementById('complemento').value;
  var numero = document.getElementById('numero').value
  var bairro = document.getElementById('bairro').value;
  var cidade = document.getElementById('cidade').value;
  var cep = document.getElementById('cep').value;
  var uf = document.getElementById('uf').value;
  var status = document.getElementById('slider').checked;

  if (tipoLogradouro == "" || logradouro == "" || tipo_imovel == "" || complemento == "" || numero == "" || bairro == "" || cidade == "" || cep == "" || uf == "") {
    alert("Um ou mais campos estão vazios")
  }
  else {
    imoveis[identifier - 1].tipo_imovel = tipo_imovel;
    imoveis[identifier - 1].tipo_logradouro = tipoLogradouro;
    imoveis[identifier - 1].logradouro = logradouro;
    imoveis[identifier - 1].numero = numero;
    imoveis[identifier - 1].complemento = complemento;
    imoveis[identifier - 1].bairro = bairro;
    imoveis[identifier - 1].cidade = cidade;
    imoveis[identifier - 1].cep = cep;
    imoveis[identifier - 1].uf = uf;

    if (status) {
      imoveis[identifier - 1].status = "ativo";
    }
    else {
      imoveis[identifier - 1].status = "inativo";
    }

    fecharModal()
    iniciar_banco_imoveis()
    alert('Alteração realizada com sucesso!')
  }



}


function iniciar_banco_imoveis() {

  //const resposta = await fetch('imoveis.json');
  //const imoveis = await resposta.json()
  localStorage.setItem("imoveis", JSON.stringify(imoveis));
  let elemento = document.getElementById('table_list');
  let texto = '';

  for (let i = 0; i < imoveis.length; i++) {
    identifier = imoveis[i].id
    texto += `<div class="div_table_row"> 
        <div class="table_icon1">
          <img 
            class="icon"
            src="../src/icones/icon_imoveis_selecionado.png"
            alt=""
          />
        </div>

        <div class="table_id">${imoveis[i].id}</div>

        <div class="table_name">${imoveis[i].tipo_imovel}</div>

        <div class="table_property">${imoveis[i].tipo_logradouro} ${imoveis[i].logradouro}, ${imoveis[i].numero}, ${imoveis[i].complemento}</div>

        <div class="table_status">${imoveis[i].vacancia}</div>

        <div class="table_status">${imoveis[i].status}</div>

        <div class="table_button">
          <button
            class="open_button"
            onclick="abrirModalAlteracao(${identifier})">
            <img
              class="open_icon"
              src="../src/icones/icon_ver_dados.png"
              alt=""
            />
          </button>
        </div>
      </div>`
  }

  elemento.innerHTML = texto;

}







