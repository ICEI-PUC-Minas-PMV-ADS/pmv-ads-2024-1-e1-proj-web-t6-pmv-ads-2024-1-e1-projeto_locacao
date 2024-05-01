function iniciar_dashboard() {
    my_bar_chart()
    my_doughnut_chart()
}

function my_bar_chart() {
    const xValues = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const yValues = [55, 49, 44, 24, 15]
    const barColors = '#5BB800'

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
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
    const data = {
        labels: [
            'Locado',
            'Vago'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [10, 2],
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
    })
}