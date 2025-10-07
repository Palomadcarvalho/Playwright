const { test, expect } = require('@playwright/test');
const { pausar, updateStatus, configurarPaginaTeste, finalizarTeste, prepararAmbienteTeste } = require('./utils');

test('Teste 1: Marcar tarefa como concluída', async ({ page }) => {
  await configurarPaginaTeste(page, 'Marcar tarefa como concluída');
  await prepararAmbienteTeste(page);
  
  // Passo 1: Adicionar uma tarefa para o teste
  const taskTitle = 'Tarefa para marcar como concluída';
  await updateStatus(page, `Adicionando uma tarefa para teste: "${taskTitle}"`);
  await page.locator('#todo-input').fill(taskTitle);
  await pausar(page, 3);
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 2: Localizar a tarefa na lista
  await updateStatus(page, 'Localizando a tarefa na lista...');
  const todoElement = page.locator('.todo').filter({ hasText: taskTitle });
  await expect(todoElement).toBeVisible();
  await pausar(page, 3);
  
  // Passo 3: Marcar a tarefa como concluída
  await updateStatus(page, 'Marcando a tarefa como concluída...');
  await todoElement.locator('.finish-todo').click();
  await pausar(page, 3);
  
  // Passo 4: Verificar se a tarefa foi marcada como concluída
  await updateStatus(page, 'Verificando se a tarefa foi marcada como concluída...');
  await expect(todoElement).toHaveClass(/done/);
  await pausar(page, 3);
  
  await finalizarTeste(page, 'Teste concluído! A tarefa foi marcada como concluída com sucesso.');
});
