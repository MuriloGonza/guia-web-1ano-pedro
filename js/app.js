// Arquivo de script principal

// ===================================
// FUNCIONALIDADE DO MENU HAMBÚRGUER
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuPrincipal = document.querySelector('#menu-principal');

    if (menuHamburguer && menuPrincipal) {
        menuHamburguer.addEventListener('click', () => {
            // Alterna a classe 'active' no menu
            menuPrincipal.classList.toggle('active');

            // Atualiza a acessibilidade (aria-expanded)
            const isExpanded = menuPrincipal.classList.contains('active');
            menuHamburguer.setAttribute('aria-expanded', isExpanded);
        });
    }

    // ===================================
    // ATUALIZAR ANO NO RODAPÉ
    // ===================================
    const anoAtualSpan = document.querySelector('#ano-atual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }
    
    // ===================================
    // LÓGICA DA PÁGINA DE TECNOLOGIAS
    // ===================================
    if (document.querySelector('.tech-grid-section')) { // Executa somente se estiver na página de tecnologias
        
        // 1. FONTE DE DADOS (Source of Truth)
        const tecnologias = [
            {
                id: 'react',
                nome: 'React',
                descricao: 'Uma biblioteca JavaScript para construir interfaces de usuário componentizadas.',
                categoria: 'frontend',
                nivel: 'intermediario',
                pros: ['Ecossistema gigante (libs, ferramentas)', 'Performance com Virtual DOM', 'Reutilização de componentes'],
                contras: ['Curva de aprendizado inicial', 'Não é um framework completo (precisa de libs para rotas, etc.)'],
                quandoEscolher: ['Projetos Single-Page Application (SPA)', 'Interfaces complexas e dinâmicas', 'Quando a performance de UI é crítica'],
                link: 'https://react.dev/'
            },
            {
                id: 'nodejs',
                nome: 'Node.js',
                descricao: 'Um ambiente de execução JavaScript no servidor, permitindo construir APIs e back-ends.',
                categoria: 'backend',
                nivel: 'intermediario',
                pros: ['JavaScript ponta a ponta (front e back)', 'Extremamente rápido para operações I/O', 'Vasta coleção de pacotes (NPM)'],
                contras: ['Não ideal para tarefas pesadas de CPU', 'Gerenciamento de callbacks pode ser complexo (async/await ajuda)'],
                quandoEscolher: ['APIs RESTful e GraphQL', 'Aplicações em tempo real (chats, jogos)', 'Microsserviços'],
                link: 'https://nodejs.org/'
            },
            {
                id: 'postgresql',
                nome: 'PostgreSQL',
                descricao: 'Um poderoso sistema de banco de dados relacional de código aberto.',
                categoria: 'database',
                nivel: 'avancado',
                pros: ['Confiável e robusto (ACID)', 'Suporte a tipos de dados avançados (JSONB, PostGIS)', 'Extensível e customizável'],
                contras: ['Pode ser mais complexo de configurar que o MySQL', 'Performance de leitura pode ser menor que em bancos NoSQL para certas cargas'],
                quandoEscolher: ['Sistemas que exigem integridade de dados (financeiros, acadêmicos)', 'Aplicações com consultas complexas', 'Projetos que precisam de flexibilidade geoespacial ou com JSON'],
                link: 'https://www.postgresql.org/'
            },
            {
                id: 'docker',
                nome: 'Docker',
                descricao: 'Uma plataforma para desenvolver, enviar e executar aplicações em contêineres.',
                categoria: 'devops',
                nivel: 'intermediario',
                pros: ['Ambientes consistentes (dev, teste, prod)', 'Isolamento de dependências', 'Implantação rápida e escalável'],
                contras: ['Pode consumir muitos recursos', 'Gerenciamento de dados persistentes exige cuidado'],
                quandoEscolher: ['Padronização de ambientes de desenvolvimento', 'Arquitetura de microsserviços', 'Simplificar o processo de deploy'],
                link: 'https://www.docker.com/'
            },
            {
                id: 'jest',
                nome: 'Jest',
                descricao: 'Um framework de testes de JavaScript com foco em simplicidade.',
                categoria: 'testing',
                nivel: 'intermediario',
                pros: ['Configuração zero para a maioria dos projetos JS', 'API simples e intuitiva', 'Testes rápidos e paralelos'],
                contras: ['Pode ser lento em projetos muito grandes', 'Debugging de testes pode ser complicado às vezes'],
                quandoEscolher: ['Testes unitários e de integração para aplicações JS', 'Projetos React (integração nativa)', 'Ambientes que precisam de relatórios de cobertura de código'],
                link: 'https://jestjs.io/'
            },
            {
                id: 'vuejs',
                nome: 'Vue.js',
                descricao: 'Um framework progressivo para a construção de interfaces de usuário.',
                categoria: 'frontend',
                nivel: 'intermediario',
                pros: ['Curva de aprendizado suave', 'Excelente documentação', 'Performance e flexibilidade'],
                contras: ['Ecossistema menor que o do React', 'Menos oportunidades de emprego em algumas regiões'],
                quandoEscolher: ['Projetos que precisam ser entregues rapidamente', 'Quando a equipe tem menos experiência com frameworks JS', 'Aplicações que podem crescer de pequenas para grandes'],
                link: 'https://vuejs.org/'
            },
            {
                id: 'python-django',
                nome: 'Python (Django)',
                descricao: 'Um framework web de alto nível que incentiva o desenvolvimento rápido e o design limpo.',
                categoria: 'backend',
                nivel: 'intermediario',
                pros: ['Desenvolvimento muito rápido ("baterias inclusas")', 'Admin customizável pronto para uso', 'Segurança robusta por padrão'],
                contras: ['Monolítico e opinativo (menos flexível)', 'Não é ideal para pequenas APIs ou microsserviços'],
                quandoEscolher: ['Sistemas complexos baseados em conteúdo (CMS, blogs)', 'Projetos com prazos curtos', 'Aplicações que precisam de um painel de administração poderoso'],
                link: 'https://www.djangoproject.com/'
            },
            {
                id: 'mongodb',
                nome: 'MongoDB',
                descricao: 'Um banco de dados NoSQL orientado a documentos, focado em escalabilidade e flexibilidade.',
                categoria: 'database',
                nivel: 'intermediario',
                pros: ['Esquema flexível (sem tabelas rígidas)', 'Escalabilidade horizontal fácil', 'Alta performance para leitura e escrita'],
                contras: ['Não garante transações ACID complexas', 'Consistência de dados pode ser um desafio'],
                quandoEscolher: ['Aplicações com dados não estruturados ou semi-estruturados', 'Projetos que precisam escalar rapidamente', 'Prototipagem e desenvolvimento ágil'],
                link: 'https://www.mongodb.com/'
            },
            {
                id: 'aws',
                nome: 'AWS (Amazon Web Services)',
                descricao: 'Uma plataforma de computação em nuvem abrangente e amplamente adotada.',
                categoria: 'devops',
                nivel: 'avancado',
                pros: ['Gama enorme de serviços', 'Escalabilidade global e confiabilidade', 'Líder de mercado com vasta documentação'],
                contras: ['Curva de aprendizado íngreme', 'Custos podem se tornar complexos e altos'],
                quandoEscolher: ['Infraestrutura para qualquer tipo de aplicação, de pequenas a gigantes', 'Quando se precisa de serviços especializados (IA, Big Data)', 'Hospedagem de aplicações com alta demanda'],
                link: 'https://aws.amazon.com/'
            },
            {
                id: 'cypress',
                nome: 'Cypress',
                descricao: 'Uma ferramenta de testes end-to-end que roda diretamente no navegador.',
                categoria: 'testing',
                nivel: 'avancado',
                pros: ['Debugging visual e interativo', 'Testes rápidos e confiáveis (sem "flakes")', 'Fácil de configurar'],
                contras: ['Roda apenas em JavaScript', 'Não suporta múltiplos navegadores na mesma instância de teste (paralelismo)'],
                quandoEscolher: ['Testar o fluxo completo de uma aplicação web', 'Garantir que a interface do usuário se comporta como esperado', 'Projetos que precisam de uma suíte de testes robusta e visual'],
                link: 'https://www.cypress.io/'
            }
        ];

        // 2. ELEMENTOS DO DOM
        const techGrid = document.getElementById('tech-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('search-input');
        const noResultsMessage = document.getElementById('no-results');

        // 3. FUNÇÃO DE RENDERIZAÇÃO
        function displayTechCards(techsToDisplay) {
            techGrid.innerHTML = ''; // Limpa o grid antes de adicionar novos cards
            if (techsToDisplay.length === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }

            techsToDisplay.forEach(tech => {
                const card = document.createElement('article');
                card.className = 'tech-card';
                card.dataset.category = tech.categoria;

                card.innerHTML = `
                    <div class="card-header">
                        <h3>${tech.nome}</h3>
                        <span class="badge" data-level="${tech.nivel}">${tech.nivel}</span>
                    </div>
                    <p>${tech.descricao}</p>
                    <button class="details-btn" data-tech-id="${tech.id}">Ver Detalhes</button>
                `;
                techGrid.appendChild(card);
            });
        }

        // 4. LÓGICA DE FILTRAGEM E BUSCA
        function filterAndSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

            let filteredTechs = tecnologias;

            // Primeiro, filtra por categoria
            if (activeCategory !== 'all') {
                filteredTechs = filteredTechs.filter(tech => tech.categoria === activeCategory);
            }

            // Depois, filtra por busca
            if (searchTerm) {
                filteredTechs = filteredTechs.filter(tech => 
                    tech.nome.toLowerCase().includes(searchTerm) ||
                    tech.descricao.toLowerCase().includes(searchTerm)
                );
            }

            displayTechCards(filteredTechs);
        }
        
        // 5. EVENT LISTENERS PARA FILTROS E BUSCA
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const category = button.dataset.category;
                localStorage.setItem('lastFilterCategory', category); // Salva no localStorage
                filterAndSearch();
            });
        });

        searchInput.addEventListener('input', filterAndSearch);
        
        // 6. LÓGICA DO MODAL (com Event Delegation)
        const modalOverlay = document.getElementById('tech-modal');
        const closeModalBtn = document.getElementById('close-modal');

        function openModal(techId) {
            const tech = tecnologias.find(t => t.id === techId);
            if (!tech) return;

            document.getElementById('modal-title').textContent = tech.nome;
            document.getElementById('modal-description').textContent = tech.descricao;
            document.getElementById('modal-tech-name').textContent = tech.nome;
            document.getElementById('modal-link').href = tech.link;
            
            const prosList = document.getElementById('modal-pros');
            prosList.innerHTML = tech.pros.map(pro => `<li>${pro}</li>`).join('');
            
            const consList = document.getElementById('modal-cons');
            consList.innerHTML = tech.contras.map(con => `<li>${con}</li>`).join('');

            const whenList = document.getElementById('modal-when-to-choose');
            whenList.innerHTML = tech.quandoEscolher.map(item => `<li>${item}</li>`).join('');

            modalOverlay.style.display = 'flex';
        }

        function closeModal() {
            modalOverlay.style.display = 'none';
        }

        techGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('details-btn')) {
                const techId = event.target.dataset.techId;
                openModal(techId);
            }
        });

        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) { // Fecha só se clicar no fundo
                closeModal();
            }
        });
        
        // 7. INICIALIZAÇÃO DA PÁGINA
        function initializePage() {
            const savedCategory = localStorage.getItem('lastFilterCategory') || 'all';
            const buttonToActivate = document.querySelector(`.filter-btn[data-category="${savedCategory}"]`);
            
            if (buttonToActivate) {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                buttonToActivate.classList.add('active');
            }
            
            filterAndSearch();
        }
        
        initializePage(); // Roda a função de inicialização
    }
});
