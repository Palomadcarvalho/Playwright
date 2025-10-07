const { test, expect } = require('@playwright/test');
const { pausar, updateStatus, configurarPaginaTeste, finalizarTeste, prepararAmbienteTeste } = require('./utils');

test('Teste 3: Editar uma tarefa existente', async ({ page }) => {
  await configurarPaginaTeste(page, 'Editar uma tarefa existente');
  await prepararAmbienteTeste(page);
  
  // Passo 1: Adicionar uma tarefa para editar
  const taskTitle = 'Tarefa para editar';
  const newTaskTitle = 'Tarefa editada';
  
  await updateStatus(page, `Adicionando uma tarefa inicial: "${taskTitle}"`);
  await page.locator('#todo-input').fill(taskTitle);
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 2: Verificar se a tarefa foi adicionada
  await updateStatus(page, 'Verificando se a tarefa foi adicionada...');
  const todoElement = page.locator('.todo').filter({ hasText: taskTitle });
  await expect(todoElement).toBeVisible();
  await pausar(page, 3);
  
  // Passo 3: Clicar no botão de edição
  await updateStatus(page, 'Clicando no botão de edição...');
  await todoElement.locator('.edit-todo').click();
  await pausar(page, 3);
  
  // Passo 4: Verificar se o formulário de edição está visível
  await updateStatus(page, 'Verificando se o formulário de edição está visível...');
  await expect(page.locator('#edit-form')).toBeVisible();
  await expect(page.locator('#todo-form')).toHaveClass(/hide/);
  await pausar(page, 3);
  
  // Passo 5: Editar a tarefa
  await updateStatus(page, `Editando o título para: "${newTaskTitle}"`);
  await page.locator('#edit-input').click();
  await pausar(page, 1);
  await page.locator('#edit-input').fill(newTaskTitle);
  await pausar(page, 3);
  
  // Passo 6: Alterar a prioridade
  await updateStatus(page, 'Alterando a prioridade para baixa...');
  await page.selectOption('#select-priority-edit', 'low');
  await pausar(page, 3);
  
  // Passo 7: Salvar as alterações
  await updateStatus(page, 'Salvando as alterações...');
  await page.locator('#edit-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 8: Verificar se a tarefa foi atualizada
  await updateStatus(page, 'Verificando se a tarefa foi atualizada...');
  await expect(page.locator('.todo h3').filter({ hasText: newTaskTitle })).toBeVisible();
  await pausar(page, 3);
  
  // Passo 9: Verificar se a prioridade foi alterada
  await updateStatus(page, 'Verificando se a prioridade foi alterada...');
  const priorityElement = page.locator('.todo').filter({ hasText: newTaskTitle }).locator('.priority-low');
  await expect(priorityElement).toBeVisible();
  await expect(priorityElement).toHaveText('Baixa');
  await pausar(page, 3);
  
  await finalizarTeste(page);
});