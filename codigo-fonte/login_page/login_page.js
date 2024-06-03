

//Função para abrir popup Esqueci Minha Senha
var open_primeiro_popup = document.getElementById("btn_popup_esqueceu_senha");
open_primeiro_popup.addEventListener("click", function () {
  var chama_popup = document.getElementById("popup_esqueceu_senha");
  chama_popup.showModal();
});

// Função para voltar ao login após o envio da senha padrão ao e-mail informado
var btn_volta = document.getElementById("btn_voltar");
btn_volta.addEventListener("click", function () {
  let chama_popup = document.getElementById("popup_esqueceu_senha");
  let voltar_login = document.getElementById("enviar_senha");
  chama_popup.close();
  voltar_login.close();
});

//Função de autenticação do usuario (ativo, inativo)
function verifica_usuario() {
  let pega_usuario = document.getElementById("email");
  let pega_senha = document.getElementById("senha");
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let autenticado = false;
  let primeiro_acesso = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (
      pega_usuario.value == usuarios[i].email &&
      pega_senha.value == usuarios[i].senha &&
      usuarios[i].status
    ) {
      autenticado = true;
      primeiro_acesso = usuarios[i].primeiro_acesso;
      localStorage.setItem("usuario_autenticado", JSON.stringify(usuarios[i]));
    }
  }
  if (autenticado && primeiro_acesso) {
    abrir_popup_primeiro_acesso();
    // let popup_primeiro_acesso = document.getElementById(
    //   "popup_primeiro_acesso"
    // );
    // popup_primeiro_acesso.showModal();
  } else if (autenticado && !primeiro_acesso) {
    location.href = "../dashboard_page/dashboard_page.html";
  } else {
    show_snackbar("body #snackbar_error", "E-MAIL OU SENHA INVÁLIDOS");
    pega_usuario.className = "inputError";
    pega_senha.className = "inputError";
  }
}

function alterar_senha() {
  let senha_antiga = document.getElementById("senha_antiga");
  let nova_senha = document.getElementById("senha_nova").value;
  let fecha_popup = document.getElementById("popup_primeiro_acesso");
  let usuario_autenticado = JSON.parse(
    localStorage.getItem("usuario_autenticado")
  );

  if (senha_antiga.value != usuario_autenticado.senha) {
    show_snackbar(
      "#popup_primeiro_acesso #snackbar_error",
      "SENHA ANTIGA INCORRETA"
    );
    senha_antiga.value = "";
    verifica_senha_antiga_digitada();
    senha_antiga.className = "inputError";
  } else {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let novos_usuarios = usuarios.map((usuario) => {
      if (usuario.id == usuario_autenticado.id) {    
        usuario_autenticado.senha = nova_senha 
        usuario_autenticado.primeiro_acesso = false   
        return usuario_autenticado;        
      } else {
        return usuario;
      }
    });
    localStorage.setItem("usuarios", JSON.stringify(novos_usuarios));
    fecha_popup.close()
  }
}

