


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
    var iframeConteudo = iframe1.contentWindow;


    // Obtém o botão do iframe
    var botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog1.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });
};

iframe2.onload = function() {
    // Obtém o conteúdo do iframe
    var iframeConteudo = iframe2.contentWindow;


    // Obtém o botão do iframe
    var botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog2.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });
};


iframe3.onload = function() {
    // Obtém o conteúdo do iframe
    var iframeConteudo = iframe3.contentWindow;


    // Obtém o botão do iframe
    var botaoDoIframe = iframeConteudo.document.getElementById("voltar_principal");

    // Adiciona um evento de clique ao botão do iframe
    botaoDoIframe.addEventListener("click", function() {
        dialog3.removeAttribute('open');
        ElementoFade.classList.remove('escuro');
    });
};

function imoveis_init(){
    localStorage.clear()
    iniciar_banco_imoveis()
   
    
}


function iniciar_banco_imoveis(){

    let imoveis = [
        {
            id: 0,
            tipo_imovel: "Comercial",
            tipo_logradouro: "Avenida",
            logradouro: "beatriz alvarenga",
            numero: "319",
            complemento: "apto 208",
            bairro:"centro",
            cidade:"belo horizonte",
            estado:"MG",
            cep:"31140258",
            vacancia:"locado",
            status:"ativo"
        },

        {
            id: 1,
            tipo_imovel: "residencial",
            tipo_logradouro: "rua",
            logradouro: "são joao",
            numero: "39",
            complemento: "casa",
            bairro:"sagrda famila",
            cidade:"belo horizonte",
            estado:"MG",
            cep:"31140258",
            vacancia:"locado",
            status:"ativo"
        },
        
        {
            id: 2,
            tipo_imovel: "residencial",
            tipo_logradouro: "rua",
            logradouro: "são josé",
            numero: "500",
            complemento: "casa",
            bairro:"centro",
            cidade:"franca",
            estado:"SP",
            cep:"31140222",
            vacancia:"locado",
            status:"ativo"
        }
        
        
            
    ]
    
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

function FiltrarImoveis(){

    // coletando os elementos do filtro de imóveis:
    let id_imovel = document.getElementById('id')
    let filtro_tipo_imovel = document.getElementById('tipo')
    let filtro_logradouro = document.getElementById('Logradouro')
    let filtro_cidade = document.getElementById('cidade')
    let filtro_cep = document.getElementById('cep')
    //--------------------------------------------------//
    for ( let i = 0;i <imoveis.length;i++){
        if(id_imovel == imoveis[i]){
            
        }




    }



}
