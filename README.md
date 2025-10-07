# Todo List com Testes E2E usando Playwright :books:

## 📖 Sobre o Projeto

Este projeto demonstra uma aplicação **Todo List** (lista de tarefas) desenvolvida em JavaScript, HTML e CSS, com uma suíte completa de testes end-to-end automatizados usando o **Playwright** - framework de automação de testes da Microsoft.

A aplicação trabalha com diversos conceitos de manipulação do DOM e inclui recursos como adição, edição, conclusão e remoção de tarefas, além de filtragem por prioridade e pesquisa, utilizando boas práticas de usabilidade.

![Gif que mostra o projeto em execução e as funcionalidades](https://i.imgur.com/EeWkRbK.gif)

## 👥 Equipe do Projeto

-   **Davi José**
-   **Douglas Machado**
-   **Estevão Rodrigues**
-   **Henrique Lobo**
-   **Paloma Carvalho**

**Professor:** Cleiton Silva Tavares

## 🚀 Tecnologias Utilizadas

-   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
-   **Testes E2E:** Playwright
-   **Servidor Local:** http-server
-   **Armazenamento:** LocalStorage

## 📋 Funcionalidades da Aplicação

-   ✅ Adição de Tarefas
-   ✏️ Edição de Tarefas
-   🔄 Marcação de Tarefas como Concluídas
-   🗑️ Exclusão de Tarefas
-   🔍 Pesquisa de Tarefas
-   🏷️ Filtragem de Tarefas por Status
-   💾 Persistência no Local Storage
-   📱 Interface Responsiva

## 🧪 Testes Automatizados

O projeto inclui uma suíte completa de testes E2E que validam:

1. **Marcar tarefa como concluída** (`teste01-marcar-como-concluida.spec.js`)
2. **Editar tarefa** (`teste02-editar-tarefa.spec.js`)
3. **Excluir tarefa** (`teste03-excluir-tarefa.spec.js`)
4. **Filtrar tarefas** (`teste04-filtrar-tarefas.spec.js`)
5. **Pesquisar tarefas** (`teste05-pesquisar-tarefas.spec.js`)

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

-   [Node.js](https://nodejs.org/) (versão 16 ou superior)
-   [Git](https://git-scm.com/) para clonar o repositório

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/Palomadcarvalho/Playwright.git
cd Playwright
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Instale os navegadores do Playwright

```bash
npx playwright install
```

### 4. Instale apenas o Chromium (opcional - para economizar espaço)

```bash
npx playwright install chromium
```

## 🎮 Como Executar o Projeto

### 🌐 Executar a Aplicação

#### Opção 1: Usando o servidor HTTP integrado

```bash
npm start
```

A aplicação estará disponível em: `http://localhost:5500`

#### Opção 2: Abrindo diretamente no navegador

Abra o arquivo `index.html` diretamente no seu navegador

### 🧪 Executar os Testes

#### Executar todos os testes

```bash
npm test
```

#### Executar testes com interface visual

```bash
npm run test:ui
```

#### Executar testes em modo debug

```bash
npm run test:debug
```

#### Executar testes específicos

```bash
# Executar apenas um teste específico
npx playwright test teste01-marcar-como-concluida.spec.js

# Executar testes de uma pasta específica
npx playwright test tests/casos-individuais/
```

### 📊 Visualizar Relatórios de Teste

Após executar os testes, um relatório HTML será gerado automaticamente:

```bash
npx playwright show-report
```

## 🔧 Configuração dos Testes

O arquivo `playwright.config.js` contém as configurações dos testes:

-   **Timeout:** 5 minutos por teste
-   **Workers:** 1 (execução sequencial)
-   **Navegador:** Chromium (Desktop Chrome)
-   **Screenshots:** Habilitado em falhas
-   **Trace:** Habilitado para debugging
-   **Servidor Web:** Inicia automaticamente na porta 5500

### Configurações Personalizadas

-   **Modo Visual:** `headless: false` - navegador visível durante os testes
-   **Slow Motion:** `slowMo: 10000` - pausa de 10s entre ações (para demonstração)
-   **Base URL:** `http://localhost:5500`

## 📁 Estrutura do Projeto

```
├── index.html              # Página principal da aplicação
├── package.json           # Dependências e scripts do projeto
├── playwright.config.js   # Configurações do Playwright
├── README.md             # Documentação do projeto
├── assets/               # Recursos estáticos
│   └── favicon.ico
├── css/                  # Estilos CSS
│   └── style.css
├── js/                   # Scripts JavaScript
│   └── script.js
└── tests/                # Suíte de testes
    └── casos-individuais/
        ├── README.md
        ├── teste01-marcar-como-concluida.spec.js
        ├── teste02-editar-tarefa.spec.js
        ├── teste03-excluir-tarefa.spec.js
        ├── teste04-filtrar-tarefas.spec.js
        ├── teste05-pesquisar-tarefas.spec.js
        └── utils.js      # Funções utilitárias para testes
```

## 🛠️ Scripts Disponíveis

| Script               | Descrição                           |
| -------------------- | ----------------------------------- |
| `npm start`          | Inicia servidor HTTP na porta 5500  |
| `npm test`           | Executa todos os testes E2E         |
| `npm run test:ui`    | Executa testes com interface visual |
| `npm run test:debug` | Executa testes em modo debug        |

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

## 🔗 Links Úteis

-   [Documentação do Playwright](https://playwright.dev/)
-   [Guia de Testes E2E](https://playwright.dev/docs/writing-tests)
-   [Node.js Download](https://nodejs.org/)
-   [Git Download](https://git-scm.com/)
