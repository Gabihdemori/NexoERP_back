# Desenvolvimento de ERP Simplificado para PMEs com Metodologia Ágil e Foco em Automação

Este projeto faz parte do Trabalho de Conclusão de Curso (TCC) do curso Técnico em Desenvolvimento de Sistemas – SENAI.
Trata-se do desenvolvimento de um sistema ERP simplificado, projetado especialmente para atender Pequenas e Médias Empresas (PMEs) com foco em automação de processos, agilidade operacional e metodologias ágeis, utilizando o framework Scrum.

A proposta nasce da necessidade de soluções acessíveis e eficientes que melhorem a gestão empresarial sem a complexidade ou os custos dos ERPs tradicionais. O sistema permite a administração integrada de usuários, clientes, produtos, vendas, estoque e relatórios.

##⚙️ Arquitetura e Tecnologias
-- O sistema foi desenvolvido com uma arquitetura em camadas, onde cada tecnologia desempenha um papel fundamental na comunicação e funcionamento geral da aplicação, garantindo robustez e escalabilidade.

## Backend
-- Quando o usuário realiza uma ação, como o cadastro de um produto, o frontend envia uma requisição HTTP (por exemplo, um POST) para o backend. O backend foi construído utilizando Node.js e o framework Express. Ele é responsável por:

-- Receber e rotear as requisições HTTP.

-- Processar as regras de negócio da aplicação.

-- Validar os dados recebidos para garantir a integridade.

-- Interagir com o banco de dados através do ORM.

## ORM (Object-Relational Mapping)
Para a interação com o banco de dados, utilizamos o Prisma como ORM. O Prisma atua como uma camada de abstração, convertendo as operações do backend em comandos SQL, garantindo que os dados sejam manipulados de forma segura e eficiente, e facilitando o desenvolvimento e a manutenção do código.

Banco de Dados
O banco de dados utilizado é o MySQL/MariaDB, que está sendo executado localmente através do XAMPP. Ele é responsável por armazenar todas as informações persistentes do sistema, como usuários, clientes, produtos, vendas e relatórios. O XAMPP facilita a configuração e o gerenciamento do ambiente de banco de dados durante o desenvolvimento.

Fluxo de Exemplo: Cadastro de Produto
Para ilustrar a integração entre as camadas, considere o processo de cadastro de um novo produto:

O usuário preenche um formulário no frontend (HTML, CSS, JavaScript).

O JavaScript no frontend envia os dados do formulário para o backend via uma requisição POST para o endpoint /produtos.

O backend (Node.js com Express), ao receber essa requisição, valida os dados do novo produto.

Em seguida, o backend utiliza o Prisma para construir e executar a operação de inserção no banco de dados MySQL/MariaDB.

Após a inserção bem-sucedida, o banco de dados retorna uma confirmação ao backend.

O backend, por sua vez, envia uma resposta ao frontend (por exemplo, um status 201 Created e os dados do novo produto).

Assim, o usuário recebe uma mensagem de sucesso na interface e pode visualizar o novo produto cadastrado, demonstrando a integração eficiente e fluida entre todas as camadas do sistema.

👤 Desenvolvedor
Gabriela Helena (Projeto individual)

🎯 Objetivos do Projeto
Criar uma solução prática e acessível que otimize a gestão de PMEs.

Reduzir tarefas manuais e melhorar o fluxo de informações empresariais.

Utilizar práticas de desenvolvimento ágil, especialmente o Scrum.

Demonstrar a capacidade técnica no desenvolvimento Web, Mobile e Back-end.

Elaborar documentação conforme as normas da ABNT.

⚙️ Metodologia Utilizada
Metodologia Ágil: Scrum

Papéis no projeto:

Product Owner: Gabriela Helena

Scrum Master: Gabriela Helena

Dev Team: Gabriela Helena

Como o projeto é individual, todos os papéis do Scrum foram adaptados à realidade de um desenvolvedor atuando sozinho.

🧩 Planejamento e Modelagem
✅ Business Model Canvas

✅ Proposta inicial do projeto

✅ Cronograma (Gráfico de Gantt)

✅ Requisitos funcionais e casos de uso (DCU)

✅ Modelagem de banco de dados (MER e DER)

✅ Diagrama de classes (Back-end)

🗂 Estrutura de Repositórios
Módulo

Repositório

Repositório Principal

NexoERP

Front-end

NexoERP - Frontend

Back-end

NexoERP - Backend

⚠️ Todos os repositórios são sincronizados com o principal.

📄 Documentação do Projeto
A documentação técnica está disponível na pasta ./docs, incluindo:

Diagramas UML (Casos de Uso, Classes, MER, DER)

Prototipação (Wireframes)

Planejamento estratégico (Canvas, Gantt)

Requisitos e histórico do projeto

📌 Backlog Geral
[x] Definir metodologia ágil (Scrum)

[x] Estabelecer escopo e requisitos iniciais

[x] Modelar o negócio com Canvas

[x] Criar estrutura de repositórios

[x] Elaborar documentação técnica (ABNT)

[x] Definir cronograma com Gantt

[x] Finalizar protótipo funcional

[x] Validar requisitos com DCU

[x] Concluir modelagem MER e DER

[x] Diagramar estrutura do back-end

[x] Iniciar o desenvolvimento do sistema

🔄 Backlog da Sprint Atual
[x] Criar repositórios e adicionar links

[x] Submeter repositório via formulário

[x] Prototipar interface funcional

[x] Identificar requisitos principais

[x] Finalizar casos de uso (DCU)

[x] Finalizar modelagem MER e DER

[x] Iniciar estruturação do back-end

🚀 Como Rodar o Projeto
Este projeto utiliza uma arquitetura em camadas com frontend em HTML, CSS e JavaScript, backend em Node.js com Express e Prisma ORM, e banco de dados MySQL/MariaDB via XAMPP. Para configurar e executar o projeto localmente, siga os passos abaixo:

Clone o repositório:

git clone [URL_DO_SEU_REPOSITORIO]

Instale as dependências: Navegue até a pasta do backend e instale as dependências Node.js.

cd NexoERP_end # Ou o nome da pasta do seu backend
npm install

Configure o banco de dados: Certifique-se de que o XAMPP esteja em execução e que o MySQL/MariaDB esteja ativo. O Prisma utilizará as configurações de conexão definidas no seu arquivo .env (certifique-se de que ele esteja configurado corretamente para o seu ambiente local).

Execute as migrações do Prisma: Isso criará as tabelas no seu banco de dados com base no seu schema Prisma.

npx prisma migrate dev --name init

Inicie o servidor backend:

npm run dev

O backend estará rodando em http://localhost:3000 (ou a porta configurada no seu projeto).

Abra o frontend: Abra os arquivos HTML do seu frontend diretamente no navegador ou configure um servidor local para servi-los, se necessário.

📬 Contato
Caso deseje entrar em contato para fins acadêmicos, colaborações ou feedbacks:

Gabriela Helena

GitHub: @Gabihdemori

📝 Projeto acadêmico desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas – SENAI
📍 Tema: Aplicação prática de metodologias ágeis no contexto de pequenas e médias empresas
