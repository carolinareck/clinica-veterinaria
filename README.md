

Sistema Web - Clínica Veterinária


Desenvolvido por: Carolina Reck Behenck Speransa
Curso: Análise e Desenvolvimento de Sistemas - 3º Termo
Disciplina: Projeto Integrador Extensionista – ADS 3

------------------------------
Estrutura do Projeto
------------------------------
- frontend/
  Contém os arquivos HTML, CSS e scripts JS da interface web

- backend/
  Contém o servidor Node.js com lógica de API (arquivo principal: server.js)

- database/
  (Opcional) Para armazenamento de dados em banco (não implementado nesta versão)

- documentacao.docx
  Documento com explicações e prints das telas

------------------------------
Como Executar o Projeto
------------------------------
1. Certifique-se de ter o Node.js instalado na máquina.
2. Navegue até a pasta onde está o arquivo `server.js`
3. Instale as dependências com:
   npm install
4. Inicie o servidor com:
   node server.js
5. Abra o navegador e acesse os arquivos HTML na pasta "frontend"

------------------------------
Funcionalidades Principais
------------------------------
- Cadastro de Animais
- Registro de Serviços (consultas, exames, etc.)
- Consulta de Histórico por ID do Animal

------------------------------
Observações
------------------------------
- O sistema é uma aplicação didática e não possui banco de dados persistente.
- Os dados serão perdidos ao reiniciar o servidor.
- Para fins acadêmicos, o foco está em aplicar arquitetura fullstack e integração básica.

