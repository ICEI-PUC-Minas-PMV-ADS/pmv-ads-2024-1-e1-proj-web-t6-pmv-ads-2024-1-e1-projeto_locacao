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
            valor: 1000,
            status_pgto: false
        },
        {
            id: 2,
            data_pgto: '05/02/2024',
            valor: 2000,
            status_pgto: true
        },
        {
            id: 3,
            data_pgto: '05/03/2024',
            valor: 3000,
            status_pgto: false
        },
        {
            id: 4,
            data_pgto: '05/04/2024',
            valor: 4000,
            status_pgto: true
        },
        {
            id: 5,
            data_pgto: '05/05/2024',
            valor: 3500,
            status_pgto: true
        },
        {
            id: 6,
            data_pgto: '08/05/2024',
            valor: 2500,
            status_pgto: true
        },
        {
            id: 7,
            data_pgto: '05/07/2024',
            valor: 5500,
            status_pgto: true
        },
        {
            id: 8,
            data_pgto: '05/08/2024',
            valor: 5000,
            status_pgto: true
        },
        {
            id: 9,
            data_pgto: '05/09/2024',
            valor: 4000,
            status_pgto: true
        },
        {
            id: 10,
            data_pgto: '05/10/2024',
            valor: 4500,
            status_pgto: true
        },
        {
            id: 11,
            data_pgto: '05/11/2024',
            valor: 3000,
            status_pgto: true
        },{
            id: 12,
            data_pgto: '05/12/2024',
            valor: 4500,
            status_pgto: true
        }
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

//RETORNA A FORMATAÇÃO PADRAO dd/mm/aa
let data = new Date()
function formatarData(data){
    let newDate = new Date(data)
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}
console.log(formatarData(data))
    // formatarData(data)
    let alert_vencimento = JSON.parse(localStorage.getItem('faturas'))
    
      alert_vencimento.map((alerta) => { 

        if(alerta.data_pgto < formatarData(data) && !alerta.status_pgto){
            console.log(`VENCIDA EM: ${alerta.data_pgto}`)                      
       } else if(alerta.data_pgto > formatarData(data)){
            console.log(`EM ABERTO ${alerta.data_pgto}`)
       }else{alerta.data_pgto}   
                
    })
    //vencimento em 5 dias em milisegundos

    // let vencimento = 432000000
    // let dia_atual = new Date()
    // let data_convert = Math.abs(dia_atual.getTime() + vencimento)
    // console.log(data_convert)
    // let dias_diferença = Math.ceil((data_convert - dia_atual)  / (1000*60*60*24))
    // console.log(`FATURA VENCE EM: ${dias_diferença}`)

    // let hoje = new Date()
    // console.log(hoje)
    // // hoje.getMilliseconds()
    // console.log(hoje.getTime())



    // let hoje_d = data.getDate()
    // hoje_d = hoje_d < 10?"0"+hoje_d:hoje_d
    // let hoje_m = data.getMonth()
    // hoje_m = hoje_m < 10?"0"+hoje_m:hoje_m

    // let hoje = hoje_d+"/"+hoje_m+"/"+data.getFullYear()

    

//    console.log(formatData(hoje))
//    let novaData=formatData(hoje) - vencimento
//    console.log(novaData)
   

    

//     if(alerta.data_pgto <= formatData(hoje) && !alerta.status_pgto){
//         console.log(`VENCIDA EM: ${alerta.data_pgto}`)               
//    }  
//    else if(alerta.data_pgto > formatData(hoje)){
//        console.log(`VENCE EM: ${alerta.data_pgto}`)
   
//    }else{
//        console.log(alerta.data_pgto)
//    }


 //Retorna adição de 5 dias da data de hoje
