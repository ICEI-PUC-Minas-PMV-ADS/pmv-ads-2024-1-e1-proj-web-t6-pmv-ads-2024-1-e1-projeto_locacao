# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.



## RF-01 USUÁRIOS

| Caso de Teste                                | CT-01 - Verificar Funcionamento dos Links do Módulo Usuários                       |
| :------------------------------------------- | :-------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-01 - A aplicação deve permitir cadastrar/alterar informações de usuários. |
| Passos                                       | Seguir os seguintes passos:                                                       |
|                                              | 01 - Acessar o aplicativo ImmoControl                                             |
|                                              | 02 - No Menu lateral esquero clicar na opção "Usuários"                           |
|                                              | 03 - Clicar no botão para visualizar os dados de cada usuário                     |
|                                              | 04 - Clicar no botão "Voltar" para retornar à página principal do Módulo Usuários |
|                                              | 05 - Clicar no botão para filtrar os dados de usuário                             |
|                                              | 06 - Clicar no botão "Voltar" para retornar à página principal do Módulo Usuários |
|                                              | 07 - Clicar no botão para cadastrar novo usuário                                  |
|                                              | 08 - Clicar no botão "Voltar" para retornar à página principal do Módulo Usuários |
| Critérios de êxito                           | Todos os links da página devem encaminhar os usuários para as páginas descritas.  |
| Responsável pela elaboração do caso de Teste | Thássia Campos                                                                    |

| Caso de Teste                                | CT-02 - Verificar Funcionamento Módulo Usuários: Função Filtrar                                                                        |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-01 - A aplicação deve permitir cadastrar/alterar informações de usuários.                                                          |
| Passos                                       | Seguir os seguintes passos:                                                                                                           |
|                                              | 01 - A partir da tela inicial do Módulo Usuários                                                                                      |
|                                              | 02 - Clicar no botão para filtrar os dados de usuário                                                                                 |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página. |
|                                              | 04 - Clicar em Filtrar                                                                                                                |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal os usuários que correspondem aos dados inseridos.          |
| Responsável pela elaboração do caso de Teste | Thássia Campos                                                                                                                        |

| Caso de Teste                                | CT-03 - Verificar Funcionamento Módulo Usuários: Função Cadastrar                        |
| :------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-01 - A aplicação deve permitir cadastrar/alterar informações de usuários.            |
| Passos                                       | Seguir os seguintes passos:                                                             |
|                                              | 01 - A partir da tela inicial do Módulo Usuários                                        |
|                                              | 02 - Clicar no botão para cadastrar novo usuário                                        |
|                                              | 03 - Preencher todos os campos com os respectivos dados de um usuário fictício          |
|                                              | 04 - Clicar em Cadastrar                                                                |
| Critérios de êxito                           | O sistema deverá apresentar na tela principal linha contendo o usuário recém cadastrado |
| Responsável pela elaboração do caso de Teste | Thássia Campos                                                                          |

| Caso de Teste                                | CT-04 - Verificar Funcionamento Módulo Usuários: Função Alterar                            |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-01 - A aplicação deve permitir cadastrar/alterar informações de usuários.              |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo Usuários                                          |
|                                              | 02 - Clicar no botão para visualizar dados de usuário                                     |
|                                              | 03 - Clicar em Alterar                                                                    |
|                                              | 03 - Alterar alguns campos com os dados do usuário                                        |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso |
| Responsável pela elaboração do caso de Teste | Thássia Campos                                                                            |

| Caso de Teste                                | CT-05 - Verificar Funcionamento Módulo Usuários: Função Nova Senha                           |
| :------------------------------------------- | :------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-01 - A aplicação deve permitir cadastrar/alterar informações de usuários.                |
| Passos                                       | Seguir os seguintes passos:                                                                 |
|                                              | 01 - A partir da tela inicial do Módulo Usuários                                            |
|                                              | 02 - Clicar no botão para visualizar dados do usuário                                       |
|                                              | 03 - Clicar em Nova Senha                                                                   |
|                                              | 04 - Verificar se a mensagem "Senha alterada com sucesso" aparece na parte inferior da tela |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que a senha foi alterada com sucesso       |
| Responsável pela elaboração do caso de Teste | Thássia Campos                                                                              |

