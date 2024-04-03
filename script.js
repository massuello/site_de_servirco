// Adiciona um ouvinte de evento ao botão
document.getElementById('modoEscuroBtn').addEventListener('click', function() {
    // Alternar entre adicionar e remover a classe 'dark-mode' do corpo da página
    document.body.classList.toggle('dark-mode');
    
    // Alterna o texto do botão
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Escuro';
    }
});
