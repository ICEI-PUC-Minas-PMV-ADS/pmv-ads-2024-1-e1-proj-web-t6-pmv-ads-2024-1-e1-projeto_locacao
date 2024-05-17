
//coletando elemento fade:
var ElementoFade = document.getElementById("fade")

//coletando body:
var bodyy =document.querySelector("body");

// coletando os dialogs:
var dialog1 = document.getElementById("modal1");
var dialog2 = document.getElementById("modal2");
var dialog3 = document.getElementById("modal3");
//---------------------------------------------

//coletando os iframes dos dialog:
const iframe1 = document.getElementById("meuIframeFiltrar");
const iframe2 = document.getElementById("meuIframeadicionar");
const iframe3 = document.getElementById('meuIframeAlterar')
//-------------------------------------------------------------


// Ações dos botões:

function abrirModalFiltro(){
    
    ElementoFade.classList.add("escuro");
    dialog3.removeAttribute('open');
    dialog2.removeAttribute('open');
    dialog1.setAttribute('open', 'true');
    
}


function abrirModalAdicao(){
    ElementoFade.classList.add("escuro");
    dialog3.removeAttribute('open');
    dialog1.removeAttribute('open');
    dialog2.setAttribute('open', 'true');
}

function abrirModalAlteracao(){
    ElementoFade.classList.add("escuro");
    dialog1.removeAttribute('open');
    dialog2.removeAttribute('open');
    dialog3.setAttribute('open', 'true');
}



//----------------------------------------------

iframe1.onload = function() {
    // Obtém o conteúdo do iframe
    let iframeConteudo = iframe1.contentWindow;
    

    // Obtém o botão do iframe
    let botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog1.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });


    
};

iframe2.onload = function() {
    // Obtém o conteúdo do iframe
    let iframeConteudo = iframe2.contentWindow;


    // Obtém o botão do iframe
    let botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog2.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });
};


iframe3.onload = function() {
    // Obtém o conteúdo do iframe
    let iframeConteudo = iframe3.contentWindow;


    // Obtém o botão do iframe
    let botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog3.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });
};


async function iniciar_banco_imoveis(){

    const resposta = await fetch('imoveis.json');
    const imoveis = await resposta.json()

    localStorage.setItem("imoveis", JSON.stringify(imoveis));
    



    var elemento = document.getElementById('table_list')
    var texto = '';
    for ( let i = 0;i <imoveis.length;i++){

        texto += `<div class="div_table_row"> \n
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
            onclick="abrirModalAlteracao()"
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
    elemento.innerHTML = texto;
    
}



 async function FiltrarImoveis(){

    const resposta = await fetch('imoveis.json');
    var imoveis = await resposta.json()
    var id = document.getElementById('id')
    var tipo = document.getElementById('tipo')
    var logradouro = document.getElementById('Logradouro')
    var cidade = document.getElementById('cidade')
    var cep = document.getElementById('cep')
    
    if(id.nodeValue==null && tipo.nodeValue==null && logradouro.nodeValue==null && cidade.nodeValue==null && cep.nodeValue==null){
        iniciar_banco_imoveis()
    }











}