---

## RF-02 LOGIN / PRIMEIRO ACESSO

| Caso de Teste                                | CT-06 - Verificar funcionamento do link Esqueci Minha Senha na tela de Login                                                                         |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-02 - A aplicação deve permitir ao usuário fazer o login em sua conta.                                                                            |
| Passos                                       | Seguir os seguintes passos:                                                                                                                         |
|                                              | 01 - Acessar o navegador.                                                                                                                           |
|                                              | 02 - Informar o endereço da aplicação                                                                                                               |
|                                              | 03 - Informar o e-mail do usuário cadastrado                                                                                                        |
|                                              | 04 - Clicar no link Esqueci Minha Senha                                                                                                             |
|                                              | 05 - Informar o e-mail cadastrado novamente e clicar em Enviar Senha                                                                                |
| Critérios de êxito                           | Ao informar que esqueceu a senha e clicar em Enviar Senha, a senha esquecida será resetada e enviada a senha padrão (123) para o e-mail cadastrado. |
| Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva                                                                                                                             |

| Caso de Teste                                | CT-07 - Verificar Funcionamento da troca da senha padrão pela senha de preferência do usuário                |
| :------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-02 - A aplicação deve permitir ao usuário fazer o login em sua conta.                                    |
| Passos                                       | Seguir os seguintes passos:                                                                                 |
|                                              | 01 - Acessar o navegador.                                                                                   |
|                                              | 02 - Informar o endereço da aplicação                                                                       |
|                                              | 03 - Informar o e-mail do usuário cadastrado e senha padrão (123456)                                           |
|                                              | 04 - Clicar no botão ENTRAR para acessar a tela de Primeiro Acesso                                          |
|                                              | 05 - Informar a senha padrão novamente e cadastrar a senha personalizada conforme os critérios de segurança |
| Critérios de êxito                           | Após o cadastramento da nova senha, o usuário poderá acessar a tela de Dashboard da aplicação.              |
| Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva                                                                                     |

---

## RF-03 IMÓVEIS

| Caso de Teste                                | CT-08 - Verificar Funcionamento dos Links do Módulo Imóveis                     |
| :------------------------------------------- | :-------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-03 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos. |
| Passos                                       | Seguir os seguintes passos:                                                       |
|                                              | 01 - Acessar o aplicativo ImmoControl                                             |
|                                              | 02 - No Menu lateral esquerdo clicar na opção "imóveis"                           |
|                                              | 03 - Clicar no botão do lado direito de cada imóvel para visualizar os dados      |
|                                              | 04 - Clicar no botão para filtrar os dados de imóvel                              |
|                                              | 05 - Clicar no botão para cadastrar novo imóvel                                   |
| Critérios de êxito                           | Todos os links da página devem encaminhar os usuários para as páginas descritas.  |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos      |

| Caso de Teste                                | CT-09 - Verificar Funcionamento Módulo imóveis: Função Filtrar                                                                      |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-03 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos imóveiss.                                                     |
| Passos                                       | Seguir os seguintes passos:                                                                                                           |
|                                              | 01 - A partir da tela inicial do Módulo imóveis                                                                                    |
|                                              | 02 - Clicar no botão para filtrar os dados de imóvel                                                                               |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página. |
|                                              | 04 - Clicar em Filtrar                                                                                                                |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal os imóveis que correspondem aos dados inseridos.        |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos     | 

| Caso de Teste                                | CT-10 - Verificar Funcionamento Módulo imóveis: Função Cadastrar                        |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-03 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos imóveis.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo imóveis                                        |
|                                              | 02 - Clicar no botão para cadastrar novo imóvel                                      |
|                                              | 03 - Preencher todos os campos com os respectivos dados de um imóvel fictício          |
|                                              | 04 - Clicar em Cadastrar                                                                  |
| Critérios de êxito                           | O sistema deverá apresentar na tela principal linha contendo o imóvel recém cadastrado |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos                                                                         |

