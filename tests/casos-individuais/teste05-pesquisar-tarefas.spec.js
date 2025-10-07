const { test, expect } = require('@playwright/test');
const { pausar, updateStatus, configurarPaginaTeste, finalizarTeste, prepararAmbienteTeste } = require('./utils');

test('Teste 6: Pesquisar tarefas', async ({ page }) => {
  await configurarPaginaTeste(page, 'Pesquisar tarefas');
  await prepararAmbienteTeste(page);
  
  // Passo 1: Adicionar várias tarefas para testar a pesquisa
  await updateStatus(page, 'Adicionando tarefas para testar a pesquisa...');
  
  // Adicionar primeira tarefa
  await updateStatus(page, 'Adicionando tarefa 1: "Estudar JavaScript"');
  await page.locator('#todo-input').fill('Estudar JavaScript');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 2);
  
  // Adicionar segunda tarefa
  await updateStatus(page, 'Adicionando tarefa 2: "Estudar CSS"');
  await page.locator('#todo-input').fill('Estudar CSS');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 2);
  
  // Adicionar terceira tarefa
  await updateStatus(page, 'Adicionando tarefa 3: "Fazer compras"');
  await page.locator('#todo-input').fill('Fazer compras');
  await page.locator('#todo-form button[type="submit"]').click();
  await pausar(page, 3);
  
  // Passo 2: Pesquisar por "Estudar"
  await updateStatus(page, 'Pesquisando por "Estudar"...');
  await page.locator('#search-input').click();
  await pausar(page, 2);
  await page.locator('#search-input').fill('Estudar');
  await pausar(page, 2);
  await page.locator('#search-input').dispatchEvent('keyup');
  await pausar(page, 5);
  
  // Passo 3: Verificar se apenas as tarefas com "Estudar" estão visíveis
  await updateStatus(page, 'Verificando se apenas as tarefas com "Estudar" estão visíveis...');
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Estudar CSS' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toHaveCSS('display', 'none');
  await pausar(page, 3);
  
  // Passo 4: Pesquisar por "CSS"
  await updateStatus(page, 'Pesquisando por "CSS"...');
  await page.locator('#search-input').click();
  await pausar(page, 1);
  await page.locator('#search-input').fill('CSS');
  await page.locator('#search-input').dispatchEvent('keyup');
  await pausar(page, 5);
  
  // Passo 5: Verificar se apenas as tarefas com "CSS" estão visíveis
  await updateStatus(page, 'Verificando se apenas as tarefas com "CSS" estão visíveis...');
  await expect(page.locator('.todo').filter({ hasText: 'Estudar CSS' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toHaveCSS('display', 'none');
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toHaveCSS('display', 'none');
  await pausar(page, 3);
  
  // Passo 6: Limpar a pesquisa
  await updateStatus(page, 'Limpando a pesquisa...');
  await page.locator('#erase-button').click();
  await pausar(page, 5);
  
  // Passo 7: Verificar se todas as tarefas estão visíveis novamente
  await updateStatus(page, 'Verificando se todas as tarefas estão visíveis novamente...');
  await expect(page.locator('.todo').filter({ hasText: 'Estudar JavaScript' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Estudar CSS' })).toBeVisible();
  await expect(page.locator('.todo').filter({ hasText: 'Fazer compras' })).toBeVisible();
  await pausar(page, 3);
  
  await finalizarTeste(page);
});