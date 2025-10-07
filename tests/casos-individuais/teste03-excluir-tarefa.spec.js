const { test, expect } = require('@playwright/test');
const { pausar, updateStatus, configurarPaginaTeste, finalizarTeste, prepararAmbienteTeste } = require('./utils');

test('Teste 4: Excluir uma tarefa', async ({ page }) => {
  await configurarPaginaTeste(page, 'Excluir uma tarefa');
  await prepararAmbienteTeste(page);
  
  // Passo 1: Adicionar uma tarefa para remover
  const taskTitle = 'Tarefa para remover';
  
  await updateStatus(page, `Adicionando uma tarefa para teste: "${taskTitle}"`);
  await page.locator('#todo-input').fill(taskTitle);
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 2: Verificar se a tarefa foi adicionada
  await updateStatus(page, 'Verificando se a tarefa foi adicionada...');
  const todoElement = page.locator('.todo').filter({ hasText: taskTitle });
  await expect(todoElement).toBeVisible();
  await pausar(page, 3);
  
  // Passo 3: Verificar o status inicial
  await updateStatus(page, 'Verificando o status inicial...');
  await expect(page.locator('#countStatus')).toContainText('Status: 0/1');
  await pausar(page, 3);
  
  // Passo 4: Remover a tarefa
  await updateStatus(page, 'Removendo a tarefa...');
  await todoElement.locator('.remove-todo').click();
  await pausar(page, 5);
  
  // Passo 5: Verificar se a tarefa foi removida
  await updateStatus(page, 'Verificando se a tarefa foi removida...');
  await expect(page.locator('.todo h3').filter({ hasText: taskTitle })).not.toBeVisible();
  await pausar(page, 3);
  
  // Passo 6: Verificar se o status foi atualizado
  await updateStatus(page, 'Verificando se o status foi atualizado...');
  await expect(page.locator('#countStatus')).toContainText('Status: 0/0');
  await pausar(page, 3);
  
  await finalizarTeste(page);
});