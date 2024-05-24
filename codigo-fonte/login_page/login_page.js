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

function iniciar_banco_usuarios() {
  let valid_usuario = JSON.parse(localStorage.getItem("usuarios"));

  let usuarios = [
    {
      id: 1,
      nome: "Master",
      tipo: "Administrador",
      email: "master@immocontrol.com.br",
      senha: "123",
      status: true,
      primeiro_acesso: true,
    },
    {
      id: 2,
      nome: "Usuario Ativo",
      tipo: "Comum",
      email: "ativo@immocontrol.com.br",
      senha: "123",
      status: true,
      primeiro_acesso: true,
    },
    {
      id: 3,
      nome: "Usuario Inativo",
      tipo: "Comum",
      email: "inativo@immocontrol.com.br",
      senha: "123",
      status: false,
      primeiro_acesso: true,
    },
  ];

  if (valid_usuario == null) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("banco_resetado");
  }
}

function iniciar_banco() {
  iniciar_banco_usuarios();
}

//Função de autenticação do usuario (ativo, inativo)
function verica_usuario() {
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
    let popup_primeiro_acesso = document.getElementById(
      "popup_primeiro_acesso"
    );
    popup_primeiro_acesso.showModal();
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
  let nova_senha = document.getElementById("senha_nova");
  let confirmar_senha = document.getElementById("senha_confirmada");
  let fecha_popup = document.getElementById("popup_primeiro_acesso");
  let usuario_autenticado = JSON.parse(
    localStorage.getItem("usuario_autenticado")
  );

  if (
    senha_antiga.value == usuario_autenticado.senha &&
    nova_senha.value == confirmar_senha.value
  ) {
    if (nova_senha.value != "" && confirmar_senha != "") {
      usuario_autenticado.senha = nova_senha.value;
      usuario_autenticado.primeiro_acesso = false;
      fecha_popup.close();
    } else {
      show_snackbar(
        "#popup_primeiro_acesso #snackbar_error",
        "INFORME E CONFIRME NOVA SENHA"
      );
      nova_senha.className = "inputError";
      confirmar_senha.className = "inputError";
    }
  } else if (
    nova_senha.value !== confirmar_senha.value &&
    senha_antiga.value == 123
  ) {
    show_snackbar(
      "#popup_primeiro_acesso #snackbar_error",
      "NOVA SENHA DIFERENTE DA SENHA CONFIRMADA"
    );
    nova_senha.className = "inputError";
    confirmar_senha.className = "inputError";
    // alert("NOVA SENHA DIFERENTE DA SENHA CONFIRMADA")
  } else if (
    senha_antiga.value !== 123 &&
    nova_senha.value == confirmar_senha.value
  ) {
    show_snackbar(
      "#popup_primeiro_acesso #snackbar_error",
      "SENHA ANTIGA INCORRETA"
    );
    senha_antiga.className = "inputError";
  } else {
    show_snackbar(
      "#popup_primeiro_acesso #snackbar_error",
      "SENHAS INCORRETAS"
    );
    nova_senha.className = "inputError";
    confirmar_senha.className = "inputError";
    senha_antiga.className = "inputError";
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let novos_usuarios = usuarios.map((usuario) => {
    if (usuario.id == usuario_autenticado.id) {
      return usuario_autenticado;
    } else {
      return usuario;
    }
  });
  localStorage.setItem("usuarios", JSON.stringify(novos_usuarios));
}

//Função apra Enviar senha padrão para o e-mail informado
function enviar_email() {
  let enviar_email = document.getElementById("email_cadastrado");
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let emailEnviado = document.getElementById("email_enviado");
  let open_enviar_senha = document.getElementById("enviar_senha");
  let email_valido = false;

  let novos_usuarios = usuarios.map((usuario) => {
    if (usuario.email == enviar_email.value) {
      usuario.senha = "123";
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

//VALIDAÇÃO DA SENHA
let confereSenha = document.getElementById('senha_nova');
let text = document.getElementById("validacao");

confereSenha.addEventListener('confereSenha',validSenha);

let senhaFraca = /[a-z]/;
let senhaMedia = /\d+/;
let senhaForte = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,),]/;

let minCaractereFacil = 3;
let minCaractereMedia = 6;
let minCaractereForte = 6;  

function validSenha() { 

  let inputFacil = confereSenha.value.match(senhaFraca);
  let inputMedia = confereSenha.value.match(senhaMedia);
  let inputForte = confereSenha.value.match(senhaForte);

  if (confereSenha.value) {
    if (
        confereSenha.value.length <= minCaractereFacil &&
      (inputFacil || inputMedia || inputForte)
    ) {
        console.log(input)
      text.textContent = "Sua senha é muito fraca";
    }
    if (
        confereSenha.value.length >= minCaractereMedia &&
      ((inputFacil && inputMedia) || (inputMedia && inputForte))
    ) {
      text.textContent = "Sua senha é média";
    }
    if (
        confereSenha.value.length >= minCaractereForte &&
      inputFacil &&
      inputMedia &&
      inputForte
    ) {
      text.textContent = "Sua senha é forte";
    }
  }
}
