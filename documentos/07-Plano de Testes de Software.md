# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

---
### RF-01 USUÁRIOS (THÁSSIA)
---

####  RF-02 LOGIN / PRIMEIRO ACESSO (SOCRÁTIS)
|Caso de Teste    | CT-X - Verificar Funcionamento do link ESQUECI MINHA SENHA na tela de Login|
|:-----------------| :------------|
|Requisitos Associados | RF-02 -  A aplicação deve permitir ao usuário fazer o login em sua conta.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o navegador.|
|         | 02 - Informar o endereço da aplicação|
|         | 03 - Informar o e-mail do usuário cadastrado|
|         | 04 - Clicar no link ESQUECI MINHA SENHA|
|         | 05 - Informar o e-mail cadastrado novamente e clicar em ENVIAR SENHA|
|Critérios de êxito | Ao informar que esqueceu a senha e clicar em ENVIAR SENHA, a senha esquecida será resetada e enviada a senha padrão (123) para o e-mail cadastrado.|
|Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva|

|Caso de Teste    | CT-X - Verificar Funcionamento da troca da senha padrão pela senha de preferência do usuário |
|:-----------------| :------------|
|Requisitos Associados | RF-02 -  A aplicação deve permitir ao usuário fazer o login em sua conta.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o navegador.|
|         | 02 - Informar o endereço da aplicação|
|         | 03 - Informar o e-mail do usuário cadastrado e senha padrão (123)|
|         | 04 - Clicar no botão ENTRAR para acessar a tela de Primeiro Acesso|
|         | 05 - Informar a senha padrão novamente e cadastrar a senha personalizada conforme os critérios de segurança|
|Critérios de êxito | Após o cadastramento da nova senha, o usuário poderá acessar a tela de Dashboard da aplicação.|
|Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva|
---

### RF-03 IMÓVEIS (ZANDER)
---

### RF-04 PROPRIETÁRIOS (PEDRO)
---

### RF-05 LOCATÁRIOS (EDUARDO)
|Caso de Teste    | CT-X - Verificar Funcionamento dos Links do Módulo Locatários|
|:-----------------| :------------|
|Requisitos Associados | RF-05 -  aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o aplicativo ImmoControl|
|         | 02 - No Menu lateral esquero clicar na opção "Locatários|
|         | 03 - Clicar no botão para visualizar os dados de cada locatário|
|         | 04 - Clicar no botão para filtrar os dados de locatário|
|         | 05 - Clicar no botão para cadastrar novo locatário|
|Critérios de êxito | Todos os links da página devem encaminhar os usuários para as páginas descritas.|
|Responsável pela elaboração do caso de Teste | Eduardo Wollinger|

|Caso de Teste    | CT-X - Verificar Funcionamento Módulo Locatários: Função Filtrar|
|:-----------------| :------------|
|Requisitos Associados | RF-05 -  aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - A partir da tela inicial do Módulo Locatários|
|         | 02 - Clicar no botão para filtrar os dados de locatário|
|         | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página.|
|         | 04 - Clicar em Filtrar|
|Critérios de êxito | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal os locatários que correspondem aos dados inseridos.|
|Responsável pela elaboração do caso de Teste | Eduardo Wollinger|

|Caso de Teste    | CT-X - Verificar Funcionamento Módulo Locatários: Função Cadastrar|
|:-----------------| :------------|
|Requisitos Associados | RF-05 -  aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - A partir da tela inicial do Módulo Locatários|
|         | 02 - Clicar no botão para cadastrar novo locatário|
|         | 03 - Preencher todos os campos com os respectivos dados de um locatário fictício|
|         | 04 - Clicar em Cadastrar|
|Critérios de êxito | O sistema deverá apresentar na tela principal linha contendo o locatário recém cadastrado|
|Responsável pela elaboração do caso de Teste | Eduardo Wollinger|

|Caso de Teste    | CT-X - Verificar Funcionamento Módulo Locatários: Função Alterar|
|:-----------------| :------------|
|Requisitos Associados | RF-05 -  aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - A partir da tela inicial do Módulo Locatários|
|         | 02 - Clicar no botão para visualizar dados de locatário|
|         | 03 - Clicar em Alterar|
|         | 03 - Alterar alguns campos com os dados do locatário |
|         | 04 - Clicar em Salvar|
|Critérios de êxito | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso|
|Responsável pela elaboração do caso de Teste | Eduardo Wollinger|


 
---

### RF-06 CONTRATOS (ZANDER)
---

### RF-07 FATURAS (EDUARDO)
---

RF-08 CONTROLE DE VENCIMENTO DE ALUGUÉIS (SÓCRATIS/PEDRO)
|Requisitos Associados | RF-08 - A aplicação deve gerar alerta sobre vencimentos próximos e atrasos de aluguel.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o aplicativo ImmoControl.|
|         | 02 - Verificar no campo inferior direito os alertas de vencimentos e faturas vencidas|
|Critérios de êxito | Após a visualização dos alertas de vencimentos ou vencidas no Dashboard, as mesmas podem ser confirmadas ou conferidas clicando no botão Faturas no sidebar localizado à direita da tela.|
|Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva e Pedro Francis|
---

### RF-09 REQUISIÇÕES (ISMARLEI)
---

### RF-10 DASHBOARD (SÓCRATIS/PEDRO)
|Requisitos Associados | RF-02 -  A aplicação deve apresentar um Dashboard com as principais informações sobre os contratos gerenciados pela imobiliária e verificar se osbotões do sidebar localizado à esquerda do Dashboard estão encaminhando para as respectivas telas corretamente.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o aplicativo ImmoControl.|
|         | 02 - Analisar o gráfico de faturamento mês a mês no campo superior do Dashboard, verificar o gráfico de vacância física de imóveis no campo inferior direito e visualizar os alertas de vencimentos e faturas vencidas no campo inferior direito da tela.|
|         | 03 - Clicar nos botões do Sidebar do Dashboard.|
|Critérios de êxito |  Após a visualização  das informações gráficas no Dashboard, as mesmas podem ser confirmadas ou conferidas clicando nos botões do Sidebar, que por sua vez deve encaminhar os usuários para as telas descritas.|
|Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva e Pedro Francis|
---

---
> **Links Úteis (devemos excluir este item?)**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
