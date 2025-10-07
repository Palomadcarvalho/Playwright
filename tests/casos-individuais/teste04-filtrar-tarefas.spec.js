const { test, expect } = require('@playwright/test');
const { pausar, updateStatus, configurarPaginaTeste, finalizarTeste, prepararAmbienteTeste } = require('./utils');

test('Teste 5: Filtrar tarefas', async ({ page }) => {
  await configurarPaginaTeste(page, 'Filtrar tarefas');
  await prepararAmbienteTeste(page);
  
  // Passo 1: Adicionar várias tarefas para testar o filtro
  await updateStatus(page, 'Adicionando tarefas para testar o filtro...');
  
  // Adicionar primeira tarefa
  await updateStatus(page, 'Adicionando tarefa 1: "Estudar JavaScript"');
  await page.locator('#todo-input').fill('Estudar JavaScript');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 2);
  
  // Adicionar segunda tarefa
  await updateStatus(page, 'Adicionando tarefa 2: "Fazer compras"');
  await page.locator('#todo-input').fill('Fazer compras');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 2);
  
  // Adicionar terceira tarefa
  await updateStatus(page, 'Adicionando tarefa 3: "Exercícios físicos"');
  await page.locator('#todo-input').fill('Exercícios físicos');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 2: Marcar algumas tarefas como concluídas
  await updateStatus(page, 'Marcando a primeira e terceira tarefas como concluídas...');
  await page.locator('.todo').filter({ hasText: 'Estudar JavaScript' }).locator('.finish-todo').click();
  await pausar(page, 2);
  await page.locator('.todo').filter({ hasText: 'Exercícios físicos' }).locator('.finish-todo').click();
  await pausar(page, 3);
  
  // Passo 3: Verificar o status atual
  await updateStatus(page, 'Verificando o status atual...');
  await expect(page.locator('#countStatus')).toContainText('Status: 2/3');
  await pausar(page, 3);
  
  // Passo 4: Filtrar por tarefas concluídas
  await updateStatus(page, 'Filtrando tarefas concluídas...');
  await page.selectOption('#filter-select', 'done');
  await pausar(page, 5);
  
  // Passo 5: Verificar se apenas as tarefas concluídas estão visíveis
  await updateStatus(page, 'Verificando se apenas as tarefas concluídas estão visíveis...');
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Exercícios físicos' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toHaveCSS('display', 'none');
  await pausar(page, 3);
  
  // Passo 6: Filtrar por tarefas pendentes
  await updateStatus(page, 'Filtrando tarefas pendentes...');
  await page.selectOption('#filter-select', 'todo');
  await pausar(page, 5);
  
  // Passo 7: Verificar se apenas as tarefas pendentes estão visíveis
  await updateStatus(page, 'Verificando se apenas as tarefas pendentes estão visíveis...');
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toHaveCSS('display', 'none');
  await expect(page.locator('.todo').filter({ hasText: 'Exercícios físicos' })).toHaveCSS('display', 'none');
  await pausar(page, 3);
  
  // Passo 8: Mostrar todas as tarefas
  await updateStatus(page, 'Mostrando todas as tarefas...');
  await page.selectOption('#filter-select', 'all');
  await pausar(page, 5);
  
  // Passo 9: Verificar se todas as tarefas estão visíveis
  await updateStatus(page, 'Verificando se todas as tarefas estão visíveis...');
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Exercícios físicos' })).toBeVisible();
  await pausar(page, 3);
  
  await finalizarTeste(page);
});