//  let add_dias = new Date()


 // add_dias.setDate(add_dias.getDate() + 5);
 // console.log(add_dias.getDate()); 

 // let add_cinco_dias = add_dias
 // data = new Date(add_cinco_dias)
 // cincoDias_futuro = data.toLocaleDateString('pt-BR')
 // console.log(cincoDias_futuro)


 // hoje.setDate(hoje.getDate()+5)
 // console.log(hoje)
    // }else if(hoje.getDate() = hoje.setDate()+5){
    //     console.log(hoje) 
    // }

        // if(alerta.data_pgto < hoje + add){
        //     console.log(alerta.data_pgto)
        // }

        // console.log(alerta.data_pgto)
    // })
     
        

    // alert_vencimento.map((alerta) => {        
        
    //     if(alerta.data_pgto < hoje){
    //         if(status_pgto = alerta.status_pgto){
    //             // console.log(alerta.data_pgto) 
    //             console.log("VENCIDA")
    //         }
                       
    //     }else{
    //         console.log(alerta.status_pgto) 
    //     }

        
    // })



    //DIMINUINDO DATA FUTURA COM A DATA DE HOJE
    //  let diferenca = parseInt('10/05/2024') - parseInt(data_formatada)
    //  console.log(diferenca)
    
    
   

    // let data = '10/05/2024'    
    // // console.log(data)

    // data = parseInt('10/05/2024')
    // // console.log(data)

    // // let hoje = new Date()
    // // console.log(hoje)
    // hoje.toLocaleDateString('pt-br')
    // // console.log(hoje)

    // console.log(hoje.toISOString().substr(0,10).split('-').reverse().join('/'))


    // hoje.toLocaleDateString()
    // console.log(hoje)

   
    // function formatDate(){
        // var dataInput = '2020-02-06';

        // data = new Date(dataInput);
        // dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        // console.log(dataFormatada)

        
           
           
           
        
        // function formatar(){

        // }





    // console.log(hoje).val(formatDate)
    // let dataU = '10/05/2024'
    // let hoje = '05/05/2024'
    // let diferenca = parseInt(dataU)-parseInt(hoje)
    // console.log(diferenca)
    // function dataFuturo(){
    //     let futuro = new Date(10/05/2024)
    //     console.log(futuro)
    // }
    // console.log(dataFuturo)


    // let dataFut = ('09/05/2024')
    // console.log(dataFut)

    // let agora = new Date('05/05/2024')
    // // agora.toLocaleDateString()
    // console.log(agora)
    // let diferenca = parseInt(dataFut)-parseInt(agora)
    // console.log(diferenca)


   

    // let hoje = new Date().getTime()
    // // console.log(hoje.getDate())
    // console.log(hoje)

    // let hoje = new Date()
    // hoje.getDate()
    // console.log(hoje)

    // let intervalo = Date.now()
    //  console.log(intervalo)


    // future.setMinutes(future.getMinutes() + 30);
    // let h = future.getHours().toString().padStart(2, '0');
    // let m = future.getMinutes().toString().padStart(2, '0');
    // let s = future.getSeconds().toString().padStart(2, '0');
    // console.log(s)
    
    // let interval = future.getTime() - Date.now();
    // setTimeout(() => {
    //   alert('30 minutos se passaram.');

    // let hoje = new Date();
    // hoje.setTime()
    //     console.log(hoje)

    
    
            


    //                 faturas.map((fatura) => {
    //                     if (fatura.status_pgto) {
    //                         Object.keys(dias).map((dia) => {
    //                             if (dias[mes].text == fatura.data_pgto.split('/')[1]) {
    //                                 meses[mes].value += fatura.valor

    // alert_vencimento.map((faturas) =>{
    // if(alert_vencimento.data_pgto < hoje.getDate()){
    //     console.log(faturas.data_pgto)
    // }else{ }


















// function vencimento(id, periodo, valor, status) {
//     var node = document.getElementById('table_list')
//     node.innerHTML = ""

//     console.log(node)

//     let id_value = id
//     let periodo_value = nome
//     let valor_value = cpf

//     if (id_value == "") {
//         id_value = null
//     }
//     console.log(id)

//     if (periodo_value == "") {
//         periodo_value = null
//     }

//     if (valor_value == "") {
//         valor_value = null
//     }

//     let table = document.getElementById('table_list')
//     let faturas = JSON.parse(localStorage.getItem('faturas'))

//     if (id_value != null) {
//         console.log(alert("vazio"))
//     }else{alert("outra coisa")}

    
// }

