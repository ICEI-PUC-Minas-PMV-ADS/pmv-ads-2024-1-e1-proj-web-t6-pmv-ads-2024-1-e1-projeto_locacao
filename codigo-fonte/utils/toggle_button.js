function troca_texto_requisicoes() {
    let toggle = document.querySelector(".checkbox input")
    let texto = document.querySelector(".checkbox label")
    
    if(toggle.checked) {
        texto.innerHTML = "ATENDIDA"
    } else {
        texto.innerHTML = "EM ABERTO"
    }
}

function troca_texto_usuarios() {
    let toggle = document.querySelector(".checkbox input")
    let texto = document.querySelector(".checkbox label")
    
    if(toggle.checked) {
        texto.innerHTML = "ATIVO"
    } else {
        texto.innerHTML = "INATIVO"
    }
}

function troca_texto_contratos() {
    let toggle = document.querySelector("#checkbox input")
    let texto = document.querySelector("#checkbox label")
    
    if(toggle.checked) {
        texto.innerHTML = "ATIVO"
    } else {
        texto.innerHTML = "INATIVO"
    }
}