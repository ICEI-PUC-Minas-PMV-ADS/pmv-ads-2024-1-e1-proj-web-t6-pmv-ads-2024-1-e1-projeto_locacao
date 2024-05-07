//coletando elemento fade:
var ElementoFade = document.getElementById("fade")



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


