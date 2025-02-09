// Funções para a página de Recursos
function showDetails(resourceId) {
    alert(`Detalhes do recurso: ${resourceId}`);
}

// Filtragem de recursos
document.getElementById('searchInput').addEventListener('input', filterResources);
document.getElementById('categoryFilter').addEventListener('change', filterResources);

function filterResources() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    document.querySelectorAll('.resource-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const cardCategory = card.dataset.category;
        
        const matchesSearch = text.includes(searchTerm);
        const matchesCategory = category === 'all' || cardCategory === category;
        
        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
}

// Funções para a Comunidade
function createPost() {
    const content = document.getElementById('postContent').value;
    if (content.trim()) {
        const postHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h6>Novo Usuário</h6>
                    <p class="text-muted small">Publicado agora</p>
                    <p>${content}</p>
                </div>
            </div>
        `;
        document.getElementById('postsContainer').insertAdjacentHTML('afterbegin', postHTML);
        document.getElementById('postContent').value = '';
    }
}

// Validação de Formulário de Contato
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
    }
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso!');
    document.getElementById('contactForm').reset();
    return false; // Evita reload da página
}