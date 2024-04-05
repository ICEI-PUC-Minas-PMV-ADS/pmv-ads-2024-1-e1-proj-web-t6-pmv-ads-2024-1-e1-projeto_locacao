# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2"><strong>Perfil 01: Proprietário da imobiliária  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Proprietário</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Sistema de baixo custo para gestão do negócio, <br>2. Login de acesso total.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2"><strong>Perfil 02: Colaborador  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Colaboradores</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Sistema de rápido acesso e intuitivo, <br>2. Login de acesso a seção de controle financeiro,<br>3. Login de acesso a seção de gestão de contratos, <br>4. Login de acesso a seção de cadastros de inquilinos e 
imóveis.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Proprietário       | Ver indicadores e informações gerenciais com facilidade |Tomar decisões e agir com mais agilidade |
|Colaborador – Setor de Gestão de Contratos |Cadastrar imóveis |Disponibilizar para locação   |
| Colaborador – Setor de Gestão de Contratos | Visualizar os dados dos imóveis | Verificar ou atualizar dados dos imóveis |
| Colaborador – Setor de Gestão de Contratos | Cadastrar inquilinos  | Vincular o inquilino a um imóvel |
| Colaborador – Setor de Gestão de Contratos | Visualizar os dados dos inquilinos | Verificar ou atualizar dados dos inquilinos |
| Colaborador – Setor de Gestão de Contratos | Cadastrar contratos de locação  | Registrar vínculo entre inquilino e imóvel |
| Colaborador – Setor de Gestão de Contratos | Visualizar os dados dos contratos | Verificar ou atualizar dados dos contratos |
| Colaborador – Setor Financeiro |Visualizar faturas de locação dos imóveis | Verificar e atualizar status de pagamentos |

## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | A aplicação deve permitir cadastrar/alterar informações de usuários.| Alta | 
| RF-02 | A aplicação deve permitir ao usuário fazer o login em sua conta.| Alta |
| RF-03 | A aplicação deve permitir cadastrar/alterar/pesquisar novos imóveis.| Alta |
| RF-04 | A aplicação deve permitir ao usuário cadastrar/alterar/pesquisar informações dos proprietários.| Alta |
| RF-05 | A aplicação deve permitir cadastrar/alterar/pesquisar dados dos inquilinos.| Alta |
| RF-06 | A aplicação deve permitir ao usuário cadastrar/alterar/consultar os contratos.| Alta |
| RF-07 | A aplicação deve permitir cadastrar os pagamentos.| Média |
| RF-08 | A aplicação deve gerar alerta sobre vencimentos próximos e atrasos de aluguel.| Baixa |
| RF-09 | A aplicação deve conter um campo para escrever acontecimentos/acordos importantes (solicitação de reparo, notificações, reclamações etc.) entre proprietários e inquilinos para ajudar no gerenciamento da informação.| Baixa |
| RF-10 | A aplicação deve apresentar um Dashboard com as principais informações sobre os contratos gerenciados pela imobiliária.| Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID        | Descrição               |Prioridade |
|-----------|-------------------------|----|
| RNF-01   | O sistema deve implementar mecanismos avançados de criptografia e autenticação, garantindo que informações sensíveis (como dados financeiros e informações de clientes) estejam protegidas contra acessos não autorizados e possíveis ameaças cibernéticas.    | Alta  | 
| RNF-02   | O sistema deve ser construído de uma maneira que permita acomodar um aumento no volume de dados (como registros de clientes, imóveis, contrato.) sem comprometer o desempenho e a velocidade de acesso.                | Média   | 
|RNF-03  |A interface do painel de gerenciamento deve ser clara e de fácil compreensão, permitindo que o gerente acesse as funções rapidamente e sem necessidade de treinamento extenso.  |Baixa|
|RNF-04  |O sistema deve ser compatível com diferentes dispositivos e navegadores (responsividade), permitindo que a recepcionista acesse as informações tanto de um computador desktop quanto de um tablet ou smartphone. |Média|
|RNF-05  |O site deve ter uma alta disponibilidade, garantindo que os clientes possam acessá-lo a qualquer momento, sem enfrentar períodos de inatividade |Alta|

**Prioridade: Alta / Média / Baixa. 
      