function abrir_popup_primeiro_acesso() {
  let verifica_popups = document.querySelectorAll("#popup_primeiro_acesso");

  if (verifica_popups.length > 0) {
    for (var i = 0; i < verifica_popups.length; i++) {
      verifica_popups[i].outerHTML = "";
    }
  }

  document.body.innerHTML += `
      <dialog id="popup_primeiro_acesso" class="popup">
          <div class="content">
              <div class="div_logo">
              <p><span class="immo">Immo</span><span class="control">Control</span></p>
              </div>
              <div class="content_children">
                  <h3>Primeiro acesso</h3>
                  <h3>Crie sua nova senha de acesso seguindo os critérios abaixo:</h3>
                  <div class="criterios">
                      <p id="minimo_caracteres">*Mínimo de 8 caracteres</p>
                      <i id="erro_minimo_caracteres" class="material-icons erro">close</i>
                      <i id="success_minimo_caracteres" class="material-icons success">check_small</i>
                  </div>
                  <div class="criterios">
                      <p id="maiuscula">*Conter uma letra maiúscula</p>
                      <i id="erro_maiuscula" class="material-icons erro">close</i>
                      <i id="success_maiuscula" class="material-icons success">check_small</i>
                  </div>
                  <div class="criterios">
                      <p id="minuscula">*Conter uma letras minúscula</p>
                      <i id="erro_minuscula" class="material-icons erro">close</i>
                      <i id="success_minuscula" class="material-icons success">check_small</i>
                  </div>
                  <div class="criterios">
                      <p id="numero">*Conter um número</p>
                      <i id="erro_numero" class="material-icons erro">close</i>
                      <i id="success_numero" class="material-icons success">check_small</i>
                  </div>
                  <div class="criterios">
                      <p id="caracteres_especiais">*Conter um caractere especial</p>
                      <i id="erro_caracteres_especiais" class="material-icons erro">close</i>
                      <i id="success_caracteres_especiais" class="material-icons success">check_small</i>
                  </div>
              </div>
              <div class="content_children">
                  <div>
                      <div class="criterios">
                          <label for="senha_antiga">SENHA ANTIGA</label>
                          <i id="success_senha_antiga" class="material-icons success">check_small</i>
                      </div>
                      <input type="password" id="senha_antiga" class="inputSuccess" onblur="return set_input_success(this)" onkeyup="verifica_senha_antiga_digitada()">
                  </div>
                  <div>
                      <div class="criterios">
                          <label id="nova_senha">NOVA SENHA</label>
                          <i id="success_nova_senha" class="material-icons success">check_small</i>
                      </div>
                      <input type="password" id="senha_nova" class="inputSuccess" onblur="return set_input_success(this)" onkeyup="verifica_nova_senha_digitada()">
                  </div>
                  <div>
                      <div class="criterios">
                          <label id="confirmar_senha">CONFIRMAR NOVA SENHA</label>
                          <i id="success_confirmar_nova_senha" class="material-icons success">check_small</i>
                      </div>
                      <input type="password" id="senha_confirmada" class="inputSuccess" onblur="return set_input_success(this)" onkeyup="verifica_confirmar_nova_senha()">
                  </div>
              </div>
              <div class="content_children">
                  <div class="confirmar">
                      <button class="btn_popup" id="btn_confirmar" onclick="alterar_senha()" disabled>CONFIRMAR</button>
                  </div>
              </div>
          </div>
          <div id="snackbar_error" class="snackbar"></div>
          <div id="snackbar_success" class="snackbar"></div>
      </dialog>
  `;
  let chama_popup = document.getElementById("popup_primeiro_acesso");
  chama_popup.showModal();
}

function habilita_botao_entrar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let entrar = document.getElementById("bt_entrar");
  if (email != "" && senha != "") {
    entrar.disabled = false;
  } else {
    entrar.disabled = true;
  }
}

function habilita_botao_confirmar() {
  let confirmar = document.getElementById("btn_confirmar");
  let senha_antiga = document.getElementById("senha_antiga").value;
  let nova_senha = document.getElementById("senha_nova");

  let check_senha_antiga =
    document.getElementById("success_senha_antiga").style.display == "block"
      ? true
      : false;
  let check_nova_senha =
    document.getElementById("success_nova_senha").style.display == "block"
      ? true
      : false;
  let check_confirmar_senha =
    document.getElementById("success_confirmar_nova_senha").style.display ==
    "block"
      ? true
      : false;

  if (
    senha_antiga == nova_senha.value &&
    senha_antiga != "" &&
    nova_senha.value != ""
  ) {
    confirmar.disabled = true;
    show_snackbar(
      "#popup_primeiro_acesso #snackbar_error",
      "A nova senha não pode ser igual a antiga!"
    );
  } else if (
    check_senha_antiga &&
    check_nova_senha &&
    check_confirmar_senha &&
    senha_antiga != nova_senha.value
  ) {
    confirmar.disabled = false;
  } else {
    confirmar.disabled = true;
  }
}

function verifica_senha_antiga_digitada() {
  let senha_antiga = document.getElementById("senha_antiga").value;
  let check = document.getElementById("success_senha_antiga");
  if (senha_antiga.trim() != "") {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }

  habilita_botao_confirmar();
}