| Caso de Teste                                | CT-11 - Verificar Funcionamento Módulo imóveis: Função Alterar                          |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-03 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos imóveis.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo imóveis                                        |
|                                              | 02 - Clicar no botão para visualizar dados de imóvel                                   |
|                                              | 03 - Clicar em Alterar                                                                    |
|                                              | 03 - Alterar alguns campos com os dados do imóvel                                     |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos                                                                         |


## RF-04 PROPRIETÁRIOS

| Caso de Teste                                | CT-12 - Verificar Funcionamento dos botões na Página de Proprietários                     |
| :------------------------------------------- | :-------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-04 - A aplicação deve permitir ao usuário cadastrar/alterar/pesquisar informações dos proprietários. |
| Passos                                       | Seguir os seguintes passos:                                                       |
|                                              | 01 - Clicar nos botões do sidebar a fim de verificar se todos encaminham para as páginas referenciadas.                                            |
|                                              | 02 - Clicar no botão para visualizar os dados de cada proprietário e verificar se o popup abrirá.                   |
|                                              | 03 - Clicar no botão para filtrar os proprietários e verificar se o popup abrirá.                           |
|                                              | 04 - Clicar no botão para cadastrar um novo proprietário e verificar se o popup abrirá.                                |
| Critérios de êxito                           | Todos os botões do sidebar devem encaminhar o usuárioa para a página referenciada e os botões de ação devem abrir os popups corretos.  |
| Responsável pela elaboração do caso de Teste | Pedro Francis Maia Coelho                                                                |

| Caso de Teste                                | CT-13 - Verificar Funcionamento do Filtro de Proprietários|
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-04 - A aplicação deve permitir ao usuário cadastrar/alterar/pesquisar informações dos proprietários..|
| Passos                                       | Seguir os seguintes passos:|
|                                              | 01 - Na tela de Proprieários|
|                                              | 02 - Clicar no botão para abrir o popup de filtros.|
|                                              | 03 - Preencher os campos de filtros existentes. |
|                                              | 04 - Clicar no botão filtrar.|
| Critérios de êxito                           | A tabela drecarregará atendendo os filtros informados ou aparecerá mensagem de erro caso não tenha sido encontrado proprietário correspondente aos filtros informados.|
| Responsável pela elaboração do caso de Teste | Pedro Francis Maia Coelho|

| Caso de Teste                                | CT-14 - Verificar Funcionamento do Cadastro de Proprietários                     |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-04 - A aplicação deve permitir ao usuário cadastrar/alterar/pesquisar informações dos proprietários.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - Clicar no botão para cadastrar novo proprietário                                        |
|                                              | 02 - Preencher todos os campos com os respectivos dados de um proprietário fictício          |
|                                              | 03 - Clicar em Cadastrar                                                                  |
| Critérios de êxito                           | A tabela recarregará mostrando o proprietário recém cadastrado ou aparecerá mensagem de erro infomando ao usuário alguma falha ao preencher os campos.|
| Responsável pela elaboração do caso de Teste | Pedro Francis Maia Coelho                                                                         |

| Caso de Teste                                | CT-15 - Verificar Funcionamento da Alteração de Proprietários                          |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-04 - A aplicação deve permitir ao usuário cadastrar/alterar/pesquisar informações dos proprietários.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - Clicar no botão para visualizar dados de algum proprietário                                        |
|                                              | 02 - Clicar em Alterar                                    |
|                                              | 03 - Alterar alguns campos com os dados diferentes. |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | Se o salvamento tiver êxito uma mensagem de sucesso aparecerá na tela. Caso caso contrário aparecerá mensagem de erro infomando ao usuário alguma falha ao preencher os campos. |
| Responsável pela elaboração do caso de Teste | Pedro Francis Maia Coelho                                                                      |

---

## RF-05 LOCATÁRIOS

