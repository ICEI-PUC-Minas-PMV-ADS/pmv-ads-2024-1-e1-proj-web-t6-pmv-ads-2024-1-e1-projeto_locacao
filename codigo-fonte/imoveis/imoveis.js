var imoveis = [
  {
    "id": 1,
    "tipo_imovel": "COMERCIAL",
    "tipo_logradouro": "AVENIDA",
    "logradouro": "BEATRIZ ALVARENGA",
    "numero": "319",
    "complemento": "APTO 208",
    "bairro": "CENTRO",
    "cidade": "BELO HORIZONTE",
    "uf": "MG",
    "cep": "31140259",
    "vacancia": "LOCADO",
    "status": "ATIVO"
  },

  {
    "id": 2,
    "tipo_imovel": "RESIDENCIAL",
    "tipo_logradouro": "RUA",
    "logradouro": "SÃO JOÃO",
    "numero": "39",
    "complemento": "CASA",
    "bairro": "SAGRADA FAMILIA",
    "cidade": "belo horizonte",
    "uf": "MG",
    "cep": "31140258",
    "vacancia": "LOCADO",
    "status": "INATIVO"
  },

  {
    "id": 3,
    "tipo_imovel": "RESIDENCIAL",
    "tipo_logradouro": "RUA",
    "logradouro": "SÃO JOSÉ",
    "numero": "500",
    "complemento": "CASA",
    "bairro": "CENTRO",
    "cidade": "FRANCA",
    "uf": "SP",
    "cep": "31140420",
    "vacancia": "LOCADO",
    "status": "ATIVO"
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
          <input type="text" id="id" name="id">
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
          <input type="text" name="cep" id="cep">
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
  elementoLista.innerHTML = '';
  let imoveiss = imoveis;
  //var texto = '';
  //const resposta = await fetch('imoveis.json');
  //var imoveis = await resposta.json();
  var id = document.getElementById('id').value;
  var tipo = document.getElementById('tipo').value.toUpperCase();
  var logradouro = document.getElementById('Logradouro').value.toUpperCase();
  var cidade = document.getElementById('cidade').value.toUpperCase();
  var cep = document.getElementById('cep').value.toUpperCase();
  var status = document.querySelector('input[name=radio1]:checked').value.toUpperCase();
  var vacancia = document.querySelector('input[name=radio2]:checked').value.toUpperCase();

  //--------------------------------------------//
  // abaixo faz-se a verificação se os valores digitados estão presentes no banco de dados

  if (id != 0) {

    imoveiss = imoveiss.filter((imovel) => imovel.id == id);
  }

  if (tipo != "") {

    imoveiss = imoveiss.filter((imovel) => imovel.tipo_imovel == tipo);
  }

  if (logradouro != "") {
    imoveiss = imoveiss.filter((imovel) => imovel.logradouro == logradouro);
  }

  if (cidade != "") {
    imoveiss = imoveiss.filter((imovel) => imovel.cidade == cidade);
  }

  if (cep != "") {
    imoveiss = imoveiss.filter((imovel) => imovel.cep == cep);
  }

  if (status != "TODOS") {

    imoveiss = imoveiss.filter((imovel) => imovel.status == status);
  }
  if (vacancia != "TODOS") {
    imoveiss = imoveiss.filter((imovel) => imovel.vacancia == vacancia);
  }

  console.log(elementoLista)
  //localStorage.setItem("imoveiss", JSON.stringify(imoveiss));

  for (let i = 0; i < imoveiss.length; i++) {
    var identifier = imoveiss[i]
    elementoLista.innerHTML += `<div class="div_table_row"> 
      <div class="table_icon1">
        <img 
          class="icon"
          src="../src/icones/icon_imoveis_selecionado.png"
          alt=""
        />
      </div>

      <div class="table_id">${imoveiss[i].id}</div>

      <div class="table_name">${imoveiss[i].tipo_imovel}</div>

      <div class="table_property">${imoveiss[i].tipo_logradouro} ${imoveiss[i].logradouro}, ${imoveiss[i].numero}, ${imoveiss[i].complemento}</div>

      <div class="table_status">${imoveiss[i].vacancia}</div>

      <div class="table_status">${imoveiss[i].status}</div>

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
                <input type="text" , id="cep">
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

  if (tipo != "Selecione" && tipoLogradouro != null && Logradouro != null && numero != null && complemento != null && bairro != null && cidade != null && uf != null && cep != null) {
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
        "vacancia": "VAGO",
        "status": "ATIVO"

      }
    )
    iniciar_banco_imoveis()
  }

  else alert("falta preencher algum campo")

}



function abrirModalAlteracao(identifier) {
  if(imoveis[identifier-1].status=="ATIVO"){
    var checado = "checked"
  }
  else {checado=""}
  
  console.log(identifier)
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
            <label for="tipoLogradouro" id="label1">Tipo Logradouro</label><br>
            <input type="text" ,id="tipoLogradouro", value="${imoveis[identifier-1].tipo_logradouro}">
        </div>
        <div class="a2">
            <label for="Logradouro" id="label2">Logradouro</label><br>
            <input type="text" , id="Logradouro", value="${imoveis[identifier-1].logradouro}">
        </div>
        <div class="a3">
            <label for="numero" id="label3">Número</label><br>
            <input type="text" , id="numero", value ="${imoveis[identifier-1].numero}">
        </div>
    </div>

    <div class="b">
        <div>
            <label for="complemento">complemento</label><br>
            <input type="text" , id="complemento", value="${imoveis[identifier-1].complemento}">
        </div>
        <div>
            <label for="bairro">Bairro</label><br>
            <input type="text" , id="bairro" value="${imoveis[identifier-1].bairro}">
        </div>
        <div>
            <label for="Cidade">Cidade</label><br>
            <input type="text" , id="cidade" value="${imoveis[identifier-1].cidade}">
        </div>


    </div>

    <div class="c">
        <div>
            <label for="cep">CEP</label><br>
            <input type="text" , id="cep" value="${imoveis[identifier-1].cep}">
        </div>
        <div>
            <label for="uf">UF</label><br>
            <input type="text" , id="uf" value="${imoveis[identifier-1].uf}">
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
            <option value="comercial">Comercial</option>
            <option value="Residencial">Residencial</option>
        </select>

        <label class="switch">
            <input type="checkbox" id="slider" ${checado} value="" onclick="valorSlider(${identifier},${checado})">
            <span class="slider round"></span>
            <label for="span"></label>
        </label>
        <h4 id="s"></h4>

    </div>

    <div class="alinhar_botoes">
        <button onclick="fecharModal()"><img src="../src/icones/voltar.png" alt=""></button>
        <button onclick="alterarImovel()"><img src="../src/icones/alterar.png" alt=""></button>
    </div>

  `
  var s = document.getElementById('s')
  s.innerHTML=imoveis[identifier-1].status

}

function valorSlider(identifier){
  checado = document.querySelectorAll('input[id="slider"]');
  console.log(checado.value)
  if(checkbox=="true"){
    s.innerHTML=imoveis[identifier-1].status
    
  }
  

}



function alterarImovel() {
  


}


function iniciar_banco_imoveis() {

  //const resposta = await fetch('imoveis.json');
  //const imoveis = await resposta.json()
  localStorage.setItem("imoveis", JSON.stringify(imoveis));
  let elemento = document.getElementById('table_list');
  let texto = '';

  for (let i = 0; i < imoveis.length; i++) {
      identifier=imoveis[i].id
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
     //${tipo},${tipoLogradouro},${Logradouro},${numero},${complemento},${bairro},${cidade},${cep},${uf}
  }

  elemento.innerHTML = texto;

}







