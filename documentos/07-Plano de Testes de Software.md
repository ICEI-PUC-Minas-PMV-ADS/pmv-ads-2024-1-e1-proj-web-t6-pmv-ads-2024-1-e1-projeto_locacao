# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

---
### RF-01 USUÁRIOS (THÁSSIA)
---

### RF-02 LOGIN / PRIMEIRO ACESSO (SOCRÁTIS)
|Caso de Teste    | CT-X - Verificar Funcionamento da troca da senha padrão pela senha de preferência do usuário |
|:-----------------| :------------|
|Requisitos Associados | RF-02 -  A aplicação deve permitir ao usuário fazer o login em sua conta.|
|Passos   | Seguir os seguintes passos:|
|         | 01 - Acessar o navegador.|
|         | 02 - Informar o endereço da aplicação|
|         | 03 - Informar o e-mail do usuário cadastrado e senha padrão (123)|
|         | 04 - Clicar no botão ENTRAR para acessar a tela de Primeiro Acesso|
|         | 05 - Informar a senha padrão novamente e cadastrar a senha personalizada conforme os critérios de segurança|
|Critérios de êxito | Todos os links das páginas (Login/Primeiro Acesso/Dashboard) devem encaminhar os usuários para as páginas descritas e o cadastramento de nova senha deve ser salva com êxito no banco de dados.|
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

### RF-08 CONTROLE DE VENCIMENTO DE ALUGUÉIS (????)
---

### RF-09 REQUISIÇÕES (ISMARLEI)
---

### RF-10 DASHBOARD (SÓCRATIS/PEDRO)
---

---
> **Links Úteis (devemos excluir este item?)**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
