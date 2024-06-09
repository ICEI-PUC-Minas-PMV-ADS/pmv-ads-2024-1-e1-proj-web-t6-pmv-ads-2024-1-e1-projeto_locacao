usuario()
//coletando elemento fade:
var ElementoFade = document.getElementById("fade")

//coletando table_list:
var elementoLista = document.getElementById('table_list')

// coletando os dialogs:
var dialog = document.getElementById("modal");

//-------------------------------------------------------------


// Ações dos botões:


function fecharModal() {

  ElementoFade.classList.remove('escuro');
  dialog.classList.remove('adicao')
  dialog.classList.remove('filtro')
  
  dialog.close()

}

function abrirModalFiltro() {

  ElementoFade.classList.add("escuro");
  dialog.classList.add('filtro')

  dialog.setAttribute('open', 'true');
  dialog.innerHTML = `

  <h1>Filtro</h1>

  <h4>DADOS DO IMÓVEL</h4>
  <hr>

  <div class="id_tipo">

          
          <label for="id">ID <br>
          <input type="number" id="id" name="id">
          </label>
        
          <label for="tipo">TIPO<br>
          <input type="text" name="tipo" id="tipo">
          </label>
    

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

          <label class="container">TODOS
              <input type="radio" checked="checked" name="radio2" id="radio2" value="todos">
              <span class="checkmark"></span>
          </label>
          <label class="container">LOCADO
              <input type="radio" name="radio2" id="radio2" value="locado">
              <span class="checkmark"></span>
          </label>
          <label class="container">VAGO
              <input type="radio" name="radio2" id="radio2" value="vago">
              <span class="checkmark"></span>
          </label>

      </div>

  </div>

  <div class="alinhar_botoes">
      <button class="buttons" onclick="fecharModal()"> <img class="icon2" src="../src/icones/icon_voltar.png" alt="" />
      VOLTAR</button>
      <button id="filtrar_imoveis"onclick="filtrarImoveis()"><img class="icon2" src="../src/icones/icon_filtrar.png" alt="" />
      FILTRAR</button>
  </div>
  `

}

function abrirModalFiltro() {
  let popup = document.getElementById("popup_filtrar")

  popup.showModal()
}

function fecharModalFiltro() {
  let popup = document.getElementById("popup_filtrar")

  popup.close()
}

function filtrarImoveis() {
  var filtrado = JSON.parse(localStorage.getItem("imoveis"));
  var identifier;
  var id = document.getElementById('id').value;
  var tipo = document.getElementById('tipo').value;
  var logradouro = document.getElementById('Logradouro').value;
  var cidade = document.getElementById('cidade').value;
  var cep = document.getElementById('cep').value;
  var status = document.querySelector('input[name=radio1]:checked').value.toLowerCase();
  var vacancia = document.querySelector('input[name=radio2]:checked').value.toLowerCase();

  //--------------------------------------------//
  // abaixo faz-se a verificação se os valores digitados estão presentes no banco de dados

  if (id != 0) {

    filtrado = filtrado.filter((imovel) => imovel.id == id);
  }

  if (tipo != "todos") {

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
    fecharModalFiltro()
    show_snackbar("body #snackbar_error", "Nenhum imóvel foi encontrao.")
  }

  else {
    var elementoLista = document.getElementById('table_list');
    elementoLista.innerHTML = ""
    for (let i = 0; i < filtrado.length; i++) {

    let cor,cor2;
    cor="";

    if(filtrado[i].vacancia=="vago") {
      cor="verde";
    }
    else{
      cor='cinza';
    }

    if(filtrado[i].status=="ativo") {
      cor2="verde";
    }
    else{
      cor2='cinza';
    }
      identifier = filtrado[i].id
      elementoLista.innerHTML += `<div class="div_table_row"> 
        <div class="table_icon1">
          <img 
            class="icon"
            src="../src/icones/icon_imoveis_selecionado.png"
            alt=""
          />
        </div>
  
        <div class="table_name">${filtrado[i].tipo_imovel}</div>
  
        <div class="table_property">${filtrado[i].tipo_logradouro} ${filtrado[i].logradouro}, ${filtrado[i].numero}, ${filtrado[i].complemento}</div>
  
        <div class="table_status">
            <div class=${filtrado[i].vacancia == "vago" ? "status_active" : "status_inactive"}>
                <p>
                    ${filtrado[i].vacancia == "vago"  ? "Vago" : "Locado"}
                </p>
            </div>
        </div> 
        <div class="table_status">
            <div class=${filtrado[i].status == "ativo" ? "status_active" : "status_inactive"}>
                <p>
                    ${filtrado[i].status == "ativo"  ? "Ativo" : "Inativo"}
                </p>
            </div>
        </div>
  
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
        </div>
        <hr class="divisor">`

    }
    fecharModalFiltro()
  }
}