| Caso de Teste                                | CT-16 - Verificar Funcionamento dos Links do Módulo Locatários                     |
| :------------------------------------------- | :-------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-05 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos. |
| Passos                                       | Seguir os seguintes passos:                                                       |
|                                              | 01 - Acessar o aplicativo ImmoControl                                             |
|                                              | 02 - No Menu lateral esquero clicar na opção "Locatários                          |
|                                              | 03 - Clicar no botão para visualizar os dados de cada locatário                   |
|                                              | 04 - Clicar no botão para filtrar os dados de locatário                           |
|                                              | 05 - Clicar no botão para cadastrar novo locatário                                |
| Critérios de êxito                           | Todos os links da página devem encaminhar os usuários para as páginas descritas.  |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                 |

| Caso de Teste                                | CT-17 - Verificar Funcionamento Módulo Locatários: Função Filtrar                                                                      |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-05 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.                                                     |
| Passos                                       | Seguir os seguintes passos:                                                                                                           |
|                                              | 01 - A partir da tela inicial do Módulo Locatários                                                                                    |
|                                              | 02 - Clicar no botão para filtrar os dados de locatário                                                                               |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página. |
|                                              | 04 - Clicar em Filtrar                                                                                                                |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal os locatários que correspondem aos dados inseridos.        |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                                                                     |

| Caso de Teste                                | CT-18 - Verificar Funcionamento Módulo Locatários: Função Cadastrar                        |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-05 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo Locatários                                        |
|                                              | 02 - Clicar no botão para cadastrar novo locatário                                        |
|                                              | 03 - Preencher todos os campos com os respectivos dados de um locatário fictício          |
|                                              | 04 - Clicar em Cadastrar                                                                  |
| Critérios de êxito                           | O sistema deverá apresentar na tela principal linha contendo o locatário recém cadastrado |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                         |

| Caso de Teste                                | CT-19 - Verificar Funcionamento Módulo Locatários: Função Alterar                          |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-05 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo Locatários                                        |
|                                              | 02 - Clicar no botão para visualizar dados de locatário                                   |
|                                              | 03 - Clicar em Alterar                                                                    |
|                                              | 03 - Alterar alguns campos com os dados do locatário                                      |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                         |

---

## RF-06 CONTRATOS 

| Caso de Teste                                | CT-20 - Verificar Funcionamento dos Links do Módulo Contratos                    |
| :------------------------------------------- | :-------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-06 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos Contratos. |
| Passos                                       | Seguir os seguintes passos:                                                       |
|                                              | 01 - Acessar o aplicativo ImmoControl                                             |
|                                              | 02 - No Menu lateral esquerdo clicar na opção "Contratos"                           |
|                                              | 03 - Clicar no botão do lado direito de cada contrato para visualizar os dados      |
|                                              | 04 - Clicar no botão para filtrar os dados do contrato                           |
|                                              | 05 - Clicar no botão para cadastrar novo contrato                                   |
| Critérios de êxito                           | Todos os links da página devem encaminhar os usuários para as páginas descritas.  |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos      |

| Caso de Teste                                | CT-21 - Verificar Funcionamento Módulo imóveis: Função Filtrar                                                                      |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-06 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos contratos.                                                     |
| Passos                                       | Seguir os seguintes passos:                                                                                                           |
|                                              | 01 - A partir da tela inicial do Módulo contratos                                                                                    |
|                                              | 02 - Clicar no botão para filtrar os dados de contrato                                                                              |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página. |
|                                              | 04 - Clicar em Filtrar                                                                                                                |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal os contratos que correspondem aos dados inseridos.        |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos     | 

| Caso de Teste                                | CT-22 - Verificar Funcionamento Módulo imóveis: Função Cadastrar                        |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-06 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos imóveis.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo imóveis                                        |
|                                              | 02 - Clicar no botão para cadastrar novo imóvel                                      |
|                                              | 03 - Preencher todos os campos com os respectivos dados de um imóvel fictício          |
|                                              | 04 - Clicar em Cadastrar                                                                  |
| Critérios de êxito                           | O sistema deverá apresentar na tela principal linha contendo o imóvel recém cadastrado |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos                                                                         |

