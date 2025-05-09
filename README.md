# Chat em Tempo Real – Projeto Top

Uma aplicação de chat em tempo real construída com Node.js, Express e Socket.IO, que demonstra comunicação full stack, design moderno e diversas funcionalidades extras. Este projeto foi desenvolvido para servir como um excelente cartão de visitas no seu portfólio e perfil do LinkedIn.

## Sumário

- [Características](#caracter%C3%ADsticas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pr%C3%A9-requisitos)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Como Utilizar](#como-utilizar)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Melhorias Futuras](#melhorias-futuras)
- [Licença](#licen%C3%A7a)

## Características

- **Salas de Chat**: O usuário escolhe seu nome e a sala (Geral, Tecnologia, Música, Esportes) para participar.
- **Interface Responsiva e Moderna**: Desenvolvida com Bootstrap e Google Fonts (Poppins); possui layout com fundo animado e design diferenciado.
- **Dark Mode com Toggle**: Permite alternar entre tema claro e escuro com salvamento de preferência via LocalStorage.
- **Notificações Sonoras**: Ao receber novas mensagens de outros usuários ou notificações de sistema, um som é reproduzido.
- **Avatares e Lista de Usuários Online**: Exibe avatares gerados dinamicamente (via UI Avatars) e mostra os usuários conectados na sala.
- **Indicador de Digitação**: Quando um usuário está digitando, os demais veem um indicador animado (“X está digitando...”).
- **Feedback Visual com Toasts**: O sistema exibe toasts para eventos importantes como entrada e saída de usuários.
- **Animações Suaves**: Mensagens entram com efeito fade‑in para uma experiência mais atraente e moderna.
  
## Tecnologias Utilizadas

- **Back-end**  
  - Node.js  
  - Express  
  - Socket.IO

- **Front-end**  
  - HTML5, CSS3 e JavaScript  
  - Bootstrap 5  
  - Google Fonts (Poppins)  
  - Font Awesome  
  - API UI Avatars (para avatares dinâmicos)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
- NPM ou Yarn

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Murilomm8/Chat.git
   cd chat-app

2.Instale as dependências:
npm install

Essa instalação inclui o Express e o Socket.IO entre outras dependências necessárias.

Como Utilizar
Iniciando o Servidor:

No diretório raiz do projeto, execute:
npm start

O servidor será iniciado na porta 3000 (por padrão) ou em outra definida pela variável de ambiente PORT.

Acessando o Chat:

Abra seu navegador e acesse: http://localhost:3000

Fluxo do Usuário:

Ao acessar, um modal é exibido solicitando o nome e a sala de chat.

Após inserir os dados e clicar em "Entrar", o usuário entra na sala selecionada.

A interface exibe a lista de usuários online (com avatares) no canto superior direito e o nome da sala no cabeçalho.

O usuário pode enviar mensagens, que são exibidas com efeitos de fade‑in. Mensagens enviadas por ele aparecem diferenciadas (alinhadas à direita, com cor de fundo ajustada no tema claro ou escuro).

Ao digitar, um indicador é mostrado para os demais usuários.

Notificações visuais (toasts) informam quando um usuário entra ou sai da sala.

É possível alternar entre tema claro e escuro utilizando o botão de dark mode.

Arquitetura do Projeto
chat-app/
├── package.json          # Configuração e dependências do projeto
├── server.js             # Configuração do servidor (Express e Socket.IO), gerenciamento de salas e eventos
└── public/
    └── index.html        # Interface do usuário (HTML, CSS e JavaScript)
server.js:

Configura o Express para servir a pasta public.

Gerencia conexões via Socket.IO, eventos de "join room", "chat message", "typing" e "disconnect".

Mantém uma lista de usuários online por sala e emite notificações de sistema (como entrada e saída de usuários).

public/index.html:

Fornece a interface visual com modal para escolha de nome e sala.

Possui lógica para gerenciar o dark mode, enviar e receber mensagens, exibir indicadores de digitação e toasts para notificações.

Integra sons de notificação via objeto Audio para reforçar interações.

Melhorias Futuras
Implementar salas privadas ou mensagens diretas entre usuários.

Adicionar upload de arquivos ou compartilhamento de imagens.

Implementar autenticação (por exemplo, com JWT ou serviços externos) para um controle mais refinado dos usuários.

Permitir customização de avatar com upload de imagem pelo usuário.

Integrar um banco de dados para persistir histórico de mensagens, usuários e salas, garantindo a recuperação de conversas anteriores.