# Desenvolvimento de ERP Simplificado para PMEs com Metodologia Ágil e Foco em Automação

Este projeto faz parte do Trabalho de Conclusão de Curso (TCC) do curso Técnico em Desenvolvimento de Sistemas – SENAI.
Trata-se do desenvolvimento de um sistema ERP simplificado, projetado especialmente para atender Pequenas e Médias Empresas (PMEs) com foco em automação de processos, agilidade operacional e metodologias ágeis, utilizando o framework Scrum.

A proposta nasce da necessidade de soluções acessíveis e eficientes que melhorem a gestão empresarial sem a complexidade ou os custos dos ERPs tradicionais. O sistema permite a administração integrada de usuários, clientes, produtos, vendas, estoque e relatórios.

## ⚙️ Arquitetura e Tecnologias

 O sistema foi desenvolvido com uma arquitetura em camadas, onde cada tecnologia desempenha um papel fundamental na comunicação e funcionamento geral da aplicação, garantindo robustez e escalabilidade.

## Backend

Quando o usuário realiza uma ação, como o cadastro de um produto, o frontend envia uma requisição HTTP (por exemplo, um POST) para o backend. O backend foi construído utilizando Node.js e o framework Express. Ele é responsável por:

- Receber e rotear as requisições HTTP.

- Processar as regras de negócio da aplicação.

- Validar os dados recebidos para garantir a integridade.

- Interagir com o banco de dados através do ORM.

## ORM (Object-Relational Mapping)
Para a interação com o banco de dados, utilizamos o Prisma como ORM. O Prisma atua como uma camada de abstração, convertendo as operações do backend em comandos SQL, garantindo que os dados sejam manipulados de forma segura e eficiente, e facilitando o desenvolvimento e a manutenção do código.

Banco de Dados
O banco de dados utilizado é o MySQL/MariaDB, que está sendo executado localmente através do XAMPP. Ele é responsável por armazenar todas as informações persistentes do sistema, como usuários, clientes, produtos, vendas e relatórios. O XAMPP facilita a configuração e o gerenciamento do ambiente de banco de dados durante o desenvolvimento.

Fluxo de Exemplo: Cadastro de Produto
Para ilustrar a integração entre as camadas, considere o processo de cadastro de um novo produto:

- O usuário preenche um formulário no frontend (HTML, CSS, JavaScript).

- O JavaScript no frontend envia os dados do formulário para o backend via uma requisição POST para o endpoint /produtos.

- O backend (Node.js com Express), ao receber essa requisição, valida os dados do novo produto.

- Em seguida, o backend utiliza o Prisma para construir e executar a operação de inserção no banco de dados MySQL/MariaDB.

- Após a inserção bem-sucedida, o banco de dados retorna uma confirmação ao backend.

- O backend, por sua vez, envia uma resposta ao frontend (por exemplo, um status 201 Created e os dados do novo produto).

- Assim, o usuário recebe uma mensagem de sucesso na interface e pode visualizar o novo produto cadastrado, demonstrando a integração eficiente e fluida entre todas as camadas do sistema.




## 🚀 Como Rodar o Projeto

```bash
git clone https://github.com/Gabihdemori/NexoERP_end.git
cd api
npm install
npx prisma migrate dev
npm run dev
```

## 📬 Contato

Caso deseje entrar em contato para fins acadêmicos, colaborações ou feedbacks:
- **Gabriela Helena**
- GitHub: [@Gabihdemori](https://github.com/Gabihdemori)

---

📝 Projeto acadêmico desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas – SENAI  
📍 Tema: Aplicação prática de metodologias ágeis no contexto de pequenas e médias empresas