function abrirModalAdicao() {
  let body = document.querySelector("body")

  let verifica_popups = document.querySelectorAll("#popup_novo_imovel")

  if (verifica_popups.length > 0) {
      for (var i = 0; i < verifica_popups.length; i++) {
          verifica_popups[i].outerHTML = ""
      }
  }
  let novo_id = JSON.parse(localStorage.getItem('imoveis')).length + 1

  let proprietarios = JSON.parse(localStorage.getItem('proprietarios'));

  let filtradosProprietarios = proprietarios.map((proprietario)=>{
    return `<option value="${proprietario.nome}">${proprietario.nome}</option>`
  }).join('')

  body.innerHTML += `
        <dialog id="popup_novo_imovel" class="popup">
            <div>
                <h1>Novo Imóvel - ${novo_id}</h1>
                <p>PROPRIETÁRIO</p>
                <hr>
                <label for="locatario">NOME</label>
                <select name="locatario" class="selectSuccess" id ="proprietario_novo">
                  <option value="vazio">-</option>
                  ${filtradosProprietarios}
                </select>
                <p>ENDEREÇO</p>
                <hr>
                <div id="endereco">
                    <div class="div_tipo_logradouro">
                        <label for="tipo_logradouro">TIPO LOGRADOURO*</label>
                        <select name="tipo_logradouro" id="tipo_logradouro_novo" class="selectSuccess" onblur="return set_input_success(this)">
                            <option value="vazio">-</option>
                            <option value="avenida">Avenida</option>
                            <option value="praça">Praça</option>
                            <option value="rua">Rua</option>
                        </select>
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO*</label>
                        <input type="text" name="logradouro" id="logradouro_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO*</label>
                        <input type="text" name="numero" id="numero_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO*</label>
                        <input type="text" name="bairro" id="bairro_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE*</label>
                        <input type="text" name="cidade" id="cidade_novo" class="inputSuccess" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP*</label>
                        <input type="text" name="cep" id="cep_novo" class="inputSuccess" placeholder="xxxxx-xxx" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)">
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF*</label>
                        <input type="text" name="uf" id="uf_novo" class="inputSuccess" onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)">
                    </div>
                </div>
                <p>TIPO</p>
                <hr>
                <select name="tipo" id="tipo_novo" class="selectSuccess">
                  <option disabled selected>-</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Residencial">Residencial</option>
                </select>

                
                <div class="buttons">
                    <button onclick="fecharModalAdicao()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="novoImovel()">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        SALVAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("popup_novo_imovel")

    popup.showModal()
}

function fecharModalAdicao() {
  let popup = document.getElementById("popup_novo_imovel")

  popup.close()
}

function novoImovel() {
  imoveis = JSON.parse(localStorage.getItem('imoveis'))
  var lenghtImoveis = imoveis.length
  var proprietario = document.getElementById('proprietario_novo').value
  var tipo = document.getElementById('tipo_novo').value
  var tipoLogradouro = document.getElementById('tipo_logradouro_novo').value
  var Logradouro = document.getElementById('logradouro_novo').value
  var numero = document.getElementById('numero_novo').value
  var complemento = document.getElementById('complemento_novo').value
  var bairro = document.getElementById('bairro_novo').value
  var cidade = document.getElementById('cidade_novo').value
  var cep = document.getElementById('cep_novo').value.replace(/\D/g, '')
  var uf = document.getElementById('uf_novo').value

  if (tipo != "vazio" && tipoLogradouro != "" && Logradouro != "" && numero != "" && complemento != "" && bairro != "" && cidade != "" && uf != "" && cep != "") {
    imoveis.push(
      {
        "proprietario": proprietario,
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
    fecharModalAdicao();
    carregar_banco_imoveis();
  }

  else show_snackbar("#popup_novo_imovel #snackbar_error", "Falta preencher algum campo.")

}

function abrirModalAlteracao(identifier) {

  var imoveis = JSON.parse(localStorage.getItem("imoveis"));

  dialog.innerHTML = ""
  ElementoFade.classList.add("escuro");
  dialog.classList.add('adicao');
  dialog.setAttribute('open', 'true');
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
        <button class="buttons" onclick="fecharModal()"><img class="icon2" src="../src/icones/icon_voltar.png" alt="" />
        VOLTAR</button>
        <button onclick="salvarAlteracaoImovel(${identifier})"><img class="icon2" src="../src/icones/icon_alterar.png" alt="" />
        ALTERAR</button></button>
    </div>

  `
  checkbox = document.getElementById('slider')

  let h4 = document.getElementById('s')
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

function abrirModalAlteracao(identifier) {

  var imoveis = JSON.parse(localStorage.getItem("imoveis"));

  let body = document.querySelector("body")

  let verifica_popups = document.querySelectorAll("#popup_dados_imovel")

  if (verifica_popups.length > 0) {
      for (var i = 0; i < verifica_popups.length; i++) {
          verifica_popups[i].outerHTML = ""
      }
  }

  body.innerHTML += `
        <dialog id="popup_dados_imovel" class="popup">
            <div>
                <h1>Dados do Imóvel - ${imoveis[identifier - 1].id}</h1>
                <p>PROPRIETÁRIO</p>
                <hr>
                <div id="div_proprietario">
                  <label for="proprietario">NOME</label>
                  <input type="text" name="proprietario" id="proprietario_dados" value="${imoveis[identifier - 1].proprietario}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                </div>
                <p>ENDEREÇO</p>
                <hr>
                <div id="endereco">
                    <div class="div_tipo_logradouro">
                        <label for="tipo_logradouro_dados">TIPO LOGRADOURO*</label>
                        <select name="tipo_logradouro_dados" id="tipo_logradouro_dados" class="selectSuccess" onblur="return set_input_success(this)" disabled>
                            <option value="vazio">-</option>
                            <option value="avenida" ${imoveis[identifier - 1].tipo_logradouro == "avenida" ? "selected" : ""}>Avenida</option>
                            <option value="praça" ${imoveis[identifier - 1].tipo_logradouro == "praca" ? "selected" : ""}>Praça</option>
                            <option value="rua" ${imoveis[identifier - 1].tipo_logradouro == "rua" ? "selected" : ""}>Rua</option>
                        </select>
                    </div>
                    <div class="div_logradouro">
                        <label for="logradouro">LOGRADOURO*</label>
                        <input type="text" name="logradouro" id="logradouro_dados" value="${imoveis[identifier - 1].logradouro}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_numero">
                        <label for="numero">NÚMERO*</label>
                        <input type="text" name="numero" id="numero_dados" value="${imoveis[identifier - 1].numero}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_complemento">
                        <label for="complemento">COMPLEMENTO</label>
                        <input type="text" name="complemento" id="complemento_dados" value="${imoveis[identifier - 1].complemento}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_bairro">
                        <label for="bairro">BAIRRO*</label>
                        <input type="text" name="bairro" id="bairro_dados" value="${imoveis[identifier - 1].bairro}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_cidade">
                        <label for="cidade">CIDADE*</label>
                        <input type="text" name="cidade" id="cidade_dados" value="${imoveis[identifier - 1].cidade}" class="inputSuccess" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_cep">
                        <label for="cep">CEP*</label>
                        <input type="text" name="cep" id="cep_dados" value="${imoveis[identifier - 1].cep}" class="inputSuccess" placeholder="xxxxx-xxx" onkeyup="return mascara_cep(this)" maxlength="9" onblur="return set_input_success(this)" readonly>
                    </div>
                    <div class="div_uf">
                        <label for="uf">UF*</label>
                        <input type="text" name="uf" id="uf_dados" value="${imoveis[identifier - 1].uf.toUpperCase()}" class="inputSuccess" onkeyup="return mascara_uf(this)" maxlength="2" onblur="return set_input_success(this)" readonly>
                    </div>
                </div>
                <div>
                  <div>
                    <p>TIPO</p>
                    <hr>
                    <select name="tipo" id="tipo_dados" class="selectSuccess" disabled>
                      <option disabled selected>-</option>
                      <option value="Comercial" ${imoveis[identifier - 1].tipo_imovel == "Comercial" ? "selected" : ""}>Comercial</option>
                      <option value="Residencial" ${imoveis[identifier - 1].tipo_imovel == "Residencial" ? "selected" : ""}>Residencial</option>
                    </select>
                  </div>
                  <div>
                        <p>STATUS</p>
                        <hr>
                        <div id="checkbox">
                            <input type="checkbox" id="status_dados" onchange="troca_texto_contratos()" ${imoveis[identifier - 1].status == "ativo"? 'checked="checked"' : ""} disabled="true">
                            <label for="" class="text">${imoveis[identifier - 1].status == "ativo" ? 'ATIVO' : "INATIVO"}</label>
                        </div>
                    </div>
                </div>

                
                <div class="buttons">
                    <button onclick="fecharModalAlteracao()">
                        <img class="icon" src="../src/icones/icon_voltar.png" alt="">
                        VOLTAR
                    </button>
                    <button onclick="habilitaAlteracao(${identifier})">
                        <img class="icon" src="../src/icones/icon_salvar.png" alt="">
                        ALTERAR
                    </button>
                </div>
            </div>
            <div id="snackbar_error" class="error"></div>
            <div id="snackbar_success" class="success"></div>
        </dialog>
    `

    let popup = document.getElementById("popup_dados_imovel")

    popup.showModal()
}

function fecharModalAlteracao() {
  let popup = document.getElementById("popup_dados_imovel")

  popup.close()
}

function habilitaAlteracao(identifier) {
  let buttons = document.querySelector("#popup_dados_imovel .buttons")

  buttons.removeChild(buttons.children[1])

  buttons.innerHTML += `
      <button onclick="salvarAlteracaoImovel(${identifier})">
          <img class="icon" src="../src/icones/icon_salvar.png" alt="">
          SALVAR
      </button>
  `
  document.getElementById('tipo_dados').disabled = false
  document.getElementById('tipo_logradouro_dados').disabled = false
  document.getElementById('logradouro_dados').readOnly = false
  document.getElementById('numero_dados').readOnly = false
  document.getElementById('complemento_dados').readOnly = false
  document.getElementById('bairro_dados').readOnly = false
  document.getElementById('cidade_dados').readOnly = false
  document.getElementById('cep_dados').readOnly = false
  document.getElementById('uf_dados').readOnly = false
  document.getElementById('status_dados').disabled = false
}

function salvarAlteracaoImovel(identifier) {
  var imoveis = JSON.parse(localStorage.getItem("imoveis"));
  var proprietario = document.getElementById('proprietario_dados').value;
  var tipoLogradouro = document.getElementById('tipo_logradouro_dados').value;
  var logradouro = document.getElementById('logradouro_dados').value
  var tipo_imovel = document.getElementById('tipo_dados').value;
  var complemento = document.getElementById('complemento_dados').value;
  var numero = document.getElementById('numero_dados').value
  var bairro = document.getElementById('bairro_dados').value;
  var cidade = document.getElementById('cidade_dados').value;
  var cep = document.getElementById('cep_dados').value;
  var uf = document.getElementById('uf_dados').value;
  var status = document.getElementById('status_dados').checked;

  if (tipoLogradouro == "vazio" || logradouro == "" || tipo_imovel == null || complemento == "" || numero == "" || bairro == "" || cidade == "" || cep == "" || uf == "") {
    show_snackbar("#popup_dados_imovel #snackbar_error", "Um ou mais campos estão vazios.")
  }
  else {
    imoveis[identifier - 1].proprietario = proprietario;
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
    localStorage.setItem('imoveis', JSON.stringify(imoveis))

    document.getElementById('tipo_dados').disabled = true
    document.getElementById('tipo_logradouro_dados').disabled = true
    document.getElementById('logradouro_dados').readOnly = true
    document.getElementById('numero_dados').readOnly = true
    document.getElementById('complemento_dados').readOnly = true
    document.getElementById('bairro_dados').readOnly = true
    document.getElementById('cidade_dados').readOnly = true
    document.getElementById('cep_dados').readOnly = true
    document.getElementById('uf_dados').readOnly = true
    document.getElementById('status_dados').disabled = true

    let buttons = document.querySelector("#popup_dados_imovel .buttons")

    buttons.removeChild(buttons.children[1])

    buttons.innerHTML += `
      <button onclick="habilitaAlteracao(${identifier})">
          <img class="icon" src="../src/icones/icon_salvar.png" alt="">
          ALTERAR
      </button>
    `

    carregar_banco_imoveis()
    show_snackbar("#popup_dados_imovel #snackbar_success", "Alteração realizada com sucesso!")
  }
}

function carregar_banco_imoveis() {

  var imoveis = JSON.parse(localStorage.getItem("imoveis"));
  let elemento = document.getElementById('table_list');
  let texto = '';

  for (let i = 0; i < imoveis.length; i++) {
    let cor,cor2;
    cor="";

    if(imoveis[i].vacancia=="vago") {
      cor="verde";
    }
    else{
      cor='cinza';
    }

    if(imoveis[i].status=="ativo") {
      cor2="verde";
    }
    else{
      cor2='cinza';
    }
    

    identifier = imoveis[i].id
    texto = texto + `<div class="div_table_row"> 
        <div class="table_icon1">
          <img 
            class="icon"
            src="../src/icones/icon_imoveis_selecionado.png"
            alt=""
          />
        </div>

        <div class="table_name">${imoveis[i].tipo_imovel}</div>

        <div class="table_property">${imoveis[i].tipo_logradouro} ${imoveis[i].logradouro}, ${imoveis[i].numero}, ${imoveis[i].complemento}</div>

        <div class="table_status">
            <div class=${imoveis[i].vacancia == "vago" ? "status_active" : "status_inactive"}>
                <p>
                    ${imoveis[i].vacancia == "vago"  ? "Vago" : "Locado"}
                </p>
            </div>
        </div> 
        <div class="table_status">
            <div class=${imoveis[i].status == "ativo" ? "status_active" : "status_inactive"}>
                <p>
                    ${imoveis[i].status == "ativo"  ? "Ativo" : "Inativo"}
                </p>
            </div>
        </div>
        <div class="table_button">
          <button class="open_button" onclick="abrirModalAlteracao(${identifier})"><img class="open_icon" src="../src/icones/icon_ver_dados.png" alt=""/>
          </button>
        </div>
        
      </div>

      <hr class="divisor">`

      elemento.innerHTML = texto;
      


  }

  //elemento.innerHTML = texto;


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

function formatar_cep(cep) {
  var cpfPattern = cep.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')

  return cpfPattern
}

function mascara_cep(e) {

  e.value = formatar_cep(e.value)

}

function mascara_uf(e) {
  var value = e.value

  e.value = value.toUpperCase()
}

function set_input_success(e) {
  e.className = e.tagName == "INPUT" ? "inputSuccess" : "selectSuccess"
}

