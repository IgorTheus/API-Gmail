# Funcionalidades

Autenticação com a Conta Google

Validação do token JWT do Google no backend

Exibição das informações do usuário autenticado (nome, email, foto)

# Tecnologias Utilizadas

# *Frontend*:

HTML5

CSS3

JavaScript

Google Identity Services (botão de login)

# *Backend*:

Node.js

Express

Axios

Google Auth Library (google-auth-library)

CORS

# Esrutura das pastas

<code>project/
│
├── public/
│   └── index.html          # Página HTML com botão de login do Google
│
├── node_modules/           # Dependências do Node.js
├── package.json            # Informações e dependências do projeto
├── server.js               # Código do servidor Express
└── README.md               # Este arquivo</code>

# Configuração do Google Identity

Para que o login funcione corretamente, você precisa configurar um OAuth 2.0 Client ID no Google Cloud Console:

Acesse: https://console.cloud.google.com/

Crie um novo projeto (se necessário)

Vá para APIs e Serviços > Credenciais

Clique em Criar credenciais > ID do Cliente OAuth 2.0

Escolha Aplicativo da Web e adicione http://localhost:3000 como origem autorizada

Copie o Client ID gerado e substitua no seu index.html e no backend (server.js):