| Caso de Teste                                | CT-23 - Verificar Funcionamento Módulo imóveis: Função Alterar                          |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-06 - aplicação deve permitir cadastrar/alterar/pesquisar dados dos contratos.         |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo contratos                                        |
|                                              | 02 - Clicar no botão para visualizar dados de contrato                                  |
|                                              | 03 - Clicar em Alterar                                                                    |
|                                              | 03 - Alterar alguns campos com os dados do contrato                                     |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso |
| Responsável pela elaboração do caso de Teste | Zander Vasconcelos                                                                         |

---

## RF-07 FATURAS
| Caso de Teste                                | CT-24 - Verificar Funcionamento dos Links do Módulo Faturas                              |
| :------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-07 - A aplicação deve permitir cadastrar os pagamentos                               |
| Passos                                       | Seguir os seguintes passos:                                                             |
|                                              | 01 - Acessar o aplicativo ImmoControl                                                   |
|                                              | 02 - No Menu lateral esquero clicar na opção "Faturas"                                  |
|                                              | 03 - Clicar no botão para visualizar os dados de uma fatura                             |
|                                              | 04 - Clicar no botão "INFORMAR PAGAMENTO"                                               |
|                                              | 05 - Preencher uma data de pagamento                                                    |
|                                              | 06 - Clicar no botão "SALVAR"                                                           |
| Critérios de êxito                           | Uma nova consulta sobre a mesma fatura deve retornar com a data de pagamento informada  |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                       |

| Caso de Teste                                | CT-25 - Verificar Funcionamento Módulo Faturas: Função Filtrar                                                                         |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Requisitos Associados                        | RF-07 - A aplicação deve permitir cadastrar os pagamentos                                                                             |
| Passos                                       | Seguir os seguintes passos:                                                                                                           |
|                                              | 01 - A partir da tela inicial do Módulo Faturas                                                                                       |
|                                              | 02 - Clicar no botão para filtrar os dados                                                                                            |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página. |
|                                              | 04 - Clicar em Filtrar                                                                                                                |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal as faturas  que correspondem aos dados inseridos.          |
| Responsável pela elaboração do caso de Teste | Eduardo Wollinger                                                                                                                     |

---

## RF-08 CONTROLE DE VENCIMENTO DE ALUGUÉIS

| Caso de Teste                                | CT-26 - Verificar a geração de alertas das faturas com vencimentos próximos e faturas vencidas                                                                                             |
| :------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-08 - A aplicação deve gerar alerta sobre vencimentos próximos e atrasos de aluguel.                                                                                                    |
| Passos                                       | Seguir os seguintes passos:                                                                                                                                                               |
|                                              | 01 - Acessar o aplicativo ImmoControl.                                                                                                                                                    |
|                                              | 02 - Verificar no campo inferior direito os alertas de vencimentos e faturas vencidas                                                                                                     |
| Critérios de êxito                           | Após a visualização dos alertas de vencimentos ou vencidas no Dashboard, as mesmas podem ser confirmadas ou conferidas clicando no botão Faturas no sidebar localizado à direita da tela. |
| Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva e Pedro Francis Maia Coelho                                                                                                                                                   |

---

## RF-09 REQUISIÇÕES

|  Caso de Teste                               | CT-27 - Verificar Funcionamento dos Links do Módulo Requisições
| :------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-09 - A aplicação deve permitir cadastrar/alterar Requisições.                     |
| Passos                                       | Seguir os seguintes passos:                                                          |
|                                              | 01 - Acessar o aplicativo ImmoControl                                                |
|                                              | 02 - No Menu lateral esquero clicar na opção "Requisições"                           |
|                                              | 03 - Clicar no botão para visualizar os dados de cada Requisição                     |
|                                              | 04 - Clicar no botão "Voltar" para retornar à página principal do Módulo Requisição  |
|                                              | 05 - Clicar no botão para filtrar os dados de Requisições                            |
|                                              | 06 - Clicar no botão "Voltar" para retornar à página principal do Módulo Requisições |
|                                              | 07 - Clicar no botão para cadastrar nova Requisição                                  |
|                                              | 08 - Clicar no botão "Voltar" para retornar à página principal do Módulo Requisição  |
| Critérios de êxito                           | Todos os links da página devem encaminhar os usuários para as páginas descritas.     |
| Responsável pela elaboração do caso de Teste | Ismarlei Magela                                                                      |

