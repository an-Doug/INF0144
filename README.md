INF0144

Projeto desenvolvido para a disciplina de Tópicos Avançados em Desenvolvimento Web, utilizando como referência o conteúdo apresentado pelo canal Doutor Waka. O objetivo do projeto é explorar conceitos modernos de desenvolvimento backend com TypeScript, integração com banco de dados utilizando Prisma ORM e organização de APIs.

📚 Objetivos do Projeto
Estruturar uma aplicação backend utilizando TypeScript
Implementar integração com banco de dados utilizando Prisma
Organizar uma API seguindo boas práticas de desenvolvimento
Experimentar conceitos modernos de desenvolvimento web
Aplicar conhecimentos acadêmicos em um projeto prático
🛠️ Tecnologias Utilizadas
Node.js
TypeScript
Prisma ORM
NPM
Banco de Dados SQL
📁 Estrutura do Projeto
INF0144/
├── api-test/          # Testes e exemplos de requisições da API
├── db/                # Arquivos relacionados ao banco de dados
├── prisma/            # Configurações e schema do Prisma
├── src/               # Código-fonte principal da aplicação
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Dependências e scripts do projeto
├── package-lock.json  # Controle de versões das dependências
├── prisma.config.ts   # Configuração do Prisma
└── tsconfig.json      # Configuração do TypeScript
🚀 Como Executar o Projeto
1. Clone o repositório
git clone https://github.com/an-Doug/INF0144.git
2. Acesse a pasta do projeto
cd INF0144
3. Instale as dependências
npm install
4. Configure o banco de dados

Configure as variáveis de ambiente necessárias no arquivo .env.

Exemplo:

DATABASE_URL="sua_url_do_banco"
5. Execute as migrations do Prisma
npx prisma migrate dev
6. Inicie a aplicação
npm run dev
📌 Funcionalidades Esperadas
Conexão com banco de dados
Operações CRUD
Estruturação de rotas
Organização modular do backend
Testes de API
🎥 Referência Utilizada

Projeto baseado no conteúdo do canal Doutor Waka:

Vídeo utilizado como apoio:
https://youtube.com/watch?v=vkcTw9jgDTw&t
👨‍💻 Autor

Desenvolvido por an-Doug no GitHub

📄 Licença

Este projeto possui finalidade acadêmica e educacional.
