# ♻️ EcoPonto Digital - Recife

Projeto acadêmico desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas (AV1), com foco na **ODS 11 (Cidades Sustentáveis)** e **ODS 12 (Consumo Responsável)**. O sistema visa conectar moradores de Recife a pontos de coleta seletiva e cooperativas de reciclagem utilizando dados reais.

## 👥 Integrantes e Responsabilidades
* **Danilo**: Desenvolvimento Back-end (Node.js/MySQL).
* **Daniel**: Designer de Interface e Desenvolvimento Front-end (Tailwind CSS).
* **Enzo**: Analista de Dados e Pesquisa (Dados.gov.br).

## 🚀 Funcionalidades do Sistema
O projeto utiliza um sistema de níveis de acesso para garantir a melhor experiência a cada usuário:

### 🏠 Área do Cliente (Empresas e Moradores)
* **Consulta de Pontos**: Mapa interativo com pontos de coleta reais de Recife obtidos via Dados.gov.br.
* **Solicitação de Coleta**: Formulário para agendamento de retiradas de resíduos recicláveis.
* **Guia de Descarte**: Informações educativas sobre o que é reciclável.

### 👷 Área do Colaborador (Cooperativas de Reciclagem)
* **Painel de Gestão**: Visualização de todos os chamados de coleta abertos na cidade.
* **Fila de Atendimento**: Lista detalhada de empresas e locais que aguardam retirada.

## 🛠️ Tecnologias
* **Back-end**: Node.js com framework Express.
* **Banco de Dados**: MySQL (Relacional).
* **Front-end**: HTML5, Tailwind CSS e Fetch API para consumo de dados assíncronos.

## ⚙️ Como Instalar e Rodar
1.  Certifique-se de ter o **Node.js** instalado.
2.  Instale as dependências necessárias:
    ```bash
    npm install express mysql2 path
    ```
3.  Configure as credenciais do seu banco MySQL no arquivo `src/config/db.js` .
4.  Execute o servidor:
    ```bash
    node app.js
    ```



---
Desenvolvido com ❤️ para a cidade do Recife.