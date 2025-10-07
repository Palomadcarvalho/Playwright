const { expect } = require('@playwright/test');

/**
 * Funções auxiliares para os testes
 */

/**
 * Realiza uma pausa explícita com feedback no console
 * @param {Page} page - Objeto Page do Playwright 
 * @param {number} segundos - Tempo de pausa em segundos
 */
async function pausar(page, segundos) {
  console.log(`Pausando por ${segundos} segundos...`);
  await page.waitForTimeout(segundos * 1000);
}

/**
 * Atualiza o status do teste na página e no console
 * @param {Page} page - Objeto Page do Playwright
 * @param {string} message - Mensagem de status
 */
async function updateStatus(page, message) {
  console.log(message);
  await page.evaluate((msg) => {
    if (window.updateTestStatus) {
      window.updateTestStatus(msg);
    }
  }, message);
}

/**
 * Configura a página para mostrar informações sobre o teste
 * @param {Page} page - Objeto Page do Playwright
 * @param {string} testName - Nome do teste sendo executado
 */
async function configurarPaginaTeste(page, testName) {
  // Imprimir instruções no console
  console.log('\n\n');
  console.log('=========================================================');
  console.log('🚀 PARA MELHOR VISUALIZAÇÃO: 🚀');
  console.log('1. Clique com o botão direito na página do navegador');
  console.log('2. Selecione "Inspecionar" ou pressione F12');
  console.log('3. Vá para a aba "Console" nos DevTools');
  console.log('4. Você verá os logs dos testes aparecerem aqui');
  console.log('=========================================================');
  console.log('\n\n');
  
  // Adicionar elementos na página para mostrar o progresso do teste
  await page.evaluate((nome) => {
    console.log(`%c 🚀 TESTE: ${nome} 🚀 `, 'background: #222; color: #bada55; font-size: 16px; font-weight: bold;');
    console.log('%c Acompanhe os logs no console para melhor visualização ', 'background: #222; color: #ffff00; font-size: 14px;');
    
    // Criar uma div flutuante na página
    const infoDiv = document.createElement('div');
    infoDiv.id = 'test-info';
    infoDiv.style.position = 'fixed';
    infoDiv.style.top = '10px';
    infoDiv.style.left = '10px';
    infoDiv.style.zIndex = '9999';
    infoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    infoDiv.style.color = '#00ff00';
    infoDiv.style.padding = '10px';
    infoDiv.style.borderRadius = '5px';
    infoDiv.style.fontFamily = 'monospace';
    infoDiv.style.fontSize = '14px';
    infoDiv.style.maxWidth = '400px';
    infoDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    infoDiv.innerHTML = `<h3>Teste: ${nome}</h3><p id="test-status">Iniciando teste...</p>`;
    document.body.appendChild(infoDiv);
    
    // Expor função para atualizar o status
    window.updateTestStatus = (message) => {
      const statusElement = document.getElementById('test-status');
      if (statusElement) {
        statusElement.innerHTML = message;
      }
    };
  }, testName);
  
  await pausar(page, 3);
}

/**
 * Finaliza o teste com mensagem de sucesso
 * @param {Page} page - Objeto Page do Playwright
 */
async function finalizarTeste(page) {
  await page.evaluate(() => {
    console.log('%c ✅ TESTE COMPLETADO COM SUCESSO! ✅ ', 'background: #222; color: #00ff00; font-size: 16px; font-weight: bold;');
    
    const infoDiv = document.getElementById('test-info');
    if (infoDiv) {
      infoDiv.style.backgroundColor = 'rgba(0, 100, 0, 0.9)';
      infoDiv.innerHTML = '<h3>✅ Teste Concluído!</h3><p>O teste foi executado com sucesso.</p>';
    }
  });
  
  await pausar(page, 5);
}

/**
 * Prepara o ambiente limpo para o teste
 * @param {Page} page - Objeto Page do Playwright
 */
async function prepararAmbienteTeste(page) {
  // Navegando para a página
  await updateStatus(page, 'Navegando para a página inicial...');
  await page.goto('/');
  await pausar(page, 3);
  
  // Limpando localStorage para começar do zero
  await updateStatus(page, 'Limpando dados anteriores...');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await pausar(page, 3);
}

module.exports = {
  pausar,
  updateStatus,
  configurarPaginaTeste,
  finalizarTeste,
  prepararAmbienteTeste
};