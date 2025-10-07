# Testes Automatizados com Playwright - Todo List

Este diretório contém testes individuais para cada funcionalidade da aplicação Todo List.

## Como Executar os Testes

### Executar um teste específico

```powershell
npx playwright test tests/casos-individuais/teste01-adicionar-tarefa.spec.js
```

### Lista de Testes Disponíveis

1. **Adicionar uma nova tarefa**
   ```
   npx playwright test tests/casos-individuais/teste01-adicionar-tarefa.spec.js
   ```

2. **Marcar tarefa como concluída**
   ```
   npx playwright test tests/casos-individuais/teste02-marcar-como-concluida.spec.js
   ```

3. **Editar uma tarefa existente**
   ```
   npx playwright test tests/casos-individuais/teste03-editar-tarefa.spec.js
   ```

4. **Excluir uma tarefa**
   ```
   npx playwright test tests/casos-individuais/teste04-excluir-tarefa.spec.js
   ```

5. **Filtrar tarefas**
   ```
   npx playwright test tests/casos-individuais/teste05-filtrar-tarefas.spec.js
   ```

6. **Pesquisar tarefas**
   ```
   npx playwright test tests/casos-individuais/teste06-pesquisar-tarefas.spec.js
   ```

7. **Validar persistência no localStorage**
   ```
   npx playwright test tests/casos-individuais/teste07-persistencia-localstorage.spec.js
   ```

## Observações

- Cada teste é independente e pode ser executado individualmente
- Os testes são executados em velocidade reduzida para melhor visualização
- Painéis informativos são exibidos na página para acompanhar o progresso do teste
- É recomendado abrir o console do navegador para ver mensagens detalhadas