function iniciar_dashboard() {
    iniciar_banco_imoveis()
    iniciar_banco_faturas()
    my_bar_chart()
    my_doughnut_chart()
}


function my_bar_chart() {

    const barColors = '#5BB800'
    const faturas = JSON.parse(localStorage.getItem('faturas'))
    let meses = {
        janeiro: {
            value: 0,
            text: '01'
        },
        feveiro: {
            value: 0,
            text: '02'
        },
        março: {
            value: 0,
            text: '03'
        },
        abril: {
            value: 0,
            text: '04'
        },
        maio: {
            value: 0,
            text: '05'
        },
        junho: {
            value: 0,
            text: '06'
        },
        julho: {
            value: 0,
            text: '07'
        },
        agosto: {
            value: 0,
            text: '08'
        },
        setembro: {
            value: 0,
            text: '09'
        },
        outubro: {
            value: 0,
            text: '10'
        },
        novembro: {
            value: 0,
            text: '11'
        },
        dezembro: {
            value: 0,
            text: '12'
        },
    }


    faturas.map((fatura) => {
        if (fatura.status_pgto) {
            Object.keys(meses).map((mes) => {
                if (meses[mes].text == fatura.data_pgto.split('/')[1]) {
                    meses[mes].value += fatura.valor
                }
            })
        }
    })

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
        meses.dezembro.value
    ]



    new Chart("myChart", {
        type: "bar",
        data: {
            labels: Object.keys(meses),
            datasets: [{
                backgroundColor: barColors,
                data: valores
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    ticks: {
                        color: '#A0AEC0'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function my_doughnut_chart() {
    const dados_imoveis = JSON.parse(localStorage.getItem('imoveis'))
    let locado = 0
    let vago = 0

    dados_imoveis.map((imovel) => {
        if (imovel.statusLocacao) {
            locado++
        } else { vago++ }
    })

    const data = {
        labels: [
            'Locado',
            'Vago'
        ],
        datasets: [{
            data: [locado, vago],
            backgroundColor: [
                '#A0AEC0',
                '#5BB800'
            ],
            hoverOffset: 4
        }]
    };

    new Chart("myChart2", {
        type: 'doughnut',
        data: data,
        options: {
            legend: {
                fontColor: '#5BB800'

            }
        },

    })
}

function iniciar_banco_faturas() {
    let valid_faturas = JSON.parse(localStorage.getItem('faturas'))
    let faturas = [
        {
            id: 1,
            data_pgto: '05/01/2024',
            valor: 1500,
            status_pgto: true
        },
        {
            id: 2,
            data_pgto: '05/01/2024',
            valor: 1500,
            status_pgto: false
        },
        {
            id: 3,
            data_pgto: '05/02/2024',
            valor: 1500,
            status_pgto: true
        },
        {
            id: 4,
            data_pgto: '05/02/2024',
            valor: 1500,
            status_pgto: true
        },
        {
            id: 5,
            data_pgto: '05/03/2024',
            valor: 1500,
            status_pgto: false
        },
        {
            id: 6,
            data_pgto: '05/03/2024',
            valor: 1500,
            status_pgto: false
        },
        {
            id: 7,
            data_pgto: '05/04/2024',
            valor: 1000,
            status_pgto: true
        },
        {
            id: 6,
            data_pgto: '05/12/2024',
            valor: 1300,
            status_pgto: true
        },
        {
            id: 7,
            data_pgto: '05/11/2024',
            valor: 500,
            status_pgto: true
        },
    ]
    if (valid_faturas == null) {
        localStorage.setItem('faturas', JSON.stringify(faturas))
    }
}

function iniciar_banco_imoveis() {
    let valid_imoveis = JSON.parse(localStorage.getItem('imoveis'))
    let imoveis = [
        {
            id: 1,
            statusLocacao: true

        },
        {
            id: 2,
            statusLocacao: true

        },
        {
            id: 3,
            statusLocacao: true

        },
        {
            id: 4,
            statusLocacao: true

        },
        {
            id: 5,
            statusLocacao: true

        },
        {
            id: 6,
            statusLocacao: true

        },
        {
            id: 7,
            statusLocacao: true

        },
        {
            id: 8,
            statusLocacao: false

        },
        {
            id: 9,
            statusLocacao: false

        },
        {
            id: 10,
            statusLocacao: false

        },
        {
            id: 11,
            statusLocacao: false

        },
        {
            id: 12,
            statusLocacao: true

        },
    ]

    if (valid_imoveis == null) {
        localStorage.setItem('imoveis', JSON.stringify(imoveis))
    }
}