| Caso de Teste                                | CT-28 - Verificar Funcionamento Módulo Requisições: Função Filtrar                                                                        |
| :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-09 - A aplicação deve permitir cadastrar/alterar informações de Requisições.                                                          |
| Passos                                       | Seguir os seguintes passos:                                                                                                              |
|                                              | 01 - A partir da tela inicial do Módulo Requisições                                                                                      |
|                                              | 02 - Clicar no botão para filtrar os dados das Requisições                                                                               |
|                                              | 03 - Digitar no filtro de pesquisa algum(ns) dado(s) presente(s) na página de filtros e verificar se o resultado é exibido na página.    |
|                                              | 04 - Clicar em Filtrar                                                                                                                   |
| Critérios de êxito                           | Os dados inseridos no filtro de pesquisa devem apresentar na tela pincipal as requisições que correspondem aos dados inseridos.          |
| Responsável pela elaboração do caso de Teste | Ismarlei Magela                                                                                                                          |

| Caso de Teste                                | CT-29 - Verificar Funcionamento Módulo Requisições: Função Cadastrar                        |
| :------------------------------------------- | :----------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-09 - A aplicação deve permitir cadastrar/alterar informações de Requisições.            |
| Passos                                       | Seguir os seguintes passos:                                                                |
|                                              | 01 - A partir da tela inicial do Módulo Requisições                                        |
|                                              | 02 - Clicar no botão para cadastrar nova requisição                                        |
|                                              | 03 - Preencher todos os campos com os respectivos dados de uma requisição fictícia         |
|                                              | 04 - Clicar em Cadastrar                                                                   |
| Critérios de êxito                           | O sistema deverá apresentar na tela principal linha contendo a requisição recém cadastrada |
| Responsável pela elaboração do caso de Teste | Ismarlei MAgela                                                                            |

| Caso de Teste                                | CT-30 - Verificar Funcionamento Módulo Requisições: Função Alterar                         |
| :------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-09 - A aplicação deve permitir cadastrar/alterar informações de Requisições.           |
| Passos                                       | Seguir os seguintes passos:                                                               |
|                                              | 01 - A partir da tela inicial do Módulo Requisições                                       |
|                                              | 02 - Clicar no botão para visualizar dados de requisição                                  |
|                                              | 03 - Clicar em Alterar                                                                    |
|                                              | 03 - Alterar alguns campos com os dados de requisição                                     |
|                                              | 04 - Clicar em Salvar                                                                     |
| Critérios de êxito                           | O sistema deverá apresentar uma popup informando que os dados foram alterados com sucesso |
| Responsável pela elaboração do caso de Teste | Ismarlei Magela                                                                           |


---

## RF-10 DASHBOARD

| Caso de Teste                                | CT-31 - Vizualização das principais informações e verificar se os botões do sidebar localizado à esquerda do Dashboard estão encaminhando para as respectivas telas corretamente.                                                                          |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados                        | RF-02 - A aplicação deve apresentar um Dashboard com as principais informações sobre os contratos gerenciados pela imobiliária                                                                                                                            |
| Passos                                       | Seguir os seguintes passos:                                                                                                                                                                                                                               |
|                                              | 01 - Acessar o aplicativo ImmoControl.                                                                                                                                                                                                                    |
|                                              | 02 - Analisar o gráfico de faturamento mês a mês no campo superior do Dashboard, verificar o gráfico de vacância física de imóveis no campo inferior direito e visualizar os alertas de vencimentos e faturas vencidas no campo inferior direito da tela. |
|                                              | 03 - Clicar nos botões do Sidebar do Dashboard.                                                                                                                                                                                                           |
| Critérios de êxito                           | Após a visualização das informações gráficas no Dashboard, as mesmas podem ser confirmadas ou conferidas clicando nos botões do Sidebar, que por sua vez deve encaminhar os usuários para as telas descritas.                                             |
| Responsável pela elaboração do caso de Teste | Sócratis Gomes da Silva e Pedro Francis                                                                                                                                                                                                                   |

---