function verifica_nova_senha_digitada() {
  let nova_senha = document.getElementById("senha_nova").value;
  let icon_check = document.getElementById("success_nova_senha");

  let check_lenght = false;
  let check_maiuscula = false;
  let check_minuscula = false;
  let check_numero = false;
  let check_caracteres_especiais = false;

  if (nova_senha.length < 8) {
    document.getElementById("erro_minimo_caracteres").style.display = "block";
    document.getElementById("success_minimo_caracteres").style.display = "none";
    check_lenght = false;
  } else {
    document.getElementById("erro_minimo_caracteres").style.display = "none";
    document.getElementById("success_minimo_caracteres").style.display =
      "block";
    check_lenght = true;
  }

  if (/[A-Z]/.test(nova_senha)) {
    document.getElementById("erro_maiuscula").style.display = "none";
    document.getElementById("success_maiuscula").style.display = "block";
    check_maiuscula = true;
  } else {
    document.getElementById("erro_maiuscula").style.display = "block";
    document.getElementById("success_maiuscula").style.display = "none";
    check_maiuscula = false;
  }

  if (/[a-z]/.test(nova_senha)) {
    document.getElementById("erro_minuscula").style.display = "none";
    document.getElementById("success_minuscula").style.display = "block";
    check_minuscula = true;
  } else {
    document.getElementById("erro_minuscula").style.display = "block";
    document.getElementById("success_minuscula").style.display = "none";
    check_minuscula = false;
  }

  if (/[1-9]/.test(nova_senha)) {
    document.getElementById("erro_numero").style.display = "none";
    document.getElementById("success_numero").style.display = "block";
    check_numero = true;
  } else {
    document.getElementById("erro_numero").style.display = "block";
    document.getElementById("success_numero").style.display = "none";
    check_numero = false;
  }

  if (/[!@?#%&_$]/.test(nova_senha)) {
    document.getElementById("erro_caracteres_especiais").style.display = "none";
    document.getElementById("success_caracteres_especiais").style.display =
      "block";
    check_caracteres_especiais = true;
  } else {
    document.getElementById("erro_caracteres_especiais").style.display =
      "block";
    document.getElementById("success_caracteres_especiais").style.display =
      "none";
    check_caracteres_especiais = false;
  }

  if (
    check_lenght &&
    check_maiuscula &&
    check_minuscula &&
    check_numero &&
    check_caracteres_especiais
  ) {
    icon_check.style.display = "block";
  } else {
    icon_check.style.display = "none";
  }
  verifica_confirmar_nova_senha();
  habilita_botao_confirmar();
}

function verifica_confirmar_nova_senha() {
  let nova_senha = document.getElementById("senha_nova").value;
  let confirmar_nova_senha = document.getElementById("senha_confirmada").value;
  let check = document.getElementById("success_confirmar_nova_senha");

  if (nova_senha == confirmar_nova_senha) {
    check.style.display = "block";
  } else {
    check.style.display = "none";
  }

  habilita_botao_confirmar();
}

//Função que envia senha padrão para o e-mail informado
function enviar_email() {
  let enviar_email = document.getElementById("email_cadastrado");
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let emailEnviado = document.getElementById("email_enviado");
  let open_enviar_senha = document.getElementById("enviar_senha");
  let email_valido = false;

  let novos_usuarios = usuarios.map((usuario) => {
    if (usuario.email == enviar_email.value) {
      usuario.senha = "123456";
      usuario.primeiro_acesso = true;
      email_valido = true;
      return usuario;
    } else {
      return usuario;
    }
  });

  localStorage.setItem("usuarios", JSON.stringify(novos_usuarios));

  if (email_valido) {
    open_enviar_senha.showModal();
    emailEnviado.innerHTML = `SENHA ENVIADA COM SUCESSO PARA O E-MAIL: <span class="email">${enviar_email.value}</span> `;
  } else {
    show_snackbar(
      "#popup_esqueceu_senha #snackbar_error",
      "INFORME O E-MAIL CADASTRADO"
    );
    enviar_email.className = "inputError";
  }
}

function show_snackbar(element, message) {
  var snackbar = document.querySelector(element);
  snackbar.innerHTML = "";
  snackbar.innerHTML += `<p>${message}</p>`;
  snackbar.className = "snackbar show";

  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 5000);
}

function set_input_success(e) {
  e.className = e.tagName == "INPUT" ? "inputSuccess" : "selectSuccess";
}

//Função de validação do nível de segurança da senha
// function conferencia() {
//   let confereSenha = document.getElementById("senha_nova");
//   let text = document.getElementById("validacao");

//   let senhaFraca = /[a-z]/;
//   let senhaMedia = /\d+/;
//   let senhaForte = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,),]/;

//   let minCaractereFacil = 3;
//   let minCaractereMedia = 6;
//   let minCaractereForte = 6;
//   let inputFacil = confereSenha.value.match(senhaFraca);
//   let inputMedia = confereSenha.value.match(senhaMedia);
//   let inputForte = confereSenha.value.match(senhaForte);

//   if (confereSenha.value) {
//     if (
//       confereSenha.value.length <= minCaractereFacil &&
//       (inputFacil || inputMedia || inputForte)
//     ) {
//       text.style.color = "#B83700";
//       text.textContent = "Sua senha é muito fraca";
//     }
//     if (
//       confereSenha.value.length >= minCaractereMedia &&
//       ((inputFacil && inputMedia) || (inputMedia && inputForte))
//     ) {
//       text.style.color = "#c2b60c";
//       text.textContent = "Sua senha é média";
//     }
//     if (
//       confereSenha.value.length >= minCaractereForte &&
//       inputFacil &&
//       inputMedia &&
//       inputForte
//     ) {
//       text.style.color = "#5BB800";
//       text.textContent = "Sua senha é forte";
//     }
//   }
// }
