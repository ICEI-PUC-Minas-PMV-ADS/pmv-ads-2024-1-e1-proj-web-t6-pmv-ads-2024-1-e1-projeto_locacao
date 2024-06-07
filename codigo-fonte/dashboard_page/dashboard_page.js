function iniciar_dashboard() {
  iniciar_banco_imoveis();
  usuario()
  my_bar_chart();
  my_doughnut_chart();
  alerta_vencimento();
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

function my_bar_chart() {
  const barColors = "#5BB800";
  const faturas = JSON.parse(localStorage.getItem("faturas"));

  let meses = {
    janeiro: {
      value: 0,
      text: "01",
    },
    feveiro: {
      value: 0,
      text: "02",
    },
    março: {
      value: 0,
      text: "03",
    },
    abril: {
      value: 0,
      text: "04",
    },
    maio: {
      value: 0,
      text: "05",
    },
    junho: {
      value: 0,
      text: "06",
    },
    julho: {
      value: 0,
      text: "07",
    },
    agosto: {
      value: 0,
      text: "08",
    },
    setembro: {
      value: 0,
      text: "09",
    },
    outubro: {
      value: 0,
      text: "10",
    },
    novembro: {
      value: 0,
      text: "11",
    },
    dezembro: {
      value: 0,
      text: "12",
    },
  };

  faturas.map((fatura) => {
    if (fatura.status_pagamento) {
      Object.keys(meses).map((mes) => {
        if (meses[mes].text == fatura.data_pagamento.split("/")[1]) {
          meses[mes].value += parseFloat(fatura.valor);
        }
      });
    }
  });

  let valores = [
    meses.janeiro.value,
    meses.feveiro.value,
    meses.março.value,
    meses.abril.value,
    meses.maio.value,
    meses.junho.value,
    meses.julho.value,
    meses.agosto.value,
    meses.setembro.value,
    meses.outubro.value,
    meses.novembro.value,
    meses.dezembro.value,
  ];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: Object.keys(meses),
      datasets: [
        {
          backgroundColor: barColors,
          data: valores,
        },
      ],
    },
    options: {
      scales: {
        y: {
          display: false,
        },
        x: {
          ticks: {
            color: "#A0AEC0",
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

function my_doughnut_chart() {
  const dados_imoveis = JSON.parse(localStorage.getItem("imoveis"));
  let locado = 0;
  let vago = 0;

  dados_imoveis.map((imovel) => {
    if (imovel.vacancia == 'locado') {
      locado++;
    } else {
      vago++;
    }
  });

  const data = {
    labels: ["Locado", "Vago"],
    datasets: [
      {
        data: [locado, vago],
        backgroundColor: ["#A0AEC0", "#5BB800"],
        hoverOffset: 4,
      },
    ],
  };

  new Chart("myChart2", {
    type: "doughnut",
    data: data,
    options: {
      legend: {
        fontColor: "#5BB800",
      },
    },
  });
}


function iniciar_banco_imoveis() {
  let valid_imoveis = JSON.parse(localStorage.getItem("imoveis"));
  let imoveis = [
    {
      id: 1,
      statusLocacao: true,
    },
    {
      id: 2,
      statusLocacao: true,
    },
    {
      id: 3,
      statusLocacao: true,
    },
    {
      id: 4,
      statusLocacao: true,
    },
    {
      id: 5,
      statusLocacao: true,
    },
    {
      id: 6,
      statusLocacao: true,
    },
    {
      id: 7,
      statusLocacao: true,
    },
    {
      id: 8,
      statusLocacao: false,
    },
    {
      id: 9,
      statusLocacao: false,
    },
    {
      id: 10,
      statusLocacao: false,
    },
    {
      id: 11,
      statusLocacao: false,
    },
    {
      id: 12,
      statusLocacao: true,
    },
  ];

  if (valid_imoveis == null) {
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
  }
}

function alerta_vencimento() {
  let fatura = JSON.parse(localStorage.getItem("faturas"));

  fatura.map((alerta) => {
    let splitData = alerta.data_vencimento.split("/");
    let newDate = [splitData[1], splitData[0], splitData[2]];

    let data = new Date(newDate.join("/"));
    let hoje = new Date();

    let emAberto = new Date();
    emAberto.setDate(emAberto.getDate() + 5);
    if (data < hoje && !alerta.status_pagamento) {
      addLinhaNaTabela(alerta, true)
      
    } else if (data > hoje && data < emAberto) {
      addLinhaNaTabela(alerta, false)
      
    }
       
  });
}

function addLinhaNaTabela(alerta, Vencida) {
  let table = document.getElementById('table_list')
   table.innerHTML += `
      <div class="div_table_row">       
          <div class="table_locatario">
            ${alerta.nome_locatario}
          </div>
          <div class="table_periodo">
            ${alerta.data_vencimento}
          </div>
          <div class="table_valor">
            ${parseFloat(alerta.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </div>
          <div class="table_status">
            <div class=${!Vencida ? "status_active" : "status_inactive"}>
              <p>
                ${!Vencida ? "Em Aberto" : "Vencida"}
              </p>
            </div>
          </div>          
      </div>
    `;
  table.innerHTML += '<hr class="divisor"></hr>';
